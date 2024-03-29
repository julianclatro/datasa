import { Outlet, Link, useLoaderData } from "@remix-run/react";
import { type LoaderArgs, json, redirect } from "@remix-run/cloudflare";
import { Dropdown } from 'datasa-design-system';
import { Button } from 'datasa-design-system'
import { useModal } from "~/context/Modal";
import { Organization } from "~/models/Organization.server";
import { Axis } from "~/models/Axis.server";
import { Category } from "~/models/Category.server";
import { getUser } from "~/utils/session.server";

export async function loader({
	context,
	request,
}: LoaderArgs) {
	const { env, sessionStorage } = context as any
	const { DB } = env;

	const user = await getUser(request, sessionStorage)
	const hasUser = Boolean(user);
	if (!hasUser) return redirect('/')
  let organizations = await Organization.all(DB)
	let axes = await Axis.all(DB)
	let categories = await Category.all(DB)
	organizations = organizations.map(({id: value, name }: any) => {
		return { value, name }
	})
	axes = axes.map(({id: value, name }: any) => {
		return { value, name }
	})
	categories = categories.map(({id: value, name }: any) => {
		return { value, name }
	})
  return json({ organizations, axes, categories });
}


export default function Admin() {
	const { openModal } = useModal()
	const { organizations, axes, categories } = useLoaderData();

	const items = [
		{ text: 'Dato', type: 'button', action: () => openModal({type: 'new_post', content: { organizations, axes, categories }}) },
		{ text: 'Organizacion', type: 'button', action: () => openModal({type: 'new_organization'}) },
		{ text: 'Ejes', type: 'button', action: () => openModal({type: 'new_axis'}) },
		{ text: 'Categorias', type: 'button', action: () => openModal({type: 'new_category'}) },
	]

  return (
		<div className="">
			<div className="mx-auto w-[1080px] mt-[20px]">
			<div className="flex flex-row justify-between mb-[40px]">
        <div className="flex flex-row space-x-[8px]">
          <Button size="tiny" text="Datos" type="link" to="/admin" variant="primary" component={Link}/>
          <Button size="tiny" text="Organizaciones" type="link" to="/admin/organizations" component={Link}/>
          <Button size="tiny" text="Ejes" type="link" to="/admin/axes" component={Link}/>
          <Button size="tiny" text="Categorias" type="link" to="/admin/categories" component={Link}/>
        </div>
        <div className="flex flex-row space-x-[8px]">
          <Dropdown items={items} button={{ text: 'Nuevo',icon: 'chevron_down', size:'tiny'}} />
					<Button size="tiny" text="Salir" type="link" to="/logout" component={Link} variant="warning"/>
        </div>
      </div>
			</div>
			<div className="p-[20px]">
				<Outlet />
			</div>
		</div>
  );
}
