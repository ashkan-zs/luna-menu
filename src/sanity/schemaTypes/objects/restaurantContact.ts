import {defineField, defineType} from 'sanity'

export const restaurantContact = defineType({
  name: 'restaurantContact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
})
