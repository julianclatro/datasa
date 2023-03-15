import { type LoaderArgs } from "@remix-run/cloudflare";
import { Button } from '~/components/Button'
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post } from "~/models/Post";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
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
  const { posts } = useLoaderData();
  console.log('posts', posts)
  const data = posts.map(({information, publish_date}: any) => {
    return [
      { value: { text: 'Editar', onClick: () => console.log('Hello')}, type: 'button'},
      { value: publish_date, type: 'simple'},
      { value: information, type: 'simple'}
    ]
  })

  return (
    <div className="mx-auto w-[1080px] mt-[80px]">
      <div className="flex flex-row justify-between">
        <div className="text-xl font-bold mb-[40px] ">Datos</div>
        <div><Button text="Nuevo" type="link" component={Link} to="/admin/posts/new" /></div>
      </div>
      <Table
        header={['', 'Fecha', 'Dato']} 
        data={data}      
      />
    </div>
  );
}
