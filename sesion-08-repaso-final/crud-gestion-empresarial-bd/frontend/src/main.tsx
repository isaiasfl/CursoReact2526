import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import LoginForm from "./components/auth/LoginForm";
import CompanyForm from "./components/companies/CompanyForm";
import { AuthProvider } from "./context/AuthContext";
import { CompaniesProvider } from "./context/CompaniesContext";
import "./index.css";

// cambio por cada ejercicio el valor de App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CompaniesProvider>
        <LoginForm />
        <Toaster position="top-right" richColors />
      </CompaniesProvider>
    </AuthProvider>
  </StrictMode>,
);
