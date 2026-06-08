import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "next-sanity";

import { CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { getMenuAllergenFromLabel } from "@/config/allergens";
import type { CategorySeed, MenuAllergen, MenuItemSeed } from "@/types/menu";

const TARGET_RESTAURANT_SLUG = "oteki";
const SOURCE_RESTAURANT_ID = "oteki-restaurant";

type SanityReference = {
  _type: "reference";
  _ref: string;
};

type SeedCategory = {
  slug: string;
  label: CategorySeed["label"];
  description?: CategorySeed["description"];
  order: number;
};

type SeedMenuItem = {
  sourceId: string;
  categorySlug: string;
  name: MenuItemSeed["name"];
  description: MenuItemSeed["description"];
  price?: MenuItemSeed["price"];
  currency: NonNullable<MenuItemSeed["currency"]>;
  priceOptions?: MenuItemSeed["priceOptions"];
  order: number;
  featured: boolean;
  available: boolean;
  ingredients?: MenuItemSeed["ingredients"];
  allergens?: MenuAllergen[];
  nutrition?: MenuItemSeed["nutrition"];
  tags?: MenuItemSeed["tags"];
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
      "Missing Sanity seed environment variables.",
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

function categoryDocumentId(slug: string) {
  return `${TARGET_RESTAURANT_SLUG}-category-${slug}`;
}

function menuItemDocumentId(sourceId: string) {
  return `${TARGET_RESTAURANT_SLUG}-menu-item-${sourceId}`;
}

function toReference(documentId: string): SanityReference {
  return {
    _type: "reference",
    _ref: documentId,
  };
}

function mapSeedAllergens(
  allergens: MenuItemSeed["allergens"],
): MenuAllergen[] | undefined {
  if (!allergens?.length) {
    return undefined;
  }

  const mappedAllergens = allergens
    .map((allergen) => {
      if (typeof allergen === "string") {
        return getMenuAllergenFromLabel(allergen) ?? allergen;
      }

      return getMenuAllergenFromLabel(allergen.en);
    })
    .filter((allergen): allergen is MenuAllergen => Boolean(allergen));

  return Array.from(new Set(mappedAllergens));
}

const categories: SeedCategory[] = CATEGORIES.filter(
  (category) => category.restaurantId === SOURCE_RESTAURANT_ID,
).map((category, index) => ({
  slug: category.slug ?? category.id,
  label: category.label,
  description: category.description,
  order: category.order ?? index,
}));

const menuItems: SeedMenuItem[] = MENU_ITEMS.filter(
  (item) => item.restaurantId === SOURCE_RESTAURANT_ID,
).map((item, index) => ({
  sourceId: item.id,
  categorySlug: item.category,
  name: item.name,
  description: item.description,
  price: item.price,
  currency: item.currency ?? "TRY",
  priceOptions: item.priceOptions,
  order: item.order ?? index,
  featured: item.featured ?? false,
  available: item.available ?? true,
  ingredients: item.ingredients,
  allergens: mapSeedAllergens(item.allergens),
  nutrition: item.nutrition,
  tags: item.tags,
}));

async function upsertCategory(restaurantId: string, category: SeedCategory) {
  const existingCategory = await client.fetch<{ _id: string } | null>(
    `*[
      _type == "menuCategory" &&
      restaurant._ref == $restaurantId &&
      slug.current == $slug
    ][0]{_id}`,
    { restaurantId, slug: category.slug },
  );

  const document = {
    _type: "menuCategory",
    restaurant: toReference(restaurantId),
    label: category.label,
    slug: { _type: "slug", current: category.slug },
    description: category.description,
    order: category.order,
  };

  if (existingCategory?._id) {
    await client.patch(existingCategory._id).set(document).commit();
    return existingCategory._id;
  }

  const createdCategory = await client.create({
    _id: categoryDocumentId(category.slug),
    ...document,
  });

  return createdCategory._id;
}

async function upsertMenuItem(
  restaurantId: string,
  categoryIdsBySlug: Record<string, string>,
  item: SeedMenuItem,
) {
  const categoryId = categoryIdsBySlug[item.categorySlug];

  if (!categoryId) {
    throw new Error(`Missing category for menu item: ${item.name.en}`);
  }

  const existingItem = await client.fetch<{ _id: string } | null>(
    `*[
      _type == "menuItem" &&
      restaurant._ref == $restaurantId &&
      name.en == $name
    ][0]{_id}`,
    { restaurantId, name: item.name.en },
  );

  const document = {
    _type: "menuItem",
    restaurant: toReference(restaurantId),
    category: toReference(categoryId),
    name: item.name,
    description: item.description,
    price: item.price,
    currency: item.currency,
    priceOptions: item.priceOptions,
    order: item.order,
    featured: item.featured,
    available: item.available,
    ingredients: item.ingredients,
    allergens: item.allergens,
    nutrition: item.nutrition,
    tags: item.tags,
  };

  if (existingItem?._id) {
    await client.patch(existingItem._id).set(document).commit();
    return existingItem._id;
  }

  const createdItem = await client.create({
    _id: menuItemDocumentId(item.sourceId),
    ...document,
  });

  return createdItem._id;
}

async function main() {
  const restaurant = await client.fetch<{ _id: string; name: string } | null>(
    `*[_type == "restaurant" && slug.current == $slug][0]{_id, name}`,
    { slug: TARGET_RESTAURANT_SLUG },
  );

  if (!restaurant?._id) {
    throw new Error(
      `Restaurant with slug "${TARGET_RESTAURANT_SLUG}" was not found.`,
    );
  }

  const categoryIdsBySlug: Record<string, string> = {};

  for (const category of categories) {
    categoryIdsBySlug[category.slug] = await upsertCategory(
      restaurant._id,
      category,
    );
  }

  const menuItemIds: string[] = [];

  for (const item of menuItems) {
    menuItemIds.push(
      await upsertMenuItem(restaurant._id, categoryIdsBySlug, item),
    );
  }

  console.log(
    [
      `Seeded Sanity menu data for "${restaurant.name}" (${TARGET_RESTAURANT_SLUG}).`,
      `Categories: ${Object.values(categoryIdsBySlug).length}`,
      `Menu items: ${menuItemIds.length}`,
    ].join("\n"),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
