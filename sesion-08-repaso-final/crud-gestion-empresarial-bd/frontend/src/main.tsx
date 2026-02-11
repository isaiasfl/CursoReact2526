import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppFull from "./apps/AppFull";

import { AuthProvider } from "./context/AuthContext";
import { CompaniesProvider } from "./context/CompaniesContext";
import "./index.css";

// cambio por cada ejercicio el valor de App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CompaniesProvider>
        <BrowserRouter>
          <AppFull />
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </CompaniesProvider>
    </AuthProvider>
  </StrictMode>,
);
