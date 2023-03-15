import { type LoaderArgs, redirect } from "@remix-run/cloudflare";

export async function loader({
	context,
	request,
}: LoaderArgs) {
  return redirect('/login', 301)
}