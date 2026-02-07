import { useState } from "react";
import { useCompanies } from "../../hooks/useCompanies";
import type { Company } from "../../types";

/**
 * Tarjeta individual de empresa
 * Muestra información y botones de editar/eliminar
 */
interface Props {
  company: Company;
  onEdit?: (company: Company) => void;
}

export default function CompanyCard({ company, onEdit }: Props) {
  const { deleteCompany } = useCompanies();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    const success = await deleteCompany(company.id);
    if (success) setShowConfirm(false);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors truncate pr-2">
            {company.name}
          </h3>
          <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">🏢</span>
        </div>

        <div className="space-y-3">
          {company.industry && (
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
              <span className="font-bold text-[10px] uppercase text-gray-400 w-16">Sector</span>
              <span className="truncate">{company.industry}</span>
            </div>
          )}

          {company.website && (
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
              <span className="font-bold text-[10px] uppercase text-gray-400 w-16">Web</span>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold truncate"
              >
                {company.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        {onEdit && (
          <button
            onClick={() => onEdit(company)}
            className="flex-1 bg-gray-900 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-transform active:scale-95 hover:bg-gray-800 shadow-md"
          >
            Editar
          </button>
        )}
        <button 
          onClick={() => setShowConfirm(true)} 
          className="flex-1 border-2 border-red-50 text-red-500 px-4 py-2.5 rounded-xl font-bold text-xs transition-all hover:bg-red-500 hover:text-white active:scale-95"
        >
          Eliminar
        </button>
      </div>

      {showConfirm && (
        <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-2xl animate-in zoom-in-95 duration-200">
          <p className="text-[11px] font-black text-red-600 mb-3 text-center uppercase tracking-tighter">¿Borrar definitivamente?</p>
          <div className="flex gap-2">
            <button onClick={handleDelete} className="flex-1 bg-red-600 text-white py-2 rounded-lg text-xs font-bold shadow-sm active:scale-95">
              BORRAR
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="flex-1 bg-white border border-gray-200 text-gray-600 py-2 rounded-lg text-xs font-bold active:scale-95"
            >
              NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

