import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-900 p-6 text-white shadow-2xl ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-md font-black uppercase italic">
          Sesion 02 UseEffect
        </h1>
        <span className="bg-amber-500 text-slate-800 py-1 px-4 rounded-xl font-black uppercase">
          {" "}
          Isaías FL
        </span>
      </div>
    </header>
  );
};

export default Header;
