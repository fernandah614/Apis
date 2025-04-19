// Importo React para poder usar JSX y crear componentes
import React from "react";

// Importo Link de "react-router-dom" para poder navegar entre páginas sin recargar la aplicación
import { Link } from "react-router-dom";

// Defino un componente funcional llamado "SalirButton"
const SalirButton: React.FC = () => {
  return (
    // Creo un div contenedor con un margen superior (mt-6) para separar el botón del contenido
    <div className="mt-6">
      {/* Uso Link para envolver el botón. Link permite navegar sin recargar la página */}
      <Link to="/">
        {/* Defino un botón con la clase personalizada "btn-salir" */}
        <button className="btn-salir">
          {/* El texto que se mostrará en el botón */}
          Salir
        </button>
      </Link>
    </div>
  );
};

// Exporto el componente para poder usarlo en otras partes de la aplicación
export default SalirButton;
