import React from "react";
import { Link } from "react-router-dom";

const Navbar = React.memo(() => {
  return (
    <nav className="header">
      <div className="nav-container">
        <Link to="/" className="nav-logo-link">
          <span className="nav-logo">POKESEARCH</span>
        </Link>

        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/search" className="nav-link">
            Buscar
          </Link>
          <Link to="/about" className="nav-link">
            Acerca
          </Link>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
