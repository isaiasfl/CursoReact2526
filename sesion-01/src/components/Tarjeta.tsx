import React, { useState } from "react";
// ---------- USO DE RENDERIZADO CONDICIONAL EN COMPONENTES Y PROPIEDADES ---------
interface TarjetaProps {
  title: string;
  description: string;
  image?: string;
  favorite?: boolean;
}

const Tarjeta = ({
  title,
  description,
  image,
  favorite = false,
}: TarjetaProps) => {

  const [fav, setFav] = useState(favorite)



  return (
    <div
      className={`rounded-lg shadow-md p-6 ${
        fav ? "bg-yellow-100 border-2 border-amber-600" : "bg-white"
      }`}
      onClick={()=> {
        setFav(!fav)
      }}
    >
      {/* // pinto la imagen si existe la url */}
      {image && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={image}
          alt={title}
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
      {fav && <span>⭐</span>}
    </div>
  );
};

export default Tarjeta;
