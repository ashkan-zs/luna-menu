import {defineField, defineType} from 'sanity'

export const restaurant = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description:
        'Whether this restaurant is publicly indexable and ready for search engines.',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ownerEmail',
      title: 'Owner email',
      type: 'email',
    }),
    defineField({
      name: 'ownerId',
      title: 'Owner ID',
      type: 'string',
      description:
        'Stable user ID from the authentication provider. Used for restaurant owner access control.',
    }),
    defineField({
      name: 'themeId',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Luna', value: 'luna'},
          {title: 'Artisan', value: 'artisan'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'luna',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'restaurantLocation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'restaurantContact',
    }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'restaurantSocials',
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening hours',
      type: 'array',
      of: [{type: 'openingHour'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'restaurantContent',
    }),
    defineField({
      name: 'settings',
      title: 'Settings',
      type: 'restaurantSettings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subscription',
      title: 'Subscription',
      type: 'restaurantSubscription',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug.current',
      themeId: 'themeId',
      isPublished: 'isPublished',
      media: 'coverImage',
    },
    prepare({title, slug, themeId, isPublished}) {
      return {
        title,
        subtitle: [
          slug,
          themeId,
          isPublished ? 'Published' : 'Draft',
        ].filter(Boolean).join(' · '),
      }
    },
  },
})
