import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Mail, MapPin, Send } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { FooterLink, SectionHeading } from "./PortfolioSections";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    setStatus("Your email app should open with this message drafted. This website does not send or store messages.");
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-wrap content-section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading number="06" kicker="GET IN TOUCH" title="Let’s talk about reliable data." id="contact-title" />
      <div className="contact-layout">
        <div className="contact-copy">
          <p>If you’re building data platforms, modernizing pipelines, or growing an engineering team, I’d be glad to connect.</p>
          <div className="contact-details">
            <a href={`mailto:${portfolio.email}`}><span><Mail size={16} aria-hidden="true" /></span>{portfolio.email}<ArrowUpRight size={13} aria-hidden="true" /></a>
            <div><span><MapPin size={16} aria-hidden="true" /></span>{portfolio.location}</div>
            <a href={portfolio.github} target="_blank" rel="noreferrer"><span><Github size={16} aria-hidden="true" /></span>GitHub profile<ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
          <p className="contact-note">No LinkedIn URL was included in the supplied resume. Add one in <code>src/data/portfolio.ts</code> when available.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>CONTACT FORM</span><span className="form-secure"><Mail size={13} aria-hidden="true" /> Opens your email app</span></div>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={4} placeholder="What would you like to discuss?" required />
          <button className="button button-primary form-submit" type="submit">
            Draft email <Send size={15} aria-hidden="true" />
          </button>
          <p className="form-help" role="status" aria-live="polite">{status || `Or email me directly at ${portfolio.email}.`}</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a className="brand footer-brand" href="#home" aria-label={`${portfolio.name}, back to home`}>
          <span className="brand-mark">{portfolio.monogram}</span>
          <span className="brand-name">atif<span>.</span></span>
        </a>
        <p>Data platforms, built for what’s next.</p>
        <div className="footer-links">
          <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
          <a href={`mailto:${portfolio.email}`} aria-label="Email Atif"><Mail size={17} /></a>
          <FooterLink />
        </div>
        <span className="copyright">© {new Date().getFullYear()} {portfolio.name}</span>
      </div>
    </footer>
  );
}
