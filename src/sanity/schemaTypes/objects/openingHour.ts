import {defineField, defineType} from 'sanity'
import {
  OPENING_HOUR_DAY_LABELS,
  OPENING_HOUR_DAY_SCHEMA_OPTIONS,
} from '../../../config/openingHours'
import type {OpeningHourDay} from '../../../types/restaurant'

type OpeningHourParent = {
  closed?: boolean
}

export const openingHour = defineType({
  name: 'openingHour',
  title: 'Opening hour',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: OPENING_HOUR_DAY_SCHEMA_OPTIONS,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'open',
      title: 'Open',
      type: 'string',
      description: 'Use 24-hour time, for example 09:00.',
      hidden: ({parent}) => parent?.closed === true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as OpeningHourParent | undefined

          return parent?.closed === true || value
            ? true
            : 'Open time is required unless this day is closed'
        }),
    }),
    defineField({
      name: 'close',
      title: 'Close',
      type: 'string',
      description: 'Use 24-hour time, for example 22:30.',
      hidden: ({parent}) => parent?.closed === true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as OpeningHourParent | undefined

          return parent?.closed === true || value
            ? true
            : 'Close time is required unless this day is closed'
        }),
    }),
    defineField({
      name: 'closed',
      title: 'Closed',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      day: 'day',
      open: 'open',
      close: 'close',
      closed: 'closed',
    },
    prepare({day, open, close, closed}) {
      const dayLabel =
        typeof day === 'string'
          ? OPENING_HOUR_DAY_LABELS.en[day as OpeningHourDay] ?? day
          : undefined

      return {
        title: dayLabel,
        subtitle: closed ? 'Closed' : [open, close].filter(Boolean).join(' - '),
      }
    },
  },
})
