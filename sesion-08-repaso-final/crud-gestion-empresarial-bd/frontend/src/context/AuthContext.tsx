/**
 * CONTEXTO DE AUTENTICACION
 *
 * ¿Que hace? Maneja login/logout del usuario y guarda el token JWT
 * en localStorage para que la sesion persista al recargar la pagina.
 *
 * ¿Por que un Context? Porque muchos componentes necesitan saber si el
 * usuario esta logueado (Navbar, ProtectedRoute, paginas...).
 * Sin Context tendriamos que pasar props por muchos niveles (prop drilling).
 */
import { createContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { authAPI } from "../services/api";
import type { LoginDTO, RegisterDTO, User } from "../types";

// QUE datos y funciones ofrece este contexto
export interface AuthContextType {
  user: User | null; // Datos del usuario (null = no logueado)
  token: string | null; // Token JWT (null = no logueado)
  loading: boolean; // true mientras verificamos sesion al arrancar
  isAuthenticated: boolean; // true si hay usuario logueado
  login: (data: LoginDTO) => Promise<boolean>;
  register: (data: RegisterDTO) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // Leemos token de localStorage al iniciar → si el usuario recarga, sigue ahi
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token"),
  );
  // loading = true al inicio para evitar un "flash" de redireccion a /login
  // mientras verificamos si el token guardado sigue siendo valido
  const [loading, setLoading] = useState(true);

  const login = async (data: LoginDTO): Promise<boolean> => {
    try {
      const response = await authAPI.login(data);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      toast.success(response.message || "Login exitoso");
      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al iniciar sesion";
      toast.error(message);
      return false;
    }
  };

  const register = async (data: RegisterDTO): Promise<boolean> => {
    try {
      const response = await authAPI.register(data);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      toast.success(response.message || "Registro exitoso");
      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al registrarse";
      toast.error(message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    toast.success("Sesion cerrada");
  };

  // checkAuth: verifica si el token de localStorage sigue siendo valido
  // Llama a GET /auth/me → si OK, el token vale → si error, hacemos logout
  const checkAuth = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const response = await authAPI.getMe();
      setUser(response.user);
    } catch {
      logout();
    } finally {
      setLoading(false);
    }
  };

  // useEffect con [] = se ejecuta UNA vez al montar el componente
  // "Al abrir la app, comprueba si ya estoy logueado de antes"
  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    token,
    loading,
    // !!user convierte objeto a boolean:
    //   user = null   → !!null = false  (no autenticado)
    //   user = {..}   → !!obj  = true   (autenticado)
    // Es lo mismo que: user !== null
    isAuthenticated: !!user,
    login,
    register,
    logout,
    checkAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
