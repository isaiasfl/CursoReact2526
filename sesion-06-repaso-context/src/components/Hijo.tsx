import React from "react";
import { useFamily } from "../hooks/useFamily";
import Nieto from "./Nieto";

const Hijo = () => {
  const { incrementarContador, decrementarContador } = useFamily();
  return (
    <div className="border-4 border-orange-500 rounded-lg p-4 bg-orange-50">
      <h1> Hijo</h1>
      <div className="mt-4 ml-4 border-4 border-orange-200">
        <div className="flex gap-2 my-3 pt-5">
          <button className="px-4 py-2 bg-orange-500 text-white rounded font-bold hover:bg-orange-900 transition-all" onClick={incrementarContador}>Incrementar</button>
          <button className="px-4 py-2 bg-sky-500 text-white rounded font-bold hover:bg-sky-900 transition-all" onClick={decrementarContador}>Decrementar</button>
        </div>
        <Nieto />
      </div>
    </div>
  );
};

export default Hijo;
