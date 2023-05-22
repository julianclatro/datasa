import React from "react";
import { useFetcher } from '@remix-run/react';
import { Form } from "datasa-design-system";
import { useModal } from '~/context/Modal';

type FormPostProps = {
  post?: any;
  axes: any;
  organizations: any;
  categories: any;
};

export const FormPost: React.FC<FormPostProps> = ({
  organizations,
  categories,
  post,
  axes,
}) => {
  const fetcher = useFetcher();
  const { closeModal } = useModal();
  React.useEffect(() => {
    console.log('fetcher.state', fetcher.state)
    if (fetcher.state === 'loading') {
      // setLoader({ status: true, text: 'Saving' });
    }
    if (fetcher.state === 'idle') {
      // closeModal();
      // const { status, message } = fetcher.data
      // openNotification({ title: message, status });
      // console.log('DONE')
    }
  }, [fetcher])

  const { id, information, publish_date, region, source, info_type, impact, axis_id, categories_id, organizations_id, info_date, link } =
    post;
  const fields: any = [
    {
      field: {
        type: "text",
        id: "id",
        hidden: true,
        defaultValue: id,
      },
    },
    {
      field: {
        type: "textarea",
        id: "information",
        label: "Dato",
        defaultValue: information,
      },
    },
    {
      field: {
        type: "text",
        id: "impact",
        label: "Nivel",
        defaultValue: impact,
      },
    },
    {
      field: {
        type: "text",
        id: "region",
        label: "Region",
        defaultValue: region
      },
    },
    {
      field: {
        type: "text",
        id: "publish_date",
        label: "Día Publicado",
        defaultValue: publish_date
      },
    },
    {
      field: {
        type: "select",
        id: "axis_id",
        label: "Ejes",
        placeholder: "select",
        options: axes,
        hidden: true
      },
    },
    {
      field: {
        type: "select",
        id: "categories_id",
        label: "Categorias",
        placeholder: "select",
        options: categories,
        hidden: true
      },
    },
    {
      field: {
        type: "select",
        id: "organizations_id",
        label: "Organización",
        placeholder: "select",
        options: organizations,
        hidden: true
      },
    },
    {
      field: {
        type: "text",
        id: "info_date",
        label: "Fecha del Informe",
        defaultValue: info_date
      },
    },
    {
      field: {
        type: "text",
        id: "info_type",
        label: "Tipo de Informe",
        defaultValue: info_type
      },
    },
    {
      field: {
        type: "text",
        id: "source",
        label: "Fuente",
        defaultValue: source
      },
    },
    {
      field: {
        type: "text",
        id: "link",
        label: "Link",
        defaultValue: link
      },
    },
    {
      field: {
        type: "radiobox",
        id: "is_published",
        label: "Publicado",
        placeholder: "select",
        options: [
          { name: "Si", value: "true" },
          { name: "No", value: "false" },
        ],
      },
    },
  ];
  return (
    <>
      <Form
        fields={fields}
        component={fetcher.Form}
        debug={false}
        action="/admin/posts/update"
        button={{
          text: "Guardar",
          variant: "primary",
        }}
      />
    </>
  );
};
