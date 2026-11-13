import { useState } from "react";

function Contact() {
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
    <footer className="section footer" id="contact">
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
          <button type="submit" className="footer__btn" disabled={isSubmitting}>
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

export default Contact;
