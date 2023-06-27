import * as React from "react";
import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { Axis } from "~/models";
import { PostBuilder, CategoryBuilder } from "~/builders";
import { Header, Footer, About, CategorySelector, Command } from "datasa-design-system";
import { useModal } from "~/context/Modal";

export async function loader({ context, request }: LoaderArgs) {
  const { DB } = context.env as any;
  const axis = await Axis.all(DB);
  const categories = await new CategoryBuilder({ DB }).setup();
  const posts = await new PostBuilder({ DB }).setup();
  const publishedPosts = posts.filter(
    (post: any) => post.is_published === "true" && post
  );
  return json({ posts: publishedPosts, axis, categories });
}

export default function Index() {
  const { posts, categories }: any = useLoaderData();
  // const { openModal } = useModal();
  const [results, setResult] = React.useState(posts);
  const postCount = results.length;
  const filterBy = (id: string | null, isChild: boolean) => {
    if (id === null) {
      setResult(posts)
    } else {
      setResult(posts.filter((post: any) => isChild ? post.categories_id === id : post.axis_id === id))
    }
  };
  // console.log('categories', categories)
  // React.useEffect(() => {
  //   openModal({ type: "welcome" });
  // }, []);

  return (
    <div>
        <div className="text-h4-normal-bold">Categorías</div>
        <CategorySelector axis={categories} afterSelect={filterBy} />
        <div>
          <div>
            <div>{postCount} resultados.</div>
            <div className="flex flex-col space-y-4">
              {results.length > 0 &&
                results.map((post: any, key: number) => {
                  // console.log('post.link_status', post.link_status)
                  return (
                    <div
                      key={key}
                      className="p-8 border rounded-md border-gray-500 bg-white flex flex-col space-y-4"
                    >
                      <div className="flex flex-row justify-between">
                        <div className="text-caption-bold">
                          {post.axis && post.axis.name} {"/"}{" "}
                          {post.category && post.category.name}
                        </div>
                        <div className="text-caption-bold">
                          {post.info_date && post?.info_date}
                        </div>
                        <div className="text-caption-bold">
                          {post.impact && post?.impact}
                        </div>
                      </div>
                      <div className="text-paragraph-large-medium">
                        {post.information}
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>
                          {post.link_status ? <a
                            href={post.link}
                            className="underline text-blue-500"
                          >
                            Link
                          </a> : 
                          <Link
                          to="/fuentes"
                          className="underline text-blue-500"
                        >
                          Link
                        </Link>}
                          
                        </div>
                        <div>
                          <a
                            href={`/datos/${post.id}/compartir`}
                            className="underline text-blue-500"
                          >
                            Compartir
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
    </div>
  );
}
