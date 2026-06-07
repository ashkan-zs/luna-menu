import {defineField, defineType} from 'sanity'

export const restaurantSubscription = defineType({
  name: 'restaurantSubscription',
  title: 'Subscription',
  type: 'object',
  fields: [
    defineField({
      name: 'plan',
      title: 'Plan',
      type: 'string',
      options: {
        list: [
          {title: 'Free', value: 'free'},
          {title: 'Starter', value: 'starter'},
          {title: 'Pro', value: 'pro'},
        ],
        layout: 'radio',
      },
      initialValue: 'free',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
          {title: 'Trial', value: 'trial'},
        ],
        layout: 'radio',
      },
      initialValue: 'trial',
    }),
  ],
})
