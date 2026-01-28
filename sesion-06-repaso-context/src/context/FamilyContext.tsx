import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";



// 1.- crear el contexto con createContext
const FamilyContext = createContext<FamilyContextType | null>(null)

// 2.- Estado inicial del contexto

const estadoInicial: FamilyState = {
  mensaje: "Hola desde el contexto de la familia",
  contador: 0
}

// 3.- Crear el Provider (aquello que envuelve a los componentes que van a consumir el contexto)

export function FamilyProvider({ children } : { children: ReactNode } ) {
  // hooks
const [estado, setEstado] = useState<FamilyState>(estadoInicial)

  // funciones, para cambiar los elementos del contexto, etc
const setMensaje =(newMensaje:string) => {
  setEstado(prev => ({...prev, mensaje: newMensaje }))
}

const incrementarContador = () => {
  setEstado (prev => ({...prev, contador: prev.contador + 1}))
}

const decrementarContador = () => {
  setEstado (prev => ({...prev, contador: prev.contador - 1}))
}

const value: FamilyContextType = {
  ...estado,
  setMensaje,
  incrementarContador,
  decrementarContador
}

  return (

    <FamilyContext value={value}>
      {children}
    </FamilyContext>
  )
} 

// 4.- exportar el contexto
export { FamilyContext };