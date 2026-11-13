import { useEffect, useRef } from "react";
import projects from "./projects.js";

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
      <div className="modal__overlay" aria-hidden="true" onClick={onClose} />
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
              {project.repoUrl && (
                <a
                  className="modal__repo"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </a>
              )}
              {project.liveUrl && (
                <a
                  className="modal__repo"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              )}
              {project.videoUrl && (
                <a
                  className="modal__repo"
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                </a>
              )}
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
          <ProjectCard key={project.title} project={project} onOpen={onOpen} />
        ))}
      </ul>
    </section>
  );
}

export { ProjectSection, ProjectModal };
