import React from "react";

interface SaludoProps {
  nombre: string;
  edad: number;
}

const Saludo = ({ nombre, edad }: SaludoProps) => {
  return (
    <div className="p-4 bg-amber-200 rounded-lg shadow mt-4">
      <h2 className="text-xl font-semibold">Bienvenid@ {nombre}</h2>
      <p className="text-gray-600 font-medium">Tienes {edad} años</p>
    </div>
  );
};

export default Saludo;
