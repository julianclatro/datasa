import React from "react";
import { useFetcher } from '@remix-run/react';
import { Form } from "~/components/Form";
import { useModal } from '~/context/Modal';

type EditAxeProps = {
  organization: any;
};

export const EditAxe: React.FC<EditAxeProps> = ({
  organization,
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

  const { id, name } =
    organization;
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
        type: "text",
        id: "name",
        label: "Nombre",
        defaultValue: name,
      },
    },
  ];
  return (
    <>
      <Form
        fields={fields}
        component={fetcher.Form}
        debug={false}
        action="/admin/organizations/edit"
        button={{
          text: "Guardar",
          variant: "primary",
        }}
      />
    </>
  );
};
