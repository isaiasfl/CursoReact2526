import { useEffect, useState } from "react";

// T --> Generics
export function useFetch<T>(url: string) {
  // aquí guardaremos la data final
  const [data, setData] = useState<T | null>(null);
  // mostrar o no un loop que diga cargando..
  const [loading, setLoading] = useState<boolean>(true);
  // por si tenemos errores y fallamos
  const [error, setError] = useState<Error | null>(null);

  // efecto de que cuando cargue el componente (o renderice por primera vez haremos useEffect)
  useEffect(() => {
    setLoading(true);
    setError(null);
    // creamos un mando a distancia para abortar el fetch
    const controller = new AbortController();
    // signal es una señal que va por el cable del fetch
    const { signal } = controller;
    const fetchData = async () => {
      try {
        // hacemos la llamada y pasamo la señal de cancelación
        const response = await fetch(url, { signal });
        if (!response.ok) {
          setError(error as Error);
          throw new Error("Error en la petición");
        }
        const result = await response.json();
        setData(result);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    // *********+ UNO DE LOS ERRORES MÁS UTILIZADOS ES QUE NO LLAMÁIS A LA FUNCIÓN DENTRO DE useEffect() ******
    fetchData()

    // el return se ejecuta CUANDO se va a desmontar el componente
    return () => {
      controller.abort()
    };
  }, [url]);

  return { data, loading, error };
}
