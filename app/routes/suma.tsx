import { About } from "~/compositions/About";
import { Form } from "datasa-design-system";
import * as React from "react";
const fields = [
  {
    field: {
      type: "textarea",
      id: "information",
      label: "Dato",
      placeholder: "Dato",
      required: true,
    },
  },
  {
    field: {
      type: "text",
      id: "fuente",
      label: "Link a la fuente",
      placeholder: "Link a a la fuente",
      required: true,
    },
  },
  {
    field: {
      type: "radiobox",
      id: "anonimo",
      label: "Metódo de Publicación",
      placeholder: "select",
      variant: "full",
      options: [
        { name: "Anónimo", value: 1, description: "Como persona anonima" },
        {
          name: "Nombre",
          value: 2,
          description: "Con tu usuario para participar del ranking.",
        },
      ],
    },
  },
  [
    {
      field: {
        type: "text",
        id: "nickname",
        label: "Nombre y Apellido",
        placeholder: "Escribe tu nombre y apellido",
        required: true,
      },
    },
    {
      field: {
        type: "email",
        id: "email",
        label: "Email",
        placeholder: "Escribe tu email",
        required: true,
      },
    },
  ],
];
export default function Suma() {
  return (
    <>
      <About />
      <div className="p-[20px] bg-green-100 rounded-[4px] mb-[40px]">
        <div className="text-caption-bold text-green-900">Requisitos:</div>
        <div className="text-caption-medium text-green-950">
          Esta plataforma es para datos 'duros', que deben ser copiados de la
          fuente original.
        </div>
      </div>
      <Form
        fields={fields}
        button={{
          text: "Sumar",
          variant: "primary",
        }}
      />
      <div className="p-[20px] bg-gray-100 rounded-3xl">
        <div className="text-caption-bold">Terminos y codiciones:</div>
        <div className="text-caption-medium">
          No recopilamos datos personales, pero los datos suministrados pueden
          ser usados para apoyar causas ambientales. Este sitio puede contener
          enlaces a otros, no nos responsabilizamos por su contenido o políticas
          de privacidad. Nos reservamos el derecho de modificar este descargo de
          responsabilidad sin previo aviso. Su uso continuado implica la
          aceptación de estos términos.
        </div>
      </div>
    </>
  );
}
