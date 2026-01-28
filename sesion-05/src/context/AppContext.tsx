import { createContext, useState, type ReactNode } from "react";
import type { User } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {

  const [state, setState] = useState<AppState>({
    user: {
      id: "1",
      nombre: "Profe React",
      email: "profe@gmail.com",
      avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
      role:"admin"
    },
    theme:"dark",
    language:"es"
  });
  // habrá que usar el useEffect para cargar el idioma, thema al iniciar el componente

  const setUser = (user:User | null) => {
    // esto funciona pero
    setState({ ...state, user });
    //  es recomendable forzar a usar el estado anterior
    // setState((prev) => ({ ...prev, user }));
  }

  // const setTheme = ()

  // const setLanguage =() 

const value ={
  ...state,
  setUser,
  // setTheme,
  // setLanguage,
}

  return <AppContext value={value}>{children}</AppContext>
};

createContext;