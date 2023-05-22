import React from "react";
import { useFetcher } from "@remix-run/react";
import { Form } from "datasa-design-system";
import { useModal } from "~/context/Modal";

type FormOrganizationProps = {
  organization?: any;
};

export const FormOrganization: React.FC<FormOrganizationProps> = ({
  organization,
}) => {
  const { id, name } = organization ?? {};
  const fetcher = useFetcher();
  const { closeModal } = useModal();

  React.useEffect(() => {
    if (fetcher.state === "loading") {
      // setLoader({ status: true, text: 'Saving' });
    }
    if (fetcher.data !== undefined && fetcher.state === "idle") {
      closeModal();
      // const { status, message } = fetcher.data
      // openNotification({ title: message, status });
      // console.log('DONE')
    }
  }, [fetcher]);

  const hasId = Boolean(id)
  const hasName = Boolean(name)

  const fields: any = [
    {
      field: {
        type: "text",
        id: "id",
        hidden: true,
        defaultValue: hasId && id,
      },
    },
    {
      field: {
        type: "text",
        id: "name",
        label: "Nombre",
        defaultValue: hasName && name,
      },
    },
  ];

  return (
    <>
      <Form
        fields={fields}
        component={fetcher.Form}
        debug={false}
        action={hasId ? "/admin/organizations/update" : "/admin/organizations/new"}
        button={{
          text: "Guardar",
          variant: "primary",
        }}
      />
    </>
  );
};
