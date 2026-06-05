import { useState } from 'react';
import '../styles/navbar.css';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Studio', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#newsletter' },
  { label: "FAQ's", href: '#' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">Elementum</a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
