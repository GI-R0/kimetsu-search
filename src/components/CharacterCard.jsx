import React from "react";

export default function CharacterCard({ pokemon }) {
  const name = pokemon?.name ?? "Desconocido";
  const img = pokemon?.sprites?.front_default || "/pikachu.png";

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center text-center">
      <img
        src={img}
        alt={name}
        className="h-20 w-20 sm:h-24 sm:w-24 object-contain mb-3"
        loading="lazy"
      />
      <h3 className="font-semibold text-lg capitalize">{name}</h3>

      {Array.isArray(pokemon?.types) && (
        <div className="mt-2 flex gap-2 flex-wrap">
          {pokemon.types.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
              {t?.type?.name ?? t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
