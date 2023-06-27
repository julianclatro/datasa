import { Model } from 'model-one';
import { adminsSchema } from '~/database/schema';
import type { AdminI, AdminDataI } from '~/interfaces/models'

export class Admin extends Model implements AdminI {
  data: AdminDataI

  constructor(props: AdminDataI) {
    super(adminsSchema, props)
    this.data = props
  }
}