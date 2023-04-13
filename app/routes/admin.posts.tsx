import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post } from "~/models/Post.server";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";
import { CategoryBuilder } from "~/builders/CategoryBuilder.server";
import { Organization, Axis } from "~/models";
import { PostBuilder } from "~/builders"
export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  console.log('DB', DB)
  const posts = await new PostBuilder({DB}).setup()
  const organizations = await Organization.all(DB)
  const builder = new CategoryBuilder({ DB })
  const categories = await builder.setup()
  const axes = await Axis.all(DB)

  return json({ posts, categories, organizations, axes });
}


export default function Posts() {
  const { posts, organizations, categories, axes }: any = useLoaderData();
  console.log('posts', posts)
  const { openModal } = useModal()
  const data = posts.map((post: any) => {
    return [
      { value: post.publish_date, type: 'simple'},
      { value: post.axis.name, type: 'simple'},
      { value: !!post.category ? post.category.name : '' , type: 'simple'},
      { value: post.region, type: 'simple'},
      { value: post.impact, type: 'simple'},
      { value: post.information, type: 'simple'},
      { value: post.organization.name, type: 'simple'},
      { value: post.info_date, type: 'simple'},
      { value: post.info_type, type: 'simple'},
      { value: { to: post.link, text: 'link'}, type: 'link'},
      { value: { icon: 'edit', onClick: () => openModal({type: 'edit_post', content: { post, organizations, categories, axes } })}, type: 'button'},
    ]
  })


  return (      
      <Table
        header={['Fecha', 'Eje', 'Categoria', 'Region', 'Impacto', 'Dato', 'Organizacion', 'Fecha Dato', 'Tipo de Dato', 'Link',  'Acciones']} 
        data={data}      
      />
    
  );
}
