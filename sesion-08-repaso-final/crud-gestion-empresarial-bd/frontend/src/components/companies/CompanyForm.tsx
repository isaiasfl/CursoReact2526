import { useActionState } from "react";
import { useCompanies } from "../../hooks/useCompanies";
import CompanyList from "./CompanyList";

type FormState = {
  success: boolean;
  message: string;
  // error ?: string
};

const CompanyForm = () => {
  const { createCompany } = useCompanies();

  // funcion para manejar el envío
  const formAction = async (
    _prev: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    const name = formData.get("name")?.toString().trim() || "";
    const industry = formData.get("industry")?.toString().trim() || "";
    const website = formData.get("website")?.toString().trim() || "";

    if (!name || !industry || !website) {
      return { success: false, message: "Todos los campos son obligatorios" };
    }

    const result = await createCompany({ name, industry, website });

    if (result) {
      return { success: true, message: "Empresa creada correctamente" };
    } else {
      return { success: false, message: "Error al crear la empresa" };
    }
  };

  const [state, submitAction, isPending] = useActionState(formAction, {
    success: false,
    message: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Sección Formulario: Centrado y estrecho */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <form action={submitAction}>
            <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">
              Añadir Nueva Empresa
            </h2>

            {state.message && (
              <div
                className={`p-4 rounded-xl mb-6 text-sm font-medium text-center ${
                  state.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {state.message}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-1"
                >
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Ej. Google"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-1"
                >
                  Industria
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  className="input"
                  placeholder="Ej. Tecnología"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-1"
                >
                  Sitio Web
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="input"
                  placeholder="Ej. https://www.google.com"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 shadow-lg shadow-blue-100"
                  disabled={isPending}
                >
                  {isPending ? "Procesando..." : "Registrar Empresa"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* ----------------- Sección Lista -------------------- */}
        {/* <div className="border-t border-gray-100 pt-12">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Listado de Empresas
            </h2>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
              Directorio Activo
            </span>
          </div>
          <CompanyList />
        </div> */}
      </div>
    </div>
  );
};

export default CompanyForm;
