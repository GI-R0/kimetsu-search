import { useState, useEffect } from "react";

export function usePokemon(name) {
  // console.log('buscando pokemon:', name);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setData([]);
      setError(null);
      return;
    }

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`
        );

        if (!res.ok) throw new Error("Pokemon no encontrado");

        const pokemon = await res.json();
        setData([pokemon]);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  return { data, loading, error };
}
