import {defineField, defineType} from 'sanity'

export const restaurantSettings = defineType({
  name: 'restaurantSettings',
  title: 'Menu settings',
  type: 'object',
  fields: [
    defineField({
      name: 'showPrices',
      title: 'Show prices',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showImages',
      title: 'Show images',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enableSearch',
      title: 'Enable search',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enableCategoryTabs',
      title: 'Enable category tabs',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
