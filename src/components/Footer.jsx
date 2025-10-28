import React from "react";
import pokemon from "../assets/pokemon.png";

const Footer = React.memo(() => {
  return (
    <footer
      className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-12 border-t border-gray-700 dark:border-gray-800 transition-colors duration-300"
      role="contentinfo"
      aria-label="Pie de página del sitio"
    >
      <div className="flex flex-col items-center justify-center gap-3 max-w-5xl mx-auto px-4">
        <img
          src={pokemon}
          alt=""
          aria-hidden="true"
          className="h-12 w-auto object-contain"
          loading="lazy"
          width="48"
          height="48"
        />
        <p className="text-sm text-center text-gray-300 dark:text-gray-400">
          PokeSearch © {new Date().getFullYear()} — Proyecto educativo con{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-400 transition-colors"
          >
            PokeAPI
          </a>
        </p>
      </div>
    </footer>
  );
});

export default Footer;