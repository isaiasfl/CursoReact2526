import { useContext } from "react";
import type { FamilyContextType } from "../types";
import { FamilyContext } from "../context/FamilyContext";


export function useFamily():FamilyContextType {
  const context = useContext(FamilyContext)
  if (!context) {
    throw new Error ("useFamily debe usarse dentro de un FamilyProvider")
  }
  return context
}
