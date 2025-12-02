import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePokemon } from "../hooks/usePokemon";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";

export default function Search() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pokemonName, setPokemonName] = useState("");
  const { data: results, loading, error } = usePokemon(pokemonName);

  useEffect(() => {
    document.title = "Buscar Pokémon | PokeSearch";
  }, []);

  const onSubmit = (formData) => {
    setPokemonName(formData.name);
  };

  return (
    <main className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Buscar Pokémon</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="search-form">
        <input
          {...register("name", {
            required: "Por favor, ingresa un nombre o ID",
          })}
          placeholder="Nombre o ID del Pokémon"
          className="search-input"
        />
        <button
          type="submit"
          className="btn bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
        >
          Buscar
        </button>
      </form>

      {errors.name && (
        <p
          id="name-error"
          className="text-red-500 text-center mb-4"
          role="alert"
        >
          {errors.name.message}
        </p>
      )}

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="pokemon-grid mt-8">
        {results?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}
