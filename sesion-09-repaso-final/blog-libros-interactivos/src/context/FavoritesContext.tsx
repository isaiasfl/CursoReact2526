import { createContext } from "react";
import { useFavoritos } from "../hooks/useFavoritos";
// favoritos,
// agragraFavorito,
// eliminarFavorito,
// toggleFavorito,
// esFavorito,

interface FavoriteContextType {
  favoritos: number[];
  agregarFavorito: (id: number) => void;
  eliminarFavorito: (id: number) => void;
  toggleFavorito: (id: number) => void;
  esFavorito: (id: number) => boolean;
}

// 1.- paso crear el contexto con createContext
export const FavoritesContext = createContext<FavoriteContextType>({
  favoritos: [],
  agregarFavorito: () => {},
  eliminarFavorito: () => {},
  toggleFavorito: () => {},
  esFavorito: () => false,
});

// 2.- paso crear el provider

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const favoritesHooks = useFavoritos();

  return (
    <FavoritesContext.Provider value={favoritesHooks}>
      {children}
    </FavoritesContext.Provider>
  );
}
