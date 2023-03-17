import { Model } from 'model-one';
import { categoriesSchema } from '~/database/schema';
import type { CategoryI, CategoryDataI } from '~/interfaces/models'

export class Category extends Model implements CategoryI {
  data: CategoryDataI

  constructor(props: CategoryDataI) {
    super(categoriesSchema, props)
    this.data = props
  }
}