import { useCallback, useEffect, useState } from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import { ProjectSection, ProjectModal } from "./Projects.jsx";
import Contact from "./Contact.jsx";

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

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
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
        <Contact />
      </div>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </>
  );
}

export default App;
