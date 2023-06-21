import { type LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Post } from "~/models/Post.server";
import { Table } from "datasa-design-system";
import { Link } from "@remix-run/react";
import { useModal } from "~/context/Modal";
import { CategoryBuilder } from "~/builders/CategoryBuilder.server";
import { Organization, Axis } from "~/models";
import { PostBuilder } from "~/builders";
export async function loader({ context, request }: LoaderArgs) {
  const { DB } = context.env as any;
  const posts = await new PostBuilder({ DB }).setup();
  const organizations = await Organization.all(DB);
  const builder = new CategoryBuilder({ DB });
  const categories = await builder.setup();
  const axes = await Axis.all(DB);

  // const checkBrokenLinks = async () => {
  //   const links = [
  //     ...new Set(
  //       posts.map(({ link }: any) => {
  //         return link;
  //       })
  //     ),
  //   ];

  //   const state = links.slice(0, 20).map(async (url: any) => {
  //     const { status } = await fetch(url);
  //     return status;
  //   });

  //   console.log("state", state);
  // };
  // await checkBrokenLinks();
  return json({ posts, categories, organizations, axes });
}

export default function Posts() {
  const { posts, organizations, categories, axes }: any = useLoaderData();
  const { openModal } = useModal();
  const data = posts.map((post: any) => {
    return [
      { value: post.publish_date, type: "simple" },
      { value: post.axis ? post.axis.name : "", type: "simple" },
      // { value: { to: `/datos/${post.id}/compartir`, text: "C" }, type: "internal_link", component: Link },
      // { value: post.region, type: "simple" },
      // { value: post.category ? post.category.name : "", type: "simple" },
      // { value: post.region, type: "simple" },
      // { value: post.impact, type: "simple" },
      { value: post.information, type: "simple" },
      // { value: { to: `/datos/${post.id}/compartir`, text: post.information }, type: "internal_link", component: Link },

      // { value: post.organization ? post.organization.name : "", type: "simple" },
      { value: post.info_date, type: "simple" },
      { value: post.info_type, type: "simple" },
      // { value: { to: post.link, text: `${post.link_status ? 'Link' : 'N/S'}` }, type: "link" },
      {
        value: {
          text: "Editar",
          onClick: () =>
            openModal({
              type: "edit_post",
              content: { post, organizations, categories, axes },
            }),
        },
        type: "button",
      },
    ];
  });

  return (
    <Table
      header={[
        "Fecha",
        "Eje",
        // "Compartir",
        // "Categoria",
        // "Region",
        // "Impacto",
        "Dato",
        // "Organizacion",
        "Fecha Dato",
        "Tipo de Dato",
        // "Link",
        "Acciones",
      ]}
      data={data}
    />
  );
}
