import { Suspense, useState } from "react";
import BuscarPlato from "./components/BuscarPlato";
import Header from "./components/Header";
import LoadingFallback from "./components/LoadingFallback";
import PlatosList from "./components/PlatosList";
import { fetchPlatos } from "./utils/api";

const App = () => {
  // hooks

  const [platosPromise] = useState(() => fetchPlatos());

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>
            <Suspense
              fallback={
                <LoadingFallback message="Cocinando platos para ti... 🍽️" />
              }
            >
              <BuscarPlato />
              <PlatosList platosPromise={platosPromise} />
            </Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;
