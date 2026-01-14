import React, { useState } from "react";
// USO de Formularios con TypeScript
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

const Ejercicio3 = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    email: "",
  });

  const actualizarCampo = (campo: keyof Usuario, valor: string | number) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };
  

  return (
    // USO de Formularios con TypeScript
    <>
      <div>Ejercicio3</div>
      <p>Introduce tu nombre: </p>
      <input value={usuario.nombre} onChange={(e)=>{actualizarCampo("nombre",e.target.value)}} />
    </>
  );
}; // USO de Formularios con TypeScript

export default Ejercicio3;
