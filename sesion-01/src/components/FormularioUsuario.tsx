import React, { useState } from "react";

interface Usuario {
  nombre: string;
  email: string;
  edad: number;
}
const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    email: "",
    edad: 0,
  });

  const actualizarCampo = (campo: keyof Usuario, valor: string | number) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    // Formulario de datos
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Registro de Usuarios:</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            value={usuario.nombre}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
            onChange={(e) => {
              actualizarCampo("nombre", e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">email</label>
          <input
            type="email"
            value={usuario.email}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
            onChange={(e) => {
              actualizarCampo("email", e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">edad</label>
          <input
            type="number"
            value={usuario.edad}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
            onChange={(e) => {
              actualizarCampo("edad", parseInt(e.target.value));
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-900 font-semibold"
        >
          Guardar Usuario
        </button>
        {/* Mostrar los datos que tengo actualmente */}
        <div className="mt-6 mb-6 p-4 bg-gray-100 rounded">
            <h4 className="font-semibold mb-2"> Datos Actuales:   </h4>
            <pre className="text-sm">
              {JSON.stringify(usuario,null,2)}
            </pre>
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;
