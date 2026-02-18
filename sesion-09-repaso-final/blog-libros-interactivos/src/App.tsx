import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

const BookDetailPage = lazy(() => import("./pages/BookDetailPage"));
const CreateBookPage = lazy(() => import("./pages/CreateBookPage"));
const FavoritosPage = lazy(() => import("./pages/FavoritosPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route
          path="/libro/:id"
          element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <BookDetailPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/crear"
          element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <CreateBookPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Route>
    </Routes>
  );
};

export default App;
