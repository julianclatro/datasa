import { Form } from 'model-one'
import type { UserI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  fist_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string(),
  email_confirm: Joi.string(),
  verify_sent: Joi.string(),
  verify_key: Joi.string(),
  verify_datetime_exp: Joi.string(),
})

export class UserForm extends Form {
  constructor(data: UserI) {
    super(schema, data)
  }
}