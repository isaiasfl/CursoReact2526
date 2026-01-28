

// Tipos globales o estados globales de la aplicación
export interface FamilyState {
  mensaje: string;
  contador: number
}



// acciones a realizar

export interface FamilyActions {
  setMensaje: (mensaje: string) => void;
  incrementarContador: () => void;
  decrementarContador: () => void;
}



// exportar los tipos del contexto 
export type FamilyContextType = FamilyState & FamilyActions;