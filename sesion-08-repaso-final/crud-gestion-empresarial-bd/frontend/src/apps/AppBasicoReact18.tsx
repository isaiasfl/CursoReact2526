import { useState } from "react";
import { toast } from "sonner";

type FormState = {
  success: boolean;
  message: string;
};

const simularApi = async () => {
  // temporizador d e 2 segundos que simule que me esoty conectando a una api
  await new Promise((resp) => setTimeout(resp, 2000));
};

const AppBasicoReact18 = () => {
  // hook --usestate
  // estado que guarde todo
  const [state, setState] = useState<FormState | null>({
    success: false,
    message: "",
  });
  // nombre
  const [name, setName] = useState<string | null>(null);
  //apellidos
  const [surname, setSurname] = useState<string | null>(null);
  // errores
  const [error, setError] = useState<string | null>(null);
  // loading
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fullName = name?.trim() + " " + surname?.trim();

    toast.success(`Bienvenido ${fullName}`);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Formulario Básico nombre y apellidos</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre..."
          />
          <input
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Apellidos..."
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AppBasicoReact18;
