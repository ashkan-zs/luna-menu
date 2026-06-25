import { defineQuery } from "next-sanity";

import { restaurantProjection } from "./fragments";

export const restaurantsSlugsQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    defined(slug.current) &&
    (
      publishingStatus == "published" ||
      (!defined(publishingStatus) && isPublished == true)
    )
  ]
    | order(name asc) {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
`);

export const restaurantBySlugQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    slug.current == $slug &&
    (
      publishingStatus == "published" ||
      (!defined(publishingStatus) && isPublished == true)
    )
  ][0]${restaurantProjection}
`);

export const restaurantByIdQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    _id == $restaurantId &&
    (
      publishingStatus == "published" ||
      (!defined(publishingStatus) && isPublished == true)
    )
  ][0]${restaurantProjection}
`);

export const restaurantPreviewBySlugQuery = defineQuery(`
  *[
    _type == "restaurant" &&
    slug.current == $slug &&
    (
      publishingStatus in ["draft", "preview"] ||
      (!defined(publishingStatus) && isPublished != true)
    )
  ][0]${restaurantProjection}
`);
