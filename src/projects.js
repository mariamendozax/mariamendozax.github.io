import aroundUsImage from "../images/AroundUs.png";
import expensesImage from "../images/TrackExpenses.png";
import homelandImage from "../images/Homeland.png";
import triplePeaksImage from "../images/TriplePeaks.png";

const projects = [
  {
    title: "Around the U.S. | TripleTen (2026)",
    tags: "JavaScript, OOP, Async/Promises, REST API, DOM Manipulation, Form Validation, HTML, CSS",
    excerpt:
      "Connected the application to a live external API implementing GET, POST, PATCH and DELETE operations with loading state handling and action confirmation.",
    description:
      "Built an image-sharing web app with full CRUD functionality, resulting in a dynamic interface where users can post, like, and delete cards without page reloads, using JavaScript, DOM manipulation, and Fetch API. Refactored the entire codebase to an object-oriented architecture, resulting in a modular system with responsibility-separated classes (Card, FormValidator, Popup, UserInfo, Section, Api), using ES6 modules and principles of encapsulation and inheritance.",
    image: aroundUsImage,
    repoUrl: "https://mariamendozax.github.io/web_project_around_es/src/",
  },
  {
    title: "Expense Tracker | TripleTen (2026)",
    tags: "JavaScript, Document Object Model (DOM), Algorithms, HTML5, Cascading Style Sheets (CSS), Responsive Web Design",
    excerpt:
      "Built all business logic from scratch in vanilla JavaScript with no external libraries, consolidating core functional programming fundamentals.",
    description:
      "Built an app to register and categorize expenses, resulting in a dashboard that calculates totals, averages, and automatically detects the highest-spending category, using JavaScript, arrays, and iteration algorithms. Implemented data analysis logic with pure functions and array methods, resulting in a system that identifies the maximum expense and its category in real time, using loops, .push(), and max-value search algorithms.",
    image: expensesImage,
    repoUrl: "https://mariamendozax.github.io/web_project_expenses_es/",
  },
  {
    title: "From Homeland to Homeland | TripleTen (2026)",
    tags: "HTML5, Cascading Style Sheets (CSS), Responsive Web Design, Figma (Software), Media query",
    excerpt:
      "Translated a professional Figma design into functional code respecting proportions, typography, and spacing, applying BEM to keep CSS scalable and organized.",
    description:
      "Built a pixel-perfect implementation of a Figma design into code, resulting in a fully responsive art gallery site adapted for desktop, tablet, and mobile, using HTML5, CSS with BEM methodology, and Grid Layout. Implemented a responsive layout and typography system, resulting in a consistent visual experience across screens from mobile up to 1280px, using Flexbox, Grid, media queries, and custom fonts.",
    image: homelandImage,
    repoUrl: "https://mariamendozax.github.io/web_project_homeland/",
  },
  {
    title: "Triple Espresso Café | TripleTen (2026)",
    tags: "HTML5, CSS3, BEM methodology, Flexbox, positioning, and pseudoclasses.",
    excerpt:
      "A coffee shop landing page built from a design brief as part of an advanced HTML & CSS sprint. Includes a reservation section accessible directly from the header, embedded recipe iFrames, business hours, location, and social links.",
    description:
      "Translated a professional design brief into a fully responsive coffee shop landing page, resulting in a pixel-accurate layout built entirely with semantic HTML5 and modern CSS3, with no frameworks or JavaScript. Structured all components using BEM methodology, resulting in a scalable, collision-free naming system that mirrors how production codebases organize styles. Built the layout with Flexbox and strategic positioning, resulting in a header with a direct-access reservation section, embedded recipe iFrames, and a footer with business hours, location, and social links, all fully responsive across screen sizes. Used pseudo-classes for interactive states, resulting in polished hover and focus feedback without relying on JavaScript.",
    image: triplePeaksImage,
    repoUrl: "https://mariamendozax.github.io/web_project_coffeeshop/",
  },
];

export default projects;
