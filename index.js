const projects = [
  {
    title: "Around the U.S. | TripleTen (2026)",
    tags: "JavaScript, OOP, Async/Promises, REST API, DOM Manipulation, Form Validation, HTML, CSS",
    excerpt:
      "Connected the application to a live external API implementing GET, POST, PATCH and DELETE operations with loading state handling and action confirmation.",
    description:
      "Built an image-sharing web app with full CRUD functionality + resulting in a dynamic interface where users can post, like, and delete cards without page reloads + using JavaScript, DOM manipulation, and Fetch API. Refactored the entire codebase to an object-oriented architecture + resulting in a modular system with responsibility-separated classes (Card, FormValidator, Popup, UserInfo, Section, Api) + using ES6 modules and principles of encapsulation and inheritance.",
    image: "./images/AroundUs.png",
    repoUrl: "https://mariamendozax.github.io/web_project_around_es/src/",
  },
  {
    title: "Expense Tracker | TripleTen (2026)",
    tags: "JavaScript, Document Object Model (DOM), Algorithms, HTML5, Cascading Style Sheets (CSS), Responsive Web Design",
    excerpt:
      " Built all business logic from scratch in vanilla JavaScript with no external libraries, consolidating core functional programming fundamentals",
    description:
      "Built an app to register and categorize expenses + resulting in a dashboard that calculates totals, averages, and automatically detects the highest-spending category + using JavaScript, arrays, and iteration algorithms. Implemented data analysis logic with pure functions and array methods + resulting in a system that identifies the maximum expense and its category in real time + using loops, .push(), and max-value search algorithms.",
    image: "./images/TrackExpenses.png",
    repoUrl: "https://mariamendozax.github.io/web_project_expenses_es/",
  },
  {
    title: "From Homeland to Homeland | TripleTen (2026)",
    tags: "HTML5, Cascading Style Sheets (CSS), Responsive Web Design, Figma (Software), Media query",
    excerpt:
      "Translated a professional Figma design into functional code respecting proportions, typography, and spacing, applying BEM to keep CSS scalable and organized",
    description:
      "Built a pixel-perfect implementation of a Figma design into code + resulting in a fully responsive art gallery site adapted for desktop, tablet, and mobile + using HTML5, CSS with BEM methodology, and Grid Layout. Implemented a responsive layout and typography system + resulting in a consistent visual experience across screens from mobile up to 1280px + using Flexbox, Grid, media queries, and custom fonts.",
    image: "./images/Homeland.png",
    repoUrl: "https://mariamendozax.github.io/web_project_homeland/",
  },
  {
    title: "Triple Espresso Café | TripleTen (2026)",
    tags: "HTML5, CSS3, BEM methodology, Flexbox, positioning, and pseudoclasses.",
    excerpt:
      "A coffee shop landing page built from a design brief as part of an advanced HTML & CSS sprint. Includes a reservation section accessible directly from the header, embedded recipe iFrames, business hours, location, and social links",
    description:
      "Translated a professional design brief into a fully responsive coffee shop landing page + resulting in a pixel-accurate layout built entirely with semantic HTML5 and modern CSS3, no frameworks or JavaScript involved. Structured all components using BEM methodology + resulting in a scalable, collision-free naming system that mirrors how production codebases organize styles. Built the layout with Flexbox and strategic positioning + resulting in a header with a direct-access reservation section, embedded recipe iFrames, and a footer with business hours, location, and social links, all fully responsive across screen sizes. Used pseudo-classes for interactive states + resulting in polished hover and focus feedback without relying on JavaScript.",
    image: "./images/TriplePeaks.png",
    repoUrl: "https://mariamendozax.github.io/web_project_coffeeshop/",
  },
];

//Modal
const modal = document.getElementById("project-modal");
const modalImage = modal.querySelector(".modal__image");
const modalTitle = modal.querySelector(".modal__title");
const modalTags = modal.querySelector(".modal__tags");
const modalDescription = modal.querySelector(".modal__description");
const modalRepo = modal.querySelector(".modal__repo");

let lastFocusedElement = null;

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function lockScroll() {
  const scrollbarWidth = getScrollbarWidth();
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockScroll() {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

function getFocusableElements(container) {
  return container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
}

function trapFocus(e) {
  if (e.key !== "Tab") return;

  const focusable = getFocusableElements(modal);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function handleKeydown(e) {
  if (e.key === "Escape") closeModal();
  trapFocus(e);
}

function openModal(project, triggerElement) {
  lastFocusedElement = triggerElement;

  modalImage.src = project.image;
  modalImage.alt = `Captura de ${project.title}`;
  modalTitle.textContent = project.title;
  modalTags.textContent = project.tags;
  modalDescription.textContent = project.description;
  modalRepo.href = project.repoUrl;

  modal.classList.add("modal_opened");
  lockScroll();

  document.addEventListener("keydown", handleKeydown);

  // mueve el foco al modal (al botón de cerrar, por ejemplo)
  modal.querySelector(".modal__close").focus();
}

function closeModal() {
  modal.classList.remove("modal_opened");
  unlockScroll();

  document.removeEventListener("keydown", handleKeydown);

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// cierre por click en overlay o botón X
modal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) {
    closeModal();
  }
});

const cardTemplate = document.getElementById("card-template");
const cardsList = document.querySelector(".cards__list");

projects.forEach((project) => {
  // clona el <template>, no crea HTML desde un string
  const cardElement = cardTemplate.content.cloneNode(true);
  const excerpt = cardElement.querySelector(".card__excerpt");
  const li = cardElement.querySelector(".card");
  const img = cardElement.querySelector(".card__image");
  const title = cardElement.querySelector(".card__title");
  const tags = cardElement.querySelector(".card__tags");

  img.src = project.image;
  img.alt = `Captura de ${project.title}`;
  title.textContent = project.title;
  tags.textContent = project.tags;
  excerpt.textContent = project.excerpt;

  li.tabIndex = 0; // hace la tarjeta enfocable con teclado
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", `Ver detalles de ${project.title}`);

  li.addEventListener("click", () => openModal(project, li));
  li.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(project, li);
    }
  });

  cardsList.appendChild(cardElement);
});

///FORM////
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formStatus.textContent = "¡Gracias! Tu mensaje fue enviado.";
      contactForm.reset();
    } else {
      formStatus.textContent = "Hubo un problema, intenta de nuevo.";
    }
  } catch (error) {
    formStatus.textContent = "Hubo un problema, intenta de nuevo.";
  }
});
