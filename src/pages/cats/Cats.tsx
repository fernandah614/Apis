// Importo el componente CatList para mostrar la lista de razas de gatos
import React from "react";
import CatList from "../../componentes/CatList";
// Importo el componente SalirButton para permitir que el usuario regrese a la página principal
import SalirButton from "../../componentes/SalirButton";

// Componente funcional que muestra la lista de razas de gatos y el botón para salir
const Cats: React.FC = () => {
  return (
    <div className="p-4">
      {/* Título de la página */}
      <h1 className="text-2xl font-bold mb-4">Razas de Gatos</h1>
      {/* Incluyo el componente CatList que contiene la lógica para obtener y mostrar las razas de gatos */}
      <CatList />
      {/* Incluyo el componente SalirButton para que el usuario pueda regresar */}
      <SalirButton />
    </div>
  );
};

// Exporto el componente para que pueda ser utilizado en otras partes de la aplicación
export default Cats;
