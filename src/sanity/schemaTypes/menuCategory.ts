import {defineField, defineType} from 'sanity'

import {apiVersion} from '../env'

type SanityReference = {
  _ref?: string
}

export const menuCategory = defineType({
  name: 'menuCategory',
  title: 'Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{type: 'restaurant'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'label.en',
        maxLength: 96,
        isUnique: async (slug, context) => {
          const document = context.document
          const documentId = document?._id?.replace(/^drafts\./, '')
          const restaurant = document?.restaurant as SanityReference | undefined
          const restaurantRef = restaurant?._ref

          if (!documentId || !restaurantRef) {
            return true
          }

          const client = context.getClient({apiVersion})

          return client.fetch(
            `!defined(*[
              _type == "menuCategory" &&
              !(_id in [$draftId, $publishedId]) &&
              slug.current == $slug &&
              restaurant._ref == $restaurantRef
            ][0]._id)`,
            {
              draftId: `drafts.${documentId}`,
              publishedId: documentId,
              restaurantRef,
              slug,
            },
          )
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'label.en',
      restaurant: 'restaurant.name',
      slug: 'slug.current',
    },
    prepare({title, restaurant, slug}) {
      return {
        title,
        subtitle: [restaurant, slug].filter(Boolean).join(' · '),
      }
    },
  },
})
