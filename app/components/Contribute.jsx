import React from "react";

export const Contribute = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 mb-0 bg-blue p-8 pb-12 xl:rounded-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-3xl text-white font-bold pb-6">
          COLABORATIVA Y SOLIDARIA
        </div>
        <div className="text-lg leading-6 mb-12 text-white">
          Datasa.info es una base de datos colaborativa, libre y solidaria. El
          único fin que posee es compartir conocimientos para que elevemos
          nuestra conciencia colectiva. NO POSEE FINES DE LUCRO. Desde ya, si
          tenés datos para aportar, sentite libre de enviarlos para que los
          agreguemos a la plataforma.
          <br />
          ¡Muchas gracias!
        </div>
        <a
          className="rounded-md font-bold bg-white text-blue py-4 px-8 w-max"
          href="https://bit.ly/agregar-datasa"
        >
          Agregar Datos
        </a>
      </div>
    </div>
  );
};
