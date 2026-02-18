import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <>
      <FavoritesProvider>
        <App />
        <Toaster position="top-right" />
      </FavoritesProvider>
    </>
    </BrowserRouter>
  </StrictMode>,
);
