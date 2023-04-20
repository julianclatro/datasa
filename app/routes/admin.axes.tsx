import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Axis } from "~/models/Axis.server";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";

export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  const axes = await Axis.all(DB)
  return json({ axes });
}


export default function Axes() {
  const { axes }: any = useLoaderData();
  const { openModal } = useModal()
  const data = axes.map((axis: any) => {
    return [
      { value: axis.name, type: 'simple'},
      { value: { icon: 'edit', onClick: () => openModal({type: 'edit_axis', content: axis })}, type: 'button'},
    ]
  })


  return (      
    <Table
      header={['Nombre', 'Acciones']} 
      data={data}      
    />
    
  );
}
