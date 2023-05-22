import { Form } from 'model-one'
import type { AxisI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
})

export class AxisForm extends Form {
  constructor(data: AxisI) {
    super(schema, data)
  }
}