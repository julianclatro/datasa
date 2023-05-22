import { Form } from 'model-one'
import type { CategoryI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  axis_id: Joi.string(),
  parents_id: Joi.string(),
  name: Joi.string(),
})

export class CategoryForm extends Form {
  constructor(data: CategoryI) {
    super(schema, data)
  }
}