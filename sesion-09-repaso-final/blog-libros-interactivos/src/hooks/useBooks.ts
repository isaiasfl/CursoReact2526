import { useEffect, useState } from "react";
import { fetchBooks } from "../services/api";
import type { Book } from "../types/book";

interface UseBooksReturn {
  books: Book[];
  loading: boolean;
  error: string | null;
  refCargar: () => void;
}

export function useBooks(): UseBooksReturn {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Aquí podrías agregar la lógica para cargar los libros desde la API
  const cargarLibros = () => {
    setLoading(true);
    setError(null);
    fetchBooks()
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    cargarLibros();
  }, []);

  return { books, loading, error, refCargar: cargarLibros };
}
