import { useState } from "react";

const LIBROS_FAVORITOS_KEY =
  import.meta.env.VITE_STORAGE_KEY || "libros-favoritos";

function leerFavoritosDesdeStorage(): number[] {
  const favoritosString = localStorage.getItem(LIBROS_FAVORITOS_KEY);
  return favoritosString ? JSON.parse(favoritosString) : [];
}
interface UseFavoritosReturn {
  favoritos: number[];
  agregarFavorito: (id: number) => void;
  eliminarFavorito: (id: number) => void;
  toggleFavorito: (id: number) => void;
  esFavorito: (id: number) => boolean;
}

export function useFavoritos(): UseFavoritosReturn {
  const [favoritos, setFavoritos] = useState<number[]>(
    leerFavoritosDesdeStorage,
  );

  // const agragraFavorito = (id: number) => {
  //   setFavoritos(prev => {
  //     if(!prev.includes(id)) {
  //       const nuevosFavoritos = [...prev, id];
  //       localStorage.setItem(LIBROS_FAVORITOS_KEY, JSON.stringify(nuevosFavoritos));
  //     }
  //     return prev.includes(id) ? prev : [...prev, id];
  //   })
  // }
  const agregarFavorito = (id: number) => {
    if (!favoritos.includes(id)) {
      const nuevosFavoritos = [...favoritos, id];
      setFavoritos(nuevosFavoritos);
      localStorage.setItem(
        LIBROS_FAVORITOS_KEY,
        JSON.stringify(nuevosFavoritos),
      );
    }
  };

  const eliminarFavorito = (id: number) => {
    if (favoritos.includes(id)) {
      const nuevosFavoritos = favoritos.filter((favId) => favId !== id);
      setFavoritos(nuevosFavoritos);
      localStorage.setItem(
        LIBROS_FAVORITOS_KEY,
        JSON.stringify(nuevosFavoritos),
      );
    }
  };
  const toggleFavorito = (id: number) => {
    if (favoritos.includes(id)) {
      eliminarFavorito(id);
    } else {
      agregarFavorito(id);
    }
  };

  const esFavorito = (id: number) => favoritos.includes(id);

  return {
    favoritos,
    agregarFavorito,
    eliminarFavorito,
    toggleFavorito,
    esFavorito,
  };
}
