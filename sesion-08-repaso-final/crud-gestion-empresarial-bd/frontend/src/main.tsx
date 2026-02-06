import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CompanyForm from "./components/companies/CompanyForm";
import "./index.css";

// cambio por cada ejercicio el valor de App
const App = CompanyForm;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
