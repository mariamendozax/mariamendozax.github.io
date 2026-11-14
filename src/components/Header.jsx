import { useState } from "react";
import logoImage from "../../images/Sun.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <a className="nav__link nav__logo" href="#hero" onClick={closeMenu}>
        <img src={logoImage} alt="María Mendoza, inicio" className="logo" />
      </a>
      <nav className="nav" aria-label="Navegación principal">
        <ul
          className={`nav__links${menuOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          <li>
            <a className="nav__link" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="nav__link" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
