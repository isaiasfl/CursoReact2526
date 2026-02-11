/**
 * CONTEXTO DE EMPRESAS
 *
 * ¿Que hace? Almacena la lista de empresas en un estado global
 * y ofrece funciones CRUD (crear, leer, actualizar, eliminar).
 *
 * Patron: cada funcion CRUD hace 2 cosas:
 *   1. Llama al backend (companiesAPI.create, .update, .delete)
 *   2. Actualiza el estado local (setCompanies) para que la UI se re-renderice
 *
 * ¿Por que actualizar el estado local en vez de volver a pedir todo al backend?
 * Porque es mas rapido. La UI se actualiza al instante sin esperar otra peticion.
 */
import { createContext, useState, useEffect, type ReactNode } from "react";
import { toast } from "sonner";
import { companiesAPI } from "../services/api";
import type { Company, CreateCompanyDTO, UpdateCompanyDTO } from "../types";

export interface CompaniesContextType {
  companies: Company[];
  loading: boolean;
  error: string | null;
  fetchCompanies: () => Promise<void>;
  createCompany: (data: CreateCompanyDTO) => Promise<Company | null>;
  updateCompany: (
    id: number,
    data: UpdateCompanyDTO,
  ) => Promise<Company | null>;
  deleteCompany: (id: number) => Promise<boolean>;
}

export const CompaniesContext = createContext<CompaniesContextType | undefined>(
  undefined,
);

export function CompaniesProvider({ children }: { children: ReactNode }) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // LEER - Pide todas las empresas al backend
  const fetchCompanies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await companiesAPI.getAll();
      setCompanies(data.companies);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al cargar empresas";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // CREAR - Envia al backend y añade al inicio del array local
  const createCompany = async (
    data: CreateCompanyDTO,
  ): Promise<Company | null> => {
    try {
      const response = await companiesAPI.create(data);
      // [nueva, ...anteriores] → la nueva aparece primera en la lista
      setCompanies((prev) => [response.company, ...prev]);
      toast.success(response.message || "Empresa creada");
      return response.company;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al crear empresa";
      toast.error(message);
      return null;
    }
  };

  // ACTUALIZAR - Envia al backend y reemplaza en el array local
  const updateCompany = async (
    id: number,
    data: UpdateCompanyDTO,
  ): Promise<Company | null> => {
    try {
      const response = await companiesAPI.update(id, data);
      // .map recorre el array: si encuentra la empresa con ese id, la reemplaza
      setCompanies((prev) =>
        prev.map((c) => (c.id === id ? response.company : c)),
      );
      toast.success(response.message || "Empresa actualizada");
      return response.company;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al actualizar empresa";
      toast.error(message);
      return null;
    }
  };

  // ELIMINAR - Envia al backend y la quita del array local
  const deleteCompany = async (id: number): Promise<boolean> => {
    try {
      const response = await companiesAPI.delete(id);
      // .filter devuelve un nuevo array SIN la empresa eliminada
      setCompanies((prev) => prev.filter((c) => c.id !== id));
      toast.success(response.message || "Empresa eliminada");
      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Error al eliminar empresa";
      toast.error(message);
      return false;
    }
  };

  // useEffect con [] = se ejecuta UNA vez al montar.
  // "Cuando este componente aparece, carga las empresas del backend"
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        loading,
        error,
        fetchCompanies,
        createCompany,
        updateCompany,
        deleteCompany,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}
