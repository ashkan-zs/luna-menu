export const imageWithAltProjection = `{
  _type,
  asset,
  crop,
  hotspot,
  alt
}`;

export const restaurantProjection = `{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  name,
  slug,
  ownerId,
  ownerEmail,
  logo ${imageWithAltProjection},
  themeId,
  publishingStatus,
  tagline,
  description,
  coverImage ${imageWithAltProjection},
  location,
  contact,
  socials,
  openingHours,
  content,
  settings,
  subscription,
  isPublished,
  seo {
    title,
    description,
    image ${imageWithAltProjection}
  }
}`;

export const menuCategoryProjection = `{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  restaurant,
  label,
  slug,
  description,
  order
}`;

export const menuItemProjection = `{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  restaurant,
  category->${menuCategoryProjection},
  name,
  description,
  price,
  currency,
  priceOptions,
  image ${imageWithAltProjection},
  order,
  featured,
  available,
  ingredients,
  allergens,
  nutrition,
  tags
}`;
