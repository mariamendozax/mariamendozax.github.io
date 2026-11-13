import profileImage from "../images/profile_image.jpg";

function About() {
  return (
    <section className="section about" id="about">
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

export default About;
