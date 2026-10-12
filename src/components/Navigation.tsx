import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${portfolio.name}, home`} onClick={() => setOpen(false)}>
          <span className="brand-mark">{portfolio.monogram}</span>
          <span className="brand-name">atif<span>.</span></span>
        </a>

        <div className={`nav-links${open ? " is-open" : ""}`} id="primary-navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  );
}
