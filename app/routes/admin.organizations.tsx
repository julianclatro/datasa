import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Organization } from "~/models/Organization.server";
import { Table } from 'datasa-design-system';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";

export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  const organizations = await Organization.all(DB)
  return json({ organizations });
}


export default function Organizations() {
  const { organizations }: any = useLoaderData();
  const { openModal } = useModal()
  const data = organizations.map((organization: any) => {
    return [
      { value: organization.name, type: 'simple'},
      { value: { icon: 'edit', onClick: () => openModal({type: 'edit_organization', content: organization })}, type: 'button'},
    ]
  })


  return (      
    <Table
      header={['Nombre', 'Acciones']} 
      data={data}      
    />
    
  );
}
