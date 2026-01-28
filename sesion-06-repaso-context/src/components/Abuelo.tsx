import React from "react";
import { useFamily } from "../hooks/useFamily";
import Padre from "./Padre";

const Abuelo = () => {
  const { contador } = useFamily();
  return (
    <div className="border-4 border-green-500 rounded-lg p-4 bg-green-50">
      <h1> Abuelo</h1>
      <div className="mt-4 ml-4 border-4 border-green-200">
        <p>
          El contador vale:
          <br />
          <strong>{contador}</strong>
        </p>
        <Padre />
      </div>
    </div>
  );
};

export default Abuelo;
