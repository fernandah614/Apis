// Importo el componente GhibliList para mostrar la lista de películas de Studio Ghibli
import React from "react";
import GhibliList from "../../componentes/GhibliList";
// Importo el componente SalirButton para permitir que el usuario regrese a la página principal
import SalirButton from "../../componentes/SalirButton";

// Componente funcional que muestra la lista de películas y el botón para salir
const Ghibli: React.FC = () => {
  return (
    <div className="p-4">
      {/* Título de la página */}
      <h1 className="text-2xl font-bold mb-4">Películas de Studio Ghibli</h1>
      {/* Incluyo el componente GhibliList que contiene la lógica para obtener y mostrar las películas */}
      <GhibliList />
      {/* Incluyo el componente SalirButton para que el usuario pueda regresar */}
      <SalirButton />
    </div>
  );
};

// Exporto el componente para que pueda ser utilizado en otras partes de la aplicación
export default Ghibli;
