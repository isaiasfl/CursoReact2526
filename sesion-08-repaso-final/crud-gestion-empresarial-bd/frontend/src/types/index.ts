// Empresa
export interface Company {
  id: number;
  name: string;
  industry: string | null;
  website: string | null;
  createdAt: string;
  updatedAt: string;
  _count?: {
    contacts: number;
  };
}
export interface CreateCompanyDTO {
  name: string;
  industry?: string;
  website?: string;
}
export interface UpdateCompanyDTO {
  name?: string;
  industry?: string;
  website?: string;
}