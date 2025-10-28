import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import pokemon from "../assets/pokemon.png";

const Layout = React.memo(({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300" role="presentation">
      
      <Navbar />

      
      <nav aria-label="Navegación principal del sitio" className="w-full flex justify-center mt-4">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:underline px-4">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/search" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:underline px-4">
              Buscar
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:underline px-4">
              Acerca
            </Link>
          </li>
        </ul>
      </nav>

      
      <main className="flex-1 container mx-auto px-4 py-8 antialiased" role="main" aria-label="Contenido principal del sitio">
        {children}
      </main>

    
      <footer className="p-8 flex justify-center">
        <img
          src={pokemon}
          alt=""
          aria-hidden="true"
          className="h-12 w-auto object-contain"
          loading="lazy"
          width="48"
          height="48"
        />
      </footer>
    </div>
  );
});

export default Layout;