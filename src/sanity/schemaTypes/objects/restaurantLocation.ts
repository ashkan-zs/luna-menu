import {defineField, defineType} from 'sanity'

export const restaurantLocation = defineType({
  name: 'restaurantLocation',
  title: 'Location',
  type: 'object',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
  ],
})
