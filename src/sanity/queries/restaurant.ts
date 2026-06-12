import { defineQuery } from "next-sanity";

import { restaurantProjection } from "./fragments";

export const restaurantsSlugsQuery = defineQuery(`
  *[_type == "restaurant" && isPublished == true && defined(slug.current)]
    | order(name asc) {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
`);

export const restaurantBySlugQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    slug.current == $slug
  ][0]${restaurantProjection}
`);

export const restaurantByIdQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    _id == $restaurantId
  ][0]${restaurantProjection}
`);
