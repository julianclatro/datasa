import { Form } from 'model-one'
import type { PostI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  is_published: Joi.string(),
  organizations_id: Joi.string(),
  categories_id: Joi.string(),
  axis_id: Joi.string(),
  information: Joi.string(),
  impact: Joi.string(),
  info_date: Joi.string(),
  info_type: Joi.string(),
  source: Joi.string(),
  link: Joi.string(),
  link_status: Joi.string(),
})

export class PostForm extends Form {
  constructor(data: PostI) {
    super(schema, data)
  }
}