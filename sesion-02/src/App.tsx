import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans ">
      <Header />
      <main>{/* aquí vendrán 2 componentes */}</main>
    </div>
  );
};

export default App;
