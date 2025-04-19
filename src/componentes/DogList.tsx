import React, { useEffect, useState } from "react";

// Componente funcional que muestra una tabla con razas de perros
const DogList: React.FC = () => {
    // Creamos una variable de estado "dogs" que guarda un array de objetos con id y name
    // "setDogs" se usa para actualizar ese array
    const [dogs, setDogs] = useState<{ id: number; name: string }[]>([]);

    // useEffect se ejecuta una vez cuando el componente se monta (cuando aparece en pantalla)
    useEffect(() => {
        // Llamamos a la API para obtener la lista de razas de perros
        fetch("https://api.thedogapi.com/v1/breeds")
            .then(response => response.json()) // Convertimos la respuesta en JSON
            .then(data => {
                // Extraemos solo el id y el name de cada perro
                const dogData = data.map((dog: any) => ({
                    id: dog.id,
                    name: dog.name
                }));
                // Guardamos esos datos en el estado
                setDogs(dogData);
            });
    }, []); // [] indica que se ejecuta solo una vez

    return (
        // Tabla con estilos de Tailwind
        <table className="w-full border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <thead>
                <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm font-semibold">
                    {/* Encabezado de columna ID */}
                    <th className="border-b px-4 py-2">ID</th>
                    {/* Encabezado de columna Nombre */}
                    <th className="border-b px-4 py-2">Nombre</th>
                </tr>
            </thead>
            <tbody>
                {/* Recorremos el array "dogs" para mostrar cada fila con los datos */}
                {dogs.map(dog => (
                    // Cada fila necesita una key única (el id del perro)
                    <tr key={dog.id} className="even:bg-gray-50 hover:bg-gray-100">
                        {/* Celda con el ID del perro */}
                        <td className="border-b px-4 py-2">{dog.id}</td>
                        {/* Celda con el nombre del perro */}
                        <td className="border-b px-4 py-2">{dog.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DogList;
