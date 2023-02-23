import { Model } from 'model-one';
import { usersSchema } from '~/database/schema';
import type { UserI, UserDataI } from '~/interfaces/models'

export class User extends Model implements UserI {
  data: UserDataI

  constructor(props: UserDataI) {
    super(usersSchema, props)
    this.data = props
  }
}