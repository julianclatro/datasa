import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post } from "~/models/Post";

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
  return (
    <div>
      {
        posts.map((post: any, key: number) => {
          return <div key={key}>
            {post.information}
          </div>
        })
      }
    </div>
  );
}
