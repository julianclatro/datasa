import { Form } from 'model-one'
import type { OrganizationI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
})

export class OrganizationForm extends Form {
  constructor(data: OrganizationI) {
    super(schema, data)
  }
}