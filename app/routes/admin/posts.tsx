import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post } from "~/models/Post";
import { Table } from '~/components/Table';
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
    <div className="mx-auto w-[1080px]">
      <Table
        header={['', 'Fecha', 'Dato']} 
        data={data}      
      />
    </div>
  );
}
