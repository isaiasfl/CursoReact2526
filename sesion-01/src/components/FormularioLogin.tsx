import React, { useState } from "react";
import Boton from "./Boton";

interface Credenciales {
  email: string;
  password: string;
}

const FormularioLogin = () => {
  // hooks
  const [credenciales, setCredenciales] = useState<Credenciales>({
    email: "",
    password: "",
  });
  const [errores, setErrores] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  // efectos

  const emailValido = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  // funciones
  const validarFormulario = (): boolean => {
    const posiblesErrores: Credenciales = { email: "", password: "" };
    if (!credenciales.email.trim()) {
      posiblesErrores.email = "Error, falta el email";
    } else if (!emailValido(credenciales.email)) {
      posiblesErrores.email = "Error, email NO válido";
    }
    if (!credenciales.password.trim()) {
      posiblesErrores.password = "Error, falta el password";
    } else if (credenciales.password.length <= 6) {
      posiblesErrores.password = "Error, longitud password inferior a 6";
    }
    setErrores(posiblesErrores);
    return Object.keys(posiblesErrores).length === 0;
  };
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validarFormulario()) {
      console.log("Longin Exitoso", credenciales);
      alert(`login Exitoso para ${credenciales.email}`);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-amber-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            placeholder="tu@email.com"
            value={credenciales.email}
            onChange={(e) =>
              setCredenciales({ ...credenciales, email: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            placeholder="Introduzca el password"
            value={credenciales.password}
            onChange={(e) =>
              setCredenciales({ ...credenciales, password: e.target.value })
            }
          />
        </div>
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "🙉" : "🙈"}
        </button>
        <div>
          <Boton
            tipo="primary"
            onClick={() => handleSubmit}
            texto="Enviar"
            submit={true}
          />
        </div>
        <label htmlFor="">
          
        </label>
      </form>
    </div>
  );
};

export default FormularioLogin;
