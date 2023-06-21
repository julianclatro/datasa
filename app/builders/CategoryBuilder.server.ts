import { Category, Axis } from '~/models'

interface CategoryBuilderData { DB: any }

export class CategoryBuilder {
  DB: any;

  constructor({ DB }: CategoryBuilderData) {
    this.DB = DB
  }

  async setup() {
    const { DB } = this;
    const categories = await Category.all(DB)
    const axes = await Axis.all(DB)

    function buildTree(arr: any, parents_id: any) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].parents_id === parents_id) {
          const children = buildTree(arr, arr[i].id);
          if (children.length > 0) {
            arr[i].children = children;
          }
          result.push(arr[i]);
        }
      }
      return result;
    }
    const tree = buildTree(categories, '')

    const arr = axes.map((axis: any) => {
      const children = tree.filter((obj: any) => obj.axis_id === axis.id);
      return { name: axis.name, id: axis.id, children }
    })

    return arr;
  }
}