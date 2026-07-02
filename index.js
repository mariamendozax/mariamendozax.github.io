const projects = [
  {
    title: "Nombre del proyecto 1",
    tags: "React · Node.js · API REST",
    excerpt: "Breve resumen de una línea.",
    description: "Descripción larga para el modal.",
    image: "/assets/proyecto-1-thumb.jpg",
    gif: "/assets/proyecto-1.gif",
    repoUrl: "https://github.com/mariamendozax/proyecto-1",
    demoUrl: "#",
  },
  // ...más proyectos
];

const cardTemplate = document.getElementById("card-template");
const cardsList = document.querySelector(".cards__list");

projects.forEach((project) => {
  // clona el <template>, no crea HTML desde un string
  const cardElement = cardTemplate.content.cloneNode(true);

  const li = cardElement.querySelector(".card");
  const img = cardElement.querySelector(".card__image");
  const title = cardElement.querySelector(".card__title");
  const tags = cardElement.querySelector(".card__tags");

  img.src = project.image;
  img.alt = `Captura de ${project.title}`;
  title.textContent = project.title;
  tags.textContent = project.tags;

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
