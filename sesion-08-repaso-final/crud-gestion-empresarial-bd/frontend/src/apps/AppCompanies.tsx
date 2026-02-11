import { Toaster } from "sonner";
import CompanyForm from "../components/companies/CompanyForm";
import CompanyList from "../components/companies/CompanyList";

const AppCompanies = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className=" bg-sky-700 shadow text-white">
        <h1 className="text-2xl font-bold mx-auto">Crud de Empresas</h1>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <CompanyForm />
        {/* <CompanyList /> */}
      </main>
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
};

export default AppCompanies;
