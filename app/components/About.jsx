import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="-mt-16 min-h-48 px-8 xl:px-0">
      <div className="max-w-screen-xl mx-auto pt-28 pb-8">
        <div className="text-3xl text-black font-bold">
          ¡Bienvenidxs a la gran Base de Datos SocioAmbientales!
        </div>
        <div className="text-lg mt-8 mb-12 leading-6 text-black">
          En base a nuestra filosofía, el acceso a la información es una de las
          claves para transformar la realidad, por lo que decidimos lanzar una
          gran base de datos socioambientales para que podamos compartir y
          acceder libremente al conocimiento. ¡Es de gran utilidad para
          activistas, periodistas, gobiernos, escuelas y estudiantes!
        </div>
        <Link
          to="/datos"
          className="rounded-md bg-red font-bold text-white py-4 px-8"
        >
          Ingresar
        </Link>
      </div>
    </div>
  );
};
