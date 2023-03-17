import { Model } from 'model-one';
import { axisSchema } from '~/database/schema';
import type { AxisI, AxisDataI } from '~/interfaces/models'

export class Axis extends Model implements AxisI {
  data: AxisDataI

  constructor(props: AxisDataI) {
    super(axisSchema, props)
    this.data = props
  }
}