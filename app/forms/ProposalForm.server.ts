import { Form } from 'model-one'
import type { ProposalI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  users_id: Joi.string(),
  status: Joi.string(),
  information: Joi.string(),
  link: Joi.string()
})

export class ProposalForm extends Form {
  constructor(data: ProposalI) {
    super(schema, data)
  }
}