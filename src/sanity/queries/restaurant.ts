import { defineQuery } from "next-sanity";

import { restaurantProjection } from "./fragments";

export const restaurantsSlugsQuery = defineQuery(`
  *[_type == "restaurant" && isPublished == true && defined(slug.current)]
    | order(name asc) {
      "slug": slug.current
    }
`);

export const restaurantBySlugQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    slug.current == $slug &&
    isPublished == true
  ][0]${restaurantProjection}
`);

export const restaurantByIdQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    _id == $restaurantId &&
    isPublished == true
  ][0]${restaurantProjection}
`);
