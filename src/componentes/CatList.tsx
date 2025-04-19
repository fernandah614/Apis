// Importo los hooks useEffect y useState desde React para manejar el estado y los efectos secundarios
import React, { useEffect, useState } from "react";

// Componente funcional que muestra una lista de razas de gatos
const CatList: React.FC = () => {
    // Defino el estado "cats" que contendrá la lista de gatos con sus id y nombre
    const [cats, setCats] = useState<{ id: string; name: string }[]>([]);

    // useEffect se ejecuta una sola vez cuando el componente se monta (cuando aparece en pantalla)
    useEffect(() => {
        // Realizo la petición a la API para obtener las razas de gatos
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(response => response.json()) // Convierto la respuesta a formato JSON
            .then(data => {
                // Mapeo los datos para quedarme solo con el id y el nombre de cada gato
                const catData = data.map((cat: any) => ({
                    id: cat.id,
                    name: cat.name
                }));
                // Actualizo el estado "cats" con los datos obtenidos
                setCats(catData);
            });
    }, []); // El array vacío significa que solo se ejecuta al montar el componente

    return (
        // Renderizo una tabla para mostrar las razas de gatos
        <table className="w-full border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <thead>
                <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm font-semibold">
                    {/* Encabezados de las columnas */}
                    <th className="border-b px-4 py-2">ID</th>
                    <th className="border-b px-4 py-2">Nombre</th>
                </tr>
            </thead>
            <tbody>
                {/* Recorro el array "cats" y muestro una fila por cada gato */}
                {cats.map(cat => (
                    // Cada fila necesita una "key" única (el id del gato)
                    <tr key={cat.id} className="even:bg-gray-50 hover:bg-gray-100">
                        {/* Columna con el id del gato */}
                        <td className="border-b px-4 py-2">{cat.id}</td>
                        {/* Columna con el nombre del gato */}
                        <td className="border-b px-4 py-2">{cat.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Exporto el componente para poder usarlo en otras partes de la aplicación
export default CatList;
