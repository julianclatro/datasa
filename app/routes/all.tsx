import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export async function loader(args: LoaderArgs) {
  return json({ name: "Ryan", date: new Date() });
}