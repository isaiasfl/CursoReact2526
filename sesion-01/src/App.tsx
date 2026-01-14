import React from "react";
import FormularioLogin from "./components/FormularioLogin";
import FormularioUsuario from "./components/FormularioUsuario";
import Header from "./components/Header";
import Saludo from "./components/Saludo";
import Tarjeta from "./components/Tarjeta";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <main className="container bg-gray-100 mx-auto p-4">
        <Saludo nombre="Carlos" edad={23} />
        <Saludo nombre="Luis" edad={43} />
        <Saludo nombre="Sara" edad={13} />
        <Saludo nombre="Mario" edad={20} />
        <div className="mt-8 grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tarjeta
            title="React 19"
            description="Última versión de la librería React para JavaScript"
            image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400"
          />
          <Tarjeta
            title="React 19"
            description="Última versión de la librería React para JavaScript"
            image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400"
            favorite={true}
          />
          <Tarjeta
            title="React 19"
            description="Última versión de la librería React para JavaScript"
            favorite={true}
          />
          <Tarjeta
            title="Javascript"
            description="Lenguaje de programación para desarrollo web"
            image="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=400"
          />
        </div>
        <FormularioUsuario />
        <FormularioLogin />
      </main>
    </div>
  );
};

export default App;
