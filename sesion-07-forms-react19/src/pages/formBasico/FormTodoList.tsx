import { useActionState } from "react";
import type { FormState, TodoData } from "../../types";

// Simular guardar en una base de datos
const guardarEnBaseDeDatos = async (todo: TodoData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Guardado en la base de datos:", todo);
  localStorage.setItem("todo", JSON.stringify(todo));
};

// Función que ejecuta react al enviar el formulario
const guardarAction = async (
  _prevState: FormState,
  formData: FormData, // <-- formData es el objeto que contiene los datos del formulario
): Promise<FormState> => {
// extraer todos los datos de un formulario
  const nombreTodo = formData.get("nombreTodo") as string;
  const fechaTodo = formData.get("fechaTodo") as string;
  if(!nombreTodo || !fechaTodo){
    return {
      error: "Todos los campos son obligatorios",
      success: null,
    };
  }
  try {
    await guardarEnBaseDeDatos({
      nombre: nombreTodo,
      fecha: fechaTodo, 
    });
    return {
      error: null,
      success: "👌 Todo guardado correctamente",
    };
  } catch (error) {
    return {
      error: `❌ Error al guardar el todo : ${error}`,
      success: null,
    };
  }
};

const FormTodoList = () => {
  const [state,formAction,isPending]=useActionState(guardarAction,{
    error:null,
    success:null,
  });


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Formulario Basico - Todo List</h1>
      <form action={formAction} className="flex flex-col gap-4 max-w-md">
        <div className="flex flex-col">
          <label htmlFor="nombreTodo" className="mb-1 font-semibold">
            Nombre del Todo:
          </label>
          <input
            type="text"
            id="nombreTodo"
            name="nombreTodo"
            className="border border-gray-300 rounded px-3 py-2"
            disabled={isPending}
          />
          {/* Mensaje de error */}
          {state.error && (
            <p className="text-red-500 mt-1">{state.error}</p>
          )}
          {/* Mensaje de exito */}
          {state.success && (
            <p className="text-green-500 mt-1">{state.success}</p>
          )}  
        </div>
        <div className="flex flex-col">
          <label htmlFor="fechaTodo" className="mb-1 font-semibold">
            Fecha del Todo:
          </label>
          <input
            type="date"
            id="fechaTodo"
            name="fechaTodo"
            className="border border-gray-300 rounded px-3 py-2"
            disabled={isPending}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          disabled={isPending}
        >
          {isPending ? "Guardando..." : "Guardar Todo"}
        </button>

      </form>
    </div>
  );
}

export default FormTodoList