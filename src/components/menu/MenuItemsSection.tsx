import { MENU_ITEMS } from "@/data/menu";
import type { MenuItem as MenuItemType } from "@/types/menu";
import MenuItem from "./MenuItemCard";

function groupItemsByCategory(
  items: MenuItemType[],
): [string, MenuItemType[]][] {
  const groupedItems = new Map<string, MenuItemType[]>();

  for (const item of items) {
    const categoryItems = groupedItems.get(item.category) ?? [];
    categoryItems.push(item);
    groupedItems.set(item.category, categoryItems);
  }

  return Array.from(groupedItems.entries());
}

// support Turkish language
function slugify(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("tr")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function MenuItemsSection({
  restaurantName = "Luna Bistro",
}: {
  restaurantName?: string;
}) {
  const groupedItems = groupItemsByCategory(MENU_ITEMS);

  return (
    <section
      id="menu"
      className="scroll-mt-28 px-5 py-14 sm:px-8 lg:px-12"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-menu-brass/80">
            Signature Selection
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-serif text-3xl text-menu-ivory sm:text-4xl"
          >
            Tonight&apos;s Menu
          </h2>
          <p className="mt-4 text-sm leading-6 text-menu-cream/64 sm:text-base">
            Seasonal plates, polished cocktails, and café favorites arranged for
            a quiet, cinematic dining experience.
          </p>
        </div>

        <div className="space-y-14">
          {groupedItems.map(([category, items]) => {
            const headingId = `${slugify(category)}-heading`;

            return (
              <section
                key={category}
                aria-labelledby={headingId}
                className="space-y-5"
              >
                <div className="flex items-end justify-between gap-5 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-menu-brass/70">
                      {restaurantName}
                    </p>
                    <h3
                      id={headingId}
                      className="mt-2 font-serif text-2xl text-menu-warm-white sm:text-3xl"
                    >
                      {category}
                    </h3>
                  </div>
                  <span className="rounded-full border border-menu-brass/20 bg-menu-brass/10 px-3 py-1 text-xs font-medium text-menu-brass">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
