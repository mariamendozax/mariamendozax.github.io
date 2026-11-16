import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../../images/Sun.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function closeMenu() {
    setMenuOpen(false);
  }

  function goToSection(event, sectionId) {
    event.preventDefault();
    closeMenu();

    if (pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollTarget: sectionId } });
    }
  }

  return (
    <header className="header">
      <Link className="nav__link nav__logo" to="/" onClick={closeMenu}>
        <img src={logoImage} alt="María Mendoza, inicio" className="logo" />
      </Link>
      <nav className="nav" aria-label="Navegación principal">
        <ul
          className={`nav__links${menuOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          {pathname === "/projects" ? (
            <li>
              <Link className="nav__link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
          ) : (
            <>
              <li>
              <a
                className="nav__link"
                href="#about"
                onClick={(event) => goToSection(event, "about")}
              >
                  About me
                </a>
              </li>
              <li>
              <a
                className="nav__link"
                href="#contact"
                onClick={(event) => goToSection(event, "contact")}
              >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  className="nav__link"
                  to="/projects"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
            </>
          )}
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
