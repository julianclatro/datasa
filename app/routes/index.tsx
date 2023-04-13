import * as React from 'react';
import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Post, Axis } from "~/models";
import { Header, Footer } from '~/compositions';

export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  const axis = await Axis.all(DB)
  const posts = await Post.all(DB)
  const publishedPosts = posts.filter((post: any) => post.is_published === "true" && post)
  return json({ posts: publishedPosts, axis });
}

export default function Index() {
  const { posts, axis }: any = useLoaderData();
  const [ data, setData] = React.useState();

  return (
    <div>
      <Header />
      <div className="w-[720px] mx-auto mb-[40px]">
        <div className="flex justify-center flex-wrap flex-row mt-4 p-8 gap-4">
          {axis.map((axi: any, key: number) => {
            return <div key={key} className={`p-4 border border-red-400 rounded-lg`}>{axi.name}</div>
          })}
        </div>
        <div className="flex flex-col space-y-4">
          {
            posts.slice(0, 20).map((post: any, key: number) => {
              return <div key={key}
                className="p-8 border rounded-sm border-gray-500"
                >
                {post.information}
              </div>
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
