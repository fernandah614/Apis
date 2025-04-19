// Importo los hooks useEffect y useState desde React para gestionar el ciclo de vida y el estado
import React, { useEffect, useState } from "react";

// Defino una interfaz llamada Film para tipar correctamente las películas
interface Film {
  id: string;     // ID único de la película
  title: string;  // Título de la película
  image: string;  // URL de la imagen de la película
}

// Componente funcional que muestra la lista de películas del Studio Ghibli
const GhibliList: React.FC = () => {
  // Estado para almacenar las películas obtenidas
  const [films, setFilms] = useState<Film[]>([]);

  // Estado que indica si aún estamos esperando los datos de la API
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta una sola vez, justo cuando el componente se monta
  useEffect(() => {
    // Realizo la petición a la API pública del Studio Ghibli
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())  // Convierte la respuesta a formato JSON
      .then((data) => {
        // Mapeo los datos de las películas para obtener solo los campos id, title, image
        const filmData = data.map((film: any) => ({
          id: film.id,
          title: film.title,
          image: film.image,
        }));
        // Actualizo el estado con las películas obtenidas
        setFilms(filmData);
        // Indico que ya se terminó de cargar los datos
        setLoading(false);
      })
      .catch(() => {
        // Si hay algún error (por ejemplo, no se puede obtener los datos), dejo de mostrar el loading
        setLoading(false);
      });
  }, []); // El array vacío asegura que el useEffect solo se ejecute una vez cuando el componente se monta

  // Si los datos aún están cargando, muestro un mensaje indicándolo
  if (loading) {
    return <p className="text-lg text-gray-600 font-medium">Cargando películas...</p>;
  }

  // Si los datos ya se cargaron, pero no hay películas en la respuesta, muestro un mensaje de error
  if (films.length === 0) {
    return <p className="text-lg text-red-600 font-medium">No se encontraron películas.</p>;
  }

  // Si hay películas, las muestro en una tabla
  return (
    <div className="p-4">
      <table className="w-full border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm font-semibold">
            {/* Encabezado de la tabla */}
            <th className="border-b px-4 py-2">ID</th>
            <th className="border-b px-4 py-2">Nombre</th>
            <th className="border-b px-4 py-2">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {/* Recorro la lista de películas y genero una fila por cada película */}
          {films.map((film) => (
            <tr key={film.id} className="even:bg-gray-50 hover:bg-gray-100">
              {/* Mostrar el ID de la película */}
              <td className="border-b px-4 py-2">{film.id}</td>
              {/* Mostrar el nombre (título) de la película */}
              <td className="border-b px-4 py-2">{film.title}</td>
              {/* Mostrar la imagen de la película */}
              <td className="border-b px-4 py-2">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-24 h-auto rounded shadow-md"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exporto el componente para que pueda ser utilizado en otras partes de la aplicación
export default GhibliList;
