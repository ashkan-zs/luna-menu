import {defineField, defineType} from 'sanity'

export const restaurantSocials = defineType({
  name: 'restaurantSocials',
  title: 'Social links',
  type: 'object',
  fields: [
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok',
      type: 'url',
    }),
  ],
})
