import React from 'react';
import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Category } from "~/models/Category.server";
import { Table } from 'datasa-design-system';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";
import { CategoryBuilder } from '~/builders'

export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  const builder = new CategoryBuilder({ DB })
  const categories = await builder.setup()
  return json({ categories });
}


function TreeNode({ node }: any) {
  return (
    <li className="pl-[8px]" onClick={() => node.id && console.log(node)}>
      {node.name}
      {node.children && (
        <ul className="pl-[8px]">
          {node.children.map((child: any) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Tree({ data }: any) {

  return (
    <div>
      {data.map((node: any) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}

export default function Categories() {
  const { categories }: any = useLoaderData();
  console.log('categories', categories)
  const { openModal } = useModal()
  // const data = categories.map((category: any) => {
  //   return [
  //     { value: category.name, type: 'simple'},
  //     { value: { icon: 'edit', onClick: () => openModal({type: 'edit_category', content: category })}, type: 'button'},
  //   ]
  // })


  return (
    <div>
      <Table
        header={['Nombre', 'Acciones']} 
        data={[]}      
      />
      <Tree data={categories} />
    </div>      
  );
}
