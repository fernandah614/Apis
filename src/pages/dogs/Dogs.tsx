// Importo React para poder usar JSX y crear componentes
import React from "react";

// Importo el componente que se encarga de mostrar la lista de razas de perros
import DogList from "../../componentes/DogList";

// Importo el botón reutilizable que lleva de vuelta al menú principal
import SalirButton from "../../componentes/SalirButton";

// Defino un componente funcional llamado "Dogs"
const Dogs: React.FC = () => {
  return (
    // Creo un contenedor principal con padding (espaciado interior) usando Tailwind
    <div className="p-4">
      {/* Título principal con estilos de tamaño, negrita y margen inferior */}
      <h1 className="text-2xl font-bold mb-4">Razas de Perros</h1>

      {/* Muestro el componente DogList, que contiene la tabla de razas */}
      <DogList />

      {/* Agrego el botón para salir (volver al menú principal) */}
      <SalirButton />
    </div>
  );
};

// Exporto este componente para poder usarlo en otras partes de la app (por ejemplo, en las rutas)
export default Dogs;
