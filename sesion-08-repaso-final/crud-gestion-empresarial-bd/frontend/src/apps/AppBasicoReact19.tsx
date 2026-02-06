import { useActionState } from "react";
import { toast, Toaster } from "sonner";

type FormState = {
  success: boolean;
  message: string;
};

const simularApi = {
  crear: async ({ name, surname }: { name: string; surname: string }) => {
    await new Promise((resp) => setTimeout(resp, 2000));
    console.log("Creando ...", { name, surname });
  },
};

const AppBasicoReact19 = () => {
  // función asíncrona que haga algo conla data del formulario
  async function formAction(
    _prevState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    // aquí simulamos el fetching o lo que sea asíncrono
    // FormData es un objeto que guarda todos los elementos de mi formulario
    const name = String(formData.get("name")).trim();
    const surname = String(formData.get("surname")).trim();
    const fullName = `${name} ${surname}`;
    console.log(fullName);
    await simularApi.crear({ name, surname });
    toast.success(`Usuario ${fullName} creado con éxito`);
    return { success: true, message: `Usuario ${fullName} creado con éxito` };
  }
  // estados: useActionState

  const [state, submitAction, isPending] = useActionState(formAction, {
    success: false,
    message: "",
  });

  return (
    <>
      <div className="mt-10 flex justify-center items-center">
        <form action={submitAction}>
          {/* NO TENGO QUE PONER EL ONCHANGE  */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre..."
            disabled={isPending}
          />
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Apellido..."
            disabled={isPending}
          />
          <button
            type="submit"
            disabled={isPending}
            className={isPending ? "btn btn-primary" : "btn btn-secondary"}
          >
            {isPending ? "Enviando..." : "Enviar"}
          </button>
          {/* Mensaje que diga si todo ok o no */}
          {state.message && (
            <p className={state.success ? "text-green-600" : "text-red-600"}>
              {state.message}
            </p>
          )}
        </form>
        <Toaster position="top-right" />
      </div>
    </>
  );
};

// aquí podría crear un componente botón submit

export default AppBasicoReact19;
