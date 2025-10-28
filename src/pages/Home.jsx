import React, { useState, useEffect, useCallback } from "react";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);

  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const fetchPage = useCallback(async (url, append = false) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      append ? setLoadingMore(true) : setLoading(true);
      setError(null);

      const res = await fetch(url, { signal });
      if (!res.ok) throw new Error(`API responded ${res.status}`);
      const data = await res.json();

      setNextUrl(data.next || null);

      const detailed = await Promise.all(
        (data.results || []).map(async (item) => {
          try {
            const r = await fetch(item.url, { signal });
            if (!r.ok) throw new Error();
            return await r.json();
          } catch {
            return { name: item.name, url: item.url };
          }
        })
      );

      setList((prev) => (append ? [...prev, ...detailed] : detailed));
    } catch (err) {
      if (err.name === "AbortError") return;
      setError(
        err.message.includes("Failed to fetch")
          ? "No se pudo conectar con la API. Revisa la red o CORS."
          : err.message
      );
      if (!append) setList([]);
    } finally {
      append ? setLoadingMore(false) : setLoading(false);
    }

    return () => controller.abort();
  }, []);

  useEffect(() => {
    document.title = "Pokédex | PokeSearch";
    const cleanup = fetchPage(initialUrl, false);
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [fetchPage]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="text-red-600 dark:text-red-400 text-center p-8 text-xl font-medium">
        {error}
      </div>
    );

  if (!Array.isArray(list) || list.length === 0)
    return <p className="text-center text-gray-600 dark:text-gray-300">No se encontraron resultados.</p>;

  return (
    <main className="px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
        Pokédex
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {list.map((p, i) => (
          <CharacterCard key={p.id ?? p.name ?? i} pokemon={p} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        {nextUrl && (
          <button
            onClick={() => fetchPage(nextUrl, true)}
            disabled={loadingMore}
            className={`px-8 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300
              ${loadingMore
                ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600"
              }`}
          >
            {loadingMore ? "Cargando..." : "Cargar más"}
          </button>
        )}
      </div>
    </main>
  );
}