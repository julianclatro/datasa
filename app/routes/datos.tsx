import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { PostBuilder } from "~/builders";

export async function loader({ context, request }: LoaderArgs) {
  const { DB } = context.env as any;
  const posts = await new PostBuilder({ DB }).setup();
  const publishedPosts = posts.filter(
    (post: any) => post.is_published === "true" && post
  );
  return json({ posts: publishedPosts });
}
