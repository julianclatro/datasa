import React from 'react';
import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "react-router";
import { Category } from "~/models/Category.server";
import { Table } from '~/components/Table';
import { Link } from '@remix-run/react'
import { useModal } from "~/context/Modal";
import { CategoryBuilder } from '~/builders'
export async function loader({
	context,
	request,
}: LoaderArgs) {
  const { DB } = context.env as any
  console.log('DB', DB)
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

// function TreeNode({ node, onNodeClick }: any) {
//   return (
//     <div onClick={() => onNodeClick(node)}>
//       <h3>{node.name}</h3>
//       {node.children &&
//         node.children.map((childNode: any) => (
//           <TreeNode
//             key={childNode.id}
//             node={childNode}
//             onNodeClick={onNodeClick}
//           />
//         ))}
//     </div>
//   );
// }

// function Tree({ data }: any) {
//   function handleNodeClick(node: any) {
//     console.log(`Clicked node "${node.name}" (id: ${node.id})`);
//   }

//   return (
//     <div>
//       {data.map((node: any) => (
//         <TreeNode key={node.id} node={node} onNodeClick={handleNodeClick} />
//       ))}
//     </div>
//   );
// }

// function Tree({ nodes }: any) {
//   const [expanded, setExpanded] = React.useState([]);

//   function handleClick(id: any) {
//     setExpanded((prevState: any) => {
//       if (prevState.includes(id)) {
//         return prevState.filter((item: any) => item !== id);
//       } else {
//         return [...prevState, id];
//       }
//     });
//     console.log(nodes.find((node: any) => node.id === id).name);
//   }

//   return (
//     <ul>
//       {nodes.map((node: any) => (
//         <li key={node.id}>
//           <span onClick={() => handleClick(node.id)}>{node.name}</span>
//           {node.children.length > 0 && (
//             <Tree nodes={node.children} />
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

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
