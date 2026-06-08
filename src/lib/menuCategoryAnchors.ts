import type { Category } from "@/types/menu";

export function getMenuCategorySectionId(category: Pick<Category, "slug">) {
  return `category-${category.slug}`;
}
