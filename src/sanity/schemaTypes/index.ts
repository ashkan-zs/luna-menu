import {type SchemaTypeDefinition} from 'sanity'

import {menuCategory} from './menuCategory'
import {menuItem} from './menuItem'
import {restaurant} from './restaurant'
import {objectTypes} from './objects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objectTypes, restaurant, menuCategory, menuItem],
}
