import * as React from "react";
import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Axis } from "~/models";
import { PostBuilder } from "~/builders";
import { Header, Footer, About } from "~/compositions";
import { useModal } from '~/context/Modal';

export async function loader({ context, request }: LoaderArgs) {
  const { DB } = context.env as any;
  const axis = await Axis.all(DB);
  const posts = await new PostBuilder({ DB }).setup();
  const publishedPosts = posts.filter(
    (post: any) => post.is_published === "true" && post
  );

  return json({ posts: publishedPosts, axis });
}

export default function Index() {
  const { posts, axis }: any = useLoaderData();
  const { openModal } = useModal();
  // const [category, setCategory] = React.useState();
  const [axe, setAxe] = React.useState(null);
  const [results, setResult] = React.useState(posts);
  const postCount = results.length;

  const filterBy = (id: string) => {
    return posts.filter(({ axis_id }: any) => axis_id === id);
  };

  React.useEffect(() => {
    openModal({type: 'welcome', padding: 'large'})
  }, [])

  React.useEffect(() => {
    if (axe) {
      setResult(filterBy(axe));
    }
  }, [axe]);

  // React.useEffect(() => {
  //   if (category) {
  //     setResult(filterBy(category));
  //   }
  // }, [category]);

  return (
    <div>
      <Header />
      {/* <About /> */}
      <div className="w-[720px] mx-auto mb-[40px]">
        <div className="flex justify-center flex-wrap flex-row mt-2 p-8 gap-4">
          {axis.map((axi: any, key: number) => {
            return (
              <div
                key={key}
                className={`p-4 border border-blue-400 rounded-[40px] cursor-pointer hover:text-white hover:bg-blue-400 ${
                  axi.id === axe ? "bg-blue-300 text-blue-900" : "bg-blue-100 text-blue-500"
                }`}
                onClick={() => setAxe(axi.id)}
              >
                {axi.name}
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <div>{postCount} resultados.</div>
            <div className="flex flex-col space-y-4">
              {
                results.length > 0 &&
                  results.map((post: any, key: number) => {
                    console.log('post', post)
                    return (
                      <div
                        key={key}
                        className="p-8 border rounded-md border-gray-500 bg-white flex flex-col space-y-4"
                      >
                        <div className="flex flex-row justify-between">
                          <div className="text-caption-bold">
                            {post.axis && post.axis.name} {'/'} {post.category && post.category.name}
                          </div>
                          <div className="text-caption-bold">
                            {post.impact && post?.impact}
                          </div>
                        </div>
                        <div className="text-paragraph-large-medium">{post.information}</div>
                        <div>
                          <a href={post.link} className="underline text-blue-500">Link</a>
                        </div>
                      </div>
                    );
                  })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}