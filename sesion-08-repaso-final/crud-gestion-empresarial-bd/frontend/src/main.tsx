import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import CompanyForm from "./components/companies/CompanyForm";
import { CompaniesProvider } from "./context/CompaniesContext";
import "./index.css";

// cambio por cada ejercicio el valor de App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompaniesProvider>
      <div className="container mx-auto mt-10 px-4">
        <CompanyForm />
      </div>
      <Toaster position="top-right" richColors />
    </CompaniesProvider>
  </StrictMode>,
);
