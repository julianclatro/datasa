import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post } from "~/models/Post.server";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";

export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  console.log('DB', DB)
  const posts = await Post.all(DB)
  // await Post.create(new Post({ name: 'Charles' }), DB)
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
      { value: { icon: 'edit', onClick: () => openModal({type: 'edit_post', content: post })}, type: 'button'},
    ]
  })


  return (      
      <Table
        header={['Fecha', 'Dato', 'Acciones']} 
        data={data}      
      />
    
  );
}
