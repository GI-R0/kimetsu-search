import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Acerca de pokesearch";
  }, []);

  return (
    <section className="about-section">
      <h1 className="about-title">Acerca de PokeSearch</h1>
      <div className="about-content">
        <p className="about-text">
          PokeSearch es una aplicación web moderna que te permite explorar el
          fascinante mundo de Pokémon. Navega por una extensa colección de
          criaturas, busca tus favoritos por nombre o ID, y descubre información
          detallada sobre cada uno.
        </p>
        <p className="about-text">
          Este proyecto utiliza la API pública de PokeAPI para obtener datos en
          tiempo real, ofreciendo una experiencia fluida y actualizada.
          Desarrollado con React y diseñado con un estilo inspirado en
          plataformas de streaming modernas.
        </p>
        <p className="about-footer">Desarrollado con ❤️ usando React</p>
      </div>
    </section>
  );
}
