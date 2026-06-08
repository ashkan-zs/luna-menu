import { createReadStream, existsSync, readFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { createClient } from "next-sanity";

import { MENU_ITEMS } from "@/data/menu";
import type { MenuItemSeed } from "@/types/menu";

const TARGET_RESTAURANT_SLUG = "oteki";
const SOURCE_RESTAURANT_ID = "oteki-restaurant";
const CONVERTED_IMAGE_DIRECTORY =
  process.env.OTEKI_MENU_JPG_DIR ?? "public/images/oteki-restaurant/menu-jpg";
const forceUpload = process.argv.includes("--force");

type ExistingMenuItem = {
  _id: string;
  name?: {
    en?: string;
  };
  image?: {
    asset?: {
      _ref?: string;
    };
  };
};

function loadEnvFile(fileName: string) {
  const filePath = resolve(process.cwd(), fileName);

  if (!existsSync(filePath)) {
    return;
  }

  const fileContent = readFileSync(filePath, "utf8");

  for (const line of fileContent.split("\n")) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const rawValue = trimmedLine.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    process.env[key] ??= value;
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-06";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    [
      "Missing Sanity upload environment variables.",
      "Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN.",
    ].join(" "),
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

function getConvertedJpgImagePath(imagePath: string) {
  const sourceFileName = basename(imagePath);
  const jpgFileName = sourceFileName.replace(/\.[^.]+$/, ".jpg");

  return resolve(process.cwd(), CONVERTED_IMAGE_DIRECTORY, jpgFileName);
}

function isSupportedSanityUploadFormat(filePath: string) {
  return /\.(jpe?g|png|gif|svg|tiff?)$/i.test(filePath);
}

function getSeedMenuItemsWithImages() {
  return MENU_ITEMS.filter(
    (item): item is MenuItemSeed & { image: string } =>
      item.restaurantId === SOURCE_RESTAURANT_ID &&
      typeof item.image === "string" &&
      item.image.length > 0,
  );
}

async function findRestaurantId() {
  const restaurant = await client.fetch<{ _id: string } | null>(
    `*[_type == "restaurant" && slug.current == $slug][0]{_id}`,
    { slug: TARGET_RESTAURANT_SLUG },
  );

  if (!restaurant?._id) {
    throw new Error(
      `Restaurant with slug "${TARGET_RESTAURANT_SLUG}" was not found.`,
    );
  }

  return restaurant._id;
}

async function findMenuItem(restaurantId: string, itemName: string) {
  return client.fetch<ExistingMenuItem | null>(
    `*[
      _type == "menuItem" &&
      restaurant._ref == $restaurantId &&
      name.en == $name
    ][0]{
      _id,
      name,
      image {
        asset
      }
    }`,
    { restaurantId, name: itemName },
  );
}

async function uploadAndPatchImage(
  menuItem: ExistingMenuItem,
  seedItem: MenuItemSeed & { image: string },
) {
  const localImagePath = getConvertedJpgImagePath(seedItem.image);

  if (!existsSync(localImagePath)) {
    return {
      status: "missing-file",
      name: seedItem.name.en,
      detail: localImagePath,
    };
  }

  if (!isSupportedSanityUploadFormat(localImagePath)) {
    return {
      status: "unsupported-format",
      name: seedItem.name.en,
      detail: localImagePath,
    };
  }

  if (menuItem.image?.asset?._ref && !forceUpload) {
    return {
      status: "skipped-existing",
      name: seedItem.name.en,
      detail: menuItem.image.asset._ref,
    };
  }

  const asset = await client.assets.upload(
    "image",
    createReadStream(localImagePath),
    {
      filename: basename(localImagePath),
      source: {
        name: "oteki-menu-seed",
        id: localImagePath,
        url: localImagePath,
      },
    },
  );

  await client
    .patch(menuItem._id)
    .set({
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
        alt: seedItem.name,
      },
    })
    .commit();

  return {
    status: "uploaded",
    name: seedItem.name.en,
    detail: asset._id,
  };
}

async function main() {
  const restaurantId = await findRestaurantId();
  const seedItems = getSeedMenuItemsWithImages();
  const results = [];

  for (const seedItem of seedItems) {
    const menuItem = await findMenuItem(restaurantId, seedItem.name.en);

    if (!menuItem?._id) {
      results.push({
        status: "missing-menu-item",
        name: seedItem.name.en,
        detail: "No matching Sanity menu item",
      });
      continue;
    }

    results.push(await uploadAndPatchImage(menuItem, seedItem));
  }

  const counts = results.reduce<Record<string, number>>((summary, result) => {
    summary[result.status] = (summary[result.status] ?? 0) + 1;
    return summary;
  }, {});

  console.log(`Image upload results for "${TARGET_RESTAURANT_SLUG}":`);
  console.log(`Using converted image directory: ${CONVERTED_IMAGE_DIRECTORY}`);
  console.table(counts);

  for (const result of results) {
    if (result.status !== "uploaded" && result.status !== "skipped-existing") {
      console.log(`${result.status}: ${result.name} (${result.detail})`);
    }
  }

  if (counts["unsupported-format"]) {
    console.log(
      [
        "Sanity image uploads support originals such as JPG, PNG, GIF, SVG, and TIFF.",
        "Convert unsupported local images, then run this script again.",
      ].join(" "),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
