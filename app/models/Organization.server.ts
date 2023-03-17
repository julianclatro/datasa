import { Model } from 'model-one';
import { organizationsSchema } from '~/database/schema';
import type { OrganizationI, OrganizationDataI } from '~/interfaces/models'

export class Organization extends Model implements OrganizationI {
  data: OrganizationDataI

  constructor(props: OrganizationDataI) {
    super(organizationsSchema, props)
    this.data = props
  }
}