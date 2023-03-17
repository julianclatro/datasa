import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Category } from "~/models/Category.server";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";

export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  console.log('DB', DB)
  const categories = await Category.all(DB)
  return json({ categories });
}


export default function Categories() {
  const { categories }: any = useLoaderData();
  console.log('categories', categories)
  const { openModal } = useModal()
  const data = categories.map((category: any) => {
    return [
      { value: category.name, type: 'simple'},
      { value: { icon: 'edit', onClick: () => openModal({type: 'edit_category', content: category })}, type: 'button'},
    ]
  })


  return (      
    <Table
      header={['Nombre', 'Acciones']} 
      data={data}      
    />
  );
}
