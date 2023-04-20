import React from "react";
import { useModal } from '~/context/Modal';
import { Button } from '~/components/Button';

export const About = () => {
  const { closeModal } = useModal();

  return (
    <div className="px-8 xl:px-0">
      <div className="">
        <div className="text-lg sm:text-3xl text-black font-bold">
          ¡Bienvenidxs a la gran Base de Datos SocioAmbientales!
        </div>
        <div className="text-md sm:text-lg mt-8 mb-12 leading-6 text-black">
          En base a nuestra filosofía, el acceso a la información es una de las
          claves para transformar la realidad, por lo que decidimos lanzar una
          gran base de datos socioambientales para que podamos compartir y
          acceder libremente al conocimiento. ¡Es de gran utilidad para
          activistas, periodistas, gobiernos, escuelas y estudiantes!
        </div>
      </div>
      <Button type="button" onClick={() => closeModal()} text="Continuar"/>
    </div>
  );
};
