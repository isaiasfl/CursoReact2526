import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-indigo-700 text-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to="/" className="font-bold text-lg">
            🌍 Mi Empresa
          </Link>
          {isAuthenticated && <></>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
