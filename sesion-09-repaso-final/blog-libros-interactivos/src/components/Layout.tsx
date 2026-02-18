import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "text-indigo-600 text-white font-semibold border-b-2 border-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <div className="min-h-screen bg-gray-850">
      <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl px-4 mx-auto flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-indigo-700">
            🏠 LibrosBlog
          </NavLink>
          <div className="space-x-4">
            <NavLink to="/" className={linkClass}>
              Inicio
            </NavLink>
            <NavLink to="/favoritos" className={linkClass}>
              Favoritos
            </NavLink>
            <NavLink to="/crear" className={linkClass}>
              Crear Libro
            </NavLink>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
