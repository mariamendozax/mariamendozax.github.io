import { useCallback, useEffect, useRef, useState } from "react";
import projects from "./projects.js";
import profileImage from "../images/profile_image.jpeg";
import logoImage from "../images/varita.png";

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

function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="title">María Mendoza</h1>
      <p className="ocuppacion">Full Stack Developer &amp; Creative Coder</p>
      <h2 className="text">
        Where code meets canvas. Turning logic into beauty, one pixel at a time.
      </h2>
      <div className="modal__btn">
        <a className="btn btn__primary" href="#projects">
          Ver proyectos
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <h3 className="title__container">About me</h3>
        </div>
        <div className="about__body reveal">
          <img
            className="about__image"
            src={profileImage}
            alt="Fotografía de María Mendoza"
          />
          <div className="about__content">
            <p className="about__text">
              Full Stack Developer with a background in arts and luxury
              hospitality—a combination that trained my eye for flawless detail
              and high standards. I bridge the gap between complex logic and
              beautiful interfaces, transforming pixel-perfect Figma designs
              into scalable web applications.
            </p>
            <p className="about__text">
              My tech stack includes React (Vite), Node.js, Express, and REST
              APIs, with hands-on experience architecturalizing full-stack
              systems and deploying cloud infrastructure on Google Cloud
              Platform (GCP).
            </p>
            <p className="about__text">
              Years in high-demand, guest-focused environments shaped my core
              strengths: thriving under pressure, cross-functional
              collaboration, and an obsessive focus on the end-user experience.
              I don&apos;t just write code; I build digital experiences where
              clean architecture meets intentional design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <li className="card-item reveal">
      <button
        className="card"
        type="button"
        aria-label={`Ver detalles de ${project.title}`}
        onClick={() => onOpen(project)}
      >
        <img
          className="card__image"
          src={project.image}
          alt={`Captura de ${project.title}`}
        />
        <div className="card__description">
          <h3 className="card__title">{project.title}</h3>
          <p className="card__excerpt">{project.excerpt}</p>
          <p className="card__tags">{project.tags}</p>
        </div>
      </button>
    </li>
  );
}

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    modalRef.current?.querySelector(".modal__close")?.focus();

    function handleKeydown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      previousFocus?.focus();
    };
  }, [project, onClose]);

  return (
    <div
      className={`modal${project ? " modal_opened" : ""}`}
      aria-hidden={!project}
    >
      <div
        className="modal__overlay"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className="modal__content"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal__close"
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
        >
          &times;
        </button>
        {project && (
          <>
            <img
              className="modal__image"
              src={project.image}
              alt={`Captura de ${project.title}`}
            />
            <h3 className="modal__title" id="modal-title">
              {project.title}
            </h3>
            <p className="modal__tags">{project.tags}</p>
            <p className="modal__description">{project.description}</p>
            <div className="modal__links">
              <a
                className="modal__repo"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectSection({ onOpen }) {
  return (
    <section className="cards__project" id="projects">
      <h2 className="cards__title reveal">
        Mis <span>proyectos</span>
      </h2>
      <ul className="cards__list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={onOpen}
          />
        ))}
      </ul>
    </section>
  );
}

function ContactFooter() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setFormStatus("Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setFormStatus("Message received — I'll get back to you soon!");
    } catch (error) {
      console.error("Unable to send the contact form.", error);
      setFormStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="footer__title reveal">Let&apos;s work together!</h2>
        <p className="footer__text">
          Have a project in mind or just want to say hi?
        </p>
        <form
          className="footer__form"
          action="https://formspree.io/f/xdarwjgb"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="footer__input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="footer__input"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="footer__textarea"
            required
          ></textarea>
          <button
            type="submit"
            className="footer__btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
        <p id="form-status" aria-live="polite">
          {formStatus}
        </p>
        <div className="footer__links">
          <a
            href="https://linkedin.com/in/maría-mendoza-777x"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
           LinkedIn |
          </a>
          <a
            href="https://github.com/mariamendozax"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
           GitHub
          </a>
        </div>
        <p className="footer__copy">© 2026 María Mendoza</p>
      </div>
    </footer>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pages">
        <Header />
        <Hero />
        <About />
        <ProjectSection onOpen={openProject} />
        <ContactFooter />
      </div>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </>
  );
}

export default App;
