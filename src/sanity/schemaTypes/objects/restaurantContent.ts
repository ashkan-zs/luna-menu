import {defineField, defineType} from 'sanity'

export const restaurantContent = defineType({
  name: 'restaurantContent',
  title: 'Restaurant content',
  type: 'object',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'localizedString'}),
        defineField({name: 'title', title: 'Title', type: 'localizedString'}),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'localizedText',
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured section',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'localizedString'}),
        defineField({name: 'title', title: 'Title', type: 'localizedString'}),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'localizedText',
        }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Story section',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'localizedString'}),
        defineField({name: 'title', title: 'Title', type: 'localizedString'}),
        defineField({name: 'body', title: 'Body', type: 'localizedText'}),
        defineField({name: 'quote', title: 'Quote', type: 'localizedText'}),
        defineField({name: 'quoteBy', title: 'Quote by', type: 'localizedString'}),
        defineField({
          name: 'atmosphere',
          title: 'Atmosphere label',
          type: 'localizedString',
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'statement',
          title: 'Statement',
          type: 'localizedText',
        }),
      ],
    }),
  ],
})
