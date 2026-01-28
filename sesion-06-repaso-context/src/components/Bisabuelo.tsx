import React from "react";
import { useFamily } from "../hooks/useFamily";
import Abuelo from "./Abuelo";

const Bisabuelo = () => {
  const { mensaje } = useFamily();
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-purple-500 rounded-lg p-4 bg-purple-50">
        <h1 className="text-xl font-bold"> Bisabuelo</h1>
        <div className="mt-4 ml-4 border-4 border-purple-200">
          <p>
            Aquí empieza el árbol genealógico de componentes utilizando Context
            de React. El mensaje del contexto es:
            <br />
            <strong>{mensaje}</strong>
          </p>
          <Abuelo />
        </div>
      </div>
    </div>
  );
};

export default Bisabuelo;
