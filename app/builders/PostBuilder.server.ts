import { Category, Axis, Post, Organization } from '~/models'

interface PostBuilderData { DB: any }

export class PostBuilder {
  DB: any;

  constructor({ DB }: PostBuilderData) {
    this.DB = DB
  }

  async setup() {
    const { DB } = this;
    const posts = await Post.all(DB)
    const categories = await Category.all(DB)
    const axes = await Axis.all(DB)
    const organizations = await Organization.all(DB)

    return posts.map((post: any) => {
      const { axis_id, categories_id, organizations_id } = post;
      const category = categories.find(({id}: any) => id === categories_id)
      const axis = axes.find(({id}: any) => id === axis_id )
      const organization = organizations.find(({id}: any) => id === organizations_id )
      
      return { category, axis, organization, ...post }
    })
  }
}