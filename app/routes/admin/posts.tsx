import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post } from "~/models/Post.server";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";
import { PostBuilder } from "~/builders"
export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  console.log('DB', DB)
  const posts = await new PostBuilder({DB}).setup()
  return json({ posts });
}


export default function Posts() {
  const { posts }: any = useLoaderData();
  console.log('posts', posts)
  const { openModal } = useModal()
  const data = posts.map((post: any) => {
    return [
      { value: post.publish_date, type: 'simple'},
      { value: post.information, type: 'simple'},
      { value: post.organization.name, type: 'simple'},
      { value: post.axis.name, type: 'simple'},
      { value: !!post.category ? post.category.name : '' , type: 'simple'},
      { value: { icon: 'edit', onClick: () => openModal({type: 'edit_post', content: post })}, type: 'button'},
    ]
  })


  return (      
      <Table
        header={['Fecha', 'Dato', 'Organizacion', 'Eje', 'Categoria', 'Acciones']} 
        data={data}      
      />
    
  );
}
