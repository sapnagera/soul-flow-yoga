import { useState, useEffect } from "react";
import "./Header.css";

const classes = [
  { name: "Ashtanga for Beginners", href: "#classes" },
  { name: "Singing Bowl", href: "#classes" },
  { name: "Yin Yoga", href: "#classes" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Soul <span>Flow</span></div>

        <nav className="nav">
         <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>

          {/* Classes with dropdown */}
          <div
            className="classes-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`nav-link classes-toggle ${dropdownOpen ? "open" : ""}`}>
              Classes <span className="arrow">▼</span>
            </button>
            <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
              {classes.map((c) => (
  <a key={c.name} href={c.href} className="dropdown-item">{c.name}</a>
))}
            </div>
          </div>

          <a href="#contact" className="nav-link">Contact</a>
        </nav>

       <a href="#contact" className="btn-book">Book a Class</a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <a href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</a>
        <button className="mobile-nav-link" onClick={() => setMenuOpen(false)}>About</button>
        <button className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Classes</button>
      {classes.map((c) => (
  <a key={c.name} href={c.href} className="mobile-class-item" onClick={() => setMenuOpen(false)}>{c.name}</a>
))}
        <button className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</button>
        <a href="#contact" className="mobile-book">Book a Class</a>
      </div>
    </>
  );
};

export default Header;