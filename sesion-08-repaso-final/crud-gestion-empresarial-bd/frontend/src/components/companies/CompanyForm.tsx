import { useActionState } from "react";

type FormState = {
  success: boolean;
  message: string;
  // error ?: string
};

const CompanyForm = () => {
  // funcion
  const formAction = async (
    _prevState: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    // lógica para manejar el envío del formulario
    const name = formData.get("name")?.toString().trim() as string;
    const industry = String(formData.get("industry")).trim() as string;
    const website = String(formData.get("website")).trim() as string;
    // verificar si todos los input rellenos

    /// interesante *******
    // fetching a la api http://localhost:3001/api/companies con POST 
  };

  // estado

  const [state, submitAction, isPending] = useActionState(formAction, {
    success: false,
    message: "",
  });

  return (
    <>
      <div>
        <form action={submitAction}>
          <h2>Formulario de Empresas</h2>

          <div>
            <label htmlFor="">Nombre de la Empresa</label>
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
            <label htmlFor="">Industria</label>
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
            <label htmlFor="">WebSite</label>
            <input
              type="url"
              id="website"
              name="website"
              className="input"
              placeholder="Ej. www.google.com"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              Submit
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-secondary">
              Editar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompanyForm;
