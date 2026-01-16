export interface Plato {
  id: number;
  nombre: string;
  categoria: string;
  origen: string;
  calorias: number;
  ingredientes: string[];
  imagen: string;
}

export const API_CONFIG={
  // http://192.168.50.120:1494
  BASE_URL:`${import.meta.env.VITE_URL}:${import.meta.env.VITE_PORT}`,
  ENDPOINTS: {
    PLATOS: "/api/platos",
    STATS: "/stats"
  }
}