import { Outlet } from "@remix-run/react";
import { type LoaderArgs } from "@remix-run/cloudflare";

export async function loader({
	context,
	request,
}: LoaderArgs) {
	// await auth.requireUser(request);

	return null;
}

export default function Admin() {
  return (
    <Outlet />
  );
}
