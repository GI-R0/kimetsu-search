import { useState, useEffect } from "react";

export function usePokemon(name) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setData([]);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`,
          { signal }
        );

        if (!res.ok) throw new Error("Ese Pokémon no existe o se escondió");

        const pokemon = await res.json();
        setData([pokemon]);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();

    return () => controller.abort();
  }, [name]);

  return { data, loading, error };
}
