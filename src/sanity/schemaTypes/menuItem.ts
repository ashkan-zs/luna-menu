import {defineArrayMember, defineField, defineType} from 'sanity'

import {MENU_ALLERGEN_OPTIONS} from '../../config/allergens'

type SanityReference = {
  _ref?: string
}

type MenuItemParent = {
  price?: number
  priceOptions?: unknown[]
}

const currencyOptions = [
  {title: 'Turkish Lira', value: 'TRY'},
  {title: 'US Dollar', value: 'USD'},
  {title: 'Euro', value: 'EUR'},
]

const tagOptions = [
  {title: 'Signature', value: 'signature'},
  {title: "Chef's Choice", value: 'chef_choice'},
  {title: 'Spicy', value: 'spicy'},
  {title: 'Vegetarian', value: 'vegetarian'},
  {title: 'Vegan', value: 'vegan'},
  {title: 'Gluten Free', value: 'gluten_free'},
  {title: 'Dairy Free', value: 'dairy_free'},
  {title: 'Seasonal', value: 'seasonal'},
  {title: 'Seafood', value: 'seafood'},
]

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu item',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'menuCategory'}],
      options: {
        filter: ({document}) => {
          const restaurant = document.restaurant as SanityReference | undefined
          const restaurantRef = restaurant?._ref

          if (!restaurantRef) {
            return {
              filter: '_type == "menuCategory"',
            }
          }

          return {
            filter: 'restaurant._ref == $restaurantRef',
            params: {restaurantRef},
          }
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      description:
        'Use this for a single-price item. Leave empty if this item uses price options.',
      validation: (Rule) =>
        Rule.min(0).custom((value, context) => {
          const parent = context.parent as MenuItemParent | undefined

          return value !== undefined || parent?.priceOptions?.length
            ? true
            : 'Add a price or at least one price option'
        }),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: currencyOptions,
        layout: 'radio',
      },
      initialValue: 'TRY',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceOptions',
      title: 'Price options',
      description:
        'Use for sizes or variants, such as small and large pizza prices.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'currency',
              title: 'Currency',
              type: 'string',
              description:
                'Optional. Uses the item currency when this is empty.',
              options: {
                list: currencyOptions,
                layout: 'radio',
              },
            }),
            defineField({
              name: 'isDefault',
              title: 'Default option',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'label.en',
              price: 'price',
              currency: 'currency',
              isDefault: 'isDefault',
            },
            prepare({title, price, currency, isDefault}) {
              return {
                title,
                subtitle: [
                  price && currency ? `${price} ${currency}` : price,
                  isDefault ? 'Default' : undefined,
                ]
                  .filter(Boolean)
                  .join(' · '),
              }
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as MenuItemParent | undefined

          return value?.length || parent?.price !== undefined
            ? true
            : 'Add at least one price option or a single price'
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'localizedText',
    }),
    defineField({
      name: 'allergens',
      title: 'Contains allergens',
      description:
        'Select allergens present in this menu item. Use tags for labels such as gluten free or dairy free.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        list: MENU_ALLERGEN_OPTIONS,
      },
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'nutrition',
      title: 'Nutrition',
      type: 'object',
      fields: [
        defineField({name: 'calories', title: 'Calories', type: 'number'}),
        defineField({name: 'protein', title: 'Protein (g)', type: 'number'}),
        defineField({name: 'carbs', title: 'Carbs (g)', type: 'number'}),
        defineField({name: 'fats', title: 'Fats (g)', type: 'number'}),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        list: tagOptions,
      },
      validation: (Rule) => Rule.unique(),
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
      title: 'name.en',
      category: 'category.label.en',
      price: 'price',
      currency: 'currency',
      available: 'available',
      featured: 'featured',
      media: 'image',
    },
    prepare({title, category, price, currency, available, featured, media}) {
      return {
        title,
        subtitle: [
          category,
          price && currency ? `${price} ${currency}` : undefined,
          available === false ? 'Unavailable' : undefined,
          featured ? 'Featured' : undefined,
        ]
          .filter(Boolean)
          .join(' · '),
        media,
      }
    },
  },
})
