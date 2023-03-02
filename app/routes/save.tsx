import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { User } from "~/models/User";

export async function loader(args: LoaderArgs) {
  const { DB } = args.context.env as any
  console.log('DB', DB)
  await User.create(new User({ name: 'Charles' }), DB)
  return json({ name: "Ryan", date: new Date() });
}