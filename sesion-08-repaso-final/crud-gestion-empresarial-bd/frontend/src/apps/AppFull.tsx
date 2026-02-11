import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import NavBar from "../components/common/NavBar";
import ProtectedRoute from "../components/common/ProtectedRoute";
import CompaniesPage from "../pages/CompaniesPage";
import CompaniesDetailPage from "../pages/CompaniesDetailPage";
import ContactsPage from "../pages/ContactsPage";
import LoginPage from "../pages/LoginPage";

const AppFull = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Routes>
        {/* ----------Rutas públicas ------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* ----------Rutas protegidas ------- */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <CompaniesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies/:id"
          element={
            <ProtectedRoute>
              <CompaniesDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <ContactsPage />
            </ProtectedRoute>
          }
        />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppFull;
