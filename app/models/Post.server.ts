import { Model } from 'model-one';
import { postsSchema } from '~/database/schema';
import type { PostI, PostDataI } from '~/interfaces/models'

export class Post extends Model implements PostI {
  data: PostDataI

  constructor(props: PostDataI) {
    super(postsSchema, props)
    this.data = props
  }
}