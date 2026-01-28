import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  return (
    <div className="border-4 border-red-500 rounded-lg p-4 bg-red-50">
      <h1> Padre</h1>
      <div className="mt-4 ml-4 border-4 border-red-200">
        <Hijo />
      </div>
    </div>
  );
};

export default Padre;
