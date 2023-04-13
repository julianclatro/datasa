import React from 'react';
import { Form } from '~/components/Form'

type EditPostProps = {
  post: any
  axes: any
  organizations: any;
  categories: any
};

export const EditPost: React.FC<EditPostProps> = ({ organizations, categories, post, axes }) => {
  console.log('post', post)

  const fields: any = [
    {
      field: {
          type: 'text',
          id: 'id',
          hidden: true
      },
    },
    {
      field: {
          type: 'text',
          id: 'id',
          hidden: true
        },
    },
    {
      field: {
        type: 'textarea',
        id: 'information',
        label: 'Dato',
      },
    },
    {
      field: {
        type: 'text',
        id: 'impact',
        label: 'Nivel',
      },
    },
    {
      field: {
        type: 'text',
        id: 'region',
        label: 'Region',
      },
    },
    {
      field: {
        type: 'text',
        id: 'publish_date',
        label: 'Día Publicado',
      },
    },
    {
      field: {
        type: 'select',
        id: 'axis_id',
        label: 'Ejes',
        placeholder: 'select',
        options: axes
      },
    },
    {
      field: {
        type: 'select',
        id: 'categories_id',
        label: 'Categorias',
        placeholder: 'select',
        options: categories
      },
    },
    {
      field: {
        type: 'select',
        id: 'organizations_id',
        label: 'Organización',
        placeholder: 'select',
        options: organizations
      },
    },
    {
      field: {
        type: 'text',
        id: 'info_date',
        label: 'Fecha del Informe',
      },
    },
    {
      field: {
        type: 'text',
        id: 'info_type',
        label: 'Tipo de Informe',
      },
    },
    {
      field: {
        type: 'text',
        id: 'source',
        label: 'Fuente',
      },
    },
    {
      field: {
        type: 'text',
        id: 'link',
        label: 'Link',
      },
    },
    {
      field: {
        type: 'radiobox',
        id: 'is_published',
        label: 'Publicado',
        placeholder: 'select',
        options: [
          { name: 'Si', value: 'true' },
          { name: 'No', value: 'false' },
        ]
      },
    },
  ]
  return (
    <>
      <Form
        fields={fields}
        debug={false}
        button={{
          text: 'Guardar',
          variant: 'primary'
        }}
      />
    </>
  );
};
