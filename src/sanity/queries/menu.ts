import { defineQuery } from "next-sanity";

import {
  menuCategoryProjection,
  menuItemProjection,
  restaurantProjection,
} from "./fragments";

export const menuCategoriesByRestaurantIdQuery = defineQuery(`
  *[
    _type == "menuCategory" &&
    restaurant._ref == $restaurantId
  ] | order(order asc, label.en asc) ${menuCategoryProjection}
`);

export const menuItemsByRestaurantIdQuery = defineQuery(`
  *[
    _type == "menuItem" &&
    restaurant._ref == $restaurantId
  ] | order(category->order asc, order asc, name.en asc) ${menuItemProjection}
`);

export const restaurantMenuBySlugQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    slug.current == $slug &&
    isPublished == true
  ][0] {
    "restaurant": ${restaurantProjection},
    "categories": *[
      _type == "menuCategory" &&
      restaurant._ref == ^._id
    ] | order(order asc, label.en asc) ${menuCategoryProjection},
    "items": *[
      _type == "menuItem" &&
      restaurant._ref == ^._id
    ] | order(category->order asc, order asc, name.en asc) ${menuItemProjection}
  }
`);
