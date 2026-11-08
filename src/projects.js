import aroundUsImage from "../images/AroundUs.png";
import expensesImage from "../images/TrackExpenses.png";
import homelandImage from "../images/Homeland.png";
import triplePeaksImage from "../images/TriplePeaks.png";
import mexicoLindoImage from "../images/mexicoLindoImage.png";

const projects = [
  {
    title: "México Lindo y Qué Rico | TripleTen (2026)",
    tags: "React, React Router, Third-Party API, Fetch, Bilingual (ES/EN), Responsive Design, Vercel",
    excerpt:
      "Bilingual ordering app for a family birria business in Isla Mujeres, with cart, delivery/pickup options and WhatsApp ordering.",
    description:
      "Designed and built a bilingual (Spanish/English) ordering app for my mom's birria business, featuring a categorized menu with extras, a shopping cart with React Router, opening-hours logic that blocks orders after the daily cutoff, and order submission through WhatsApp. Integrated a third-party weather API using Fetch with preloader and error handling, and deployed the app on Vercel with environment variables for sensitive data.",
    image: mexicoLindoImage,
    repoUrl: "https://github.com/mariamendozax/project-isla-frontend",
    liveUrl: "https://mexicolindo-isla.vercel.app",
  },
  {
    title: "Around the U.S. | TripleTen (2026)",
    tags: "React, Node.js, Express, MongoDB, JWT Authentication, REST API, Nginx, Google Cloud",
    excerpt:
      "Full stack image-sharing app with user registration, login and protected routes, deployed on a Google Cloud VM with HTTPS.",
    description:
      "Built and deployed a full stack web app where users can sign up, log in, and post, like and delete cards. Developed a RESTful API with Express and MongoDB (Mongoose schemas and models), implemented JWT-based authentication and authorization middleware, centralized error handling, request validation with celebrate, and request/error logging. Connected the React front end to the API and deployed both on a Google Cloud VM using Nginx, PM2 and HTTPS with Certbot.",
    image: aroundUsImage,
    repoUrl: "https://github.com/mariamendozax/web_project_api_full",
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
