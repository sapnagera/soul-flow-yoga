import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Top Grid */}
        <div className="footer-top">

          {/* Brand Column */}
          <div>
            <div className="footer-brand-logo">
              Soul <span>Flow</span>
            </div>
            <p className="footer-brand-desc">
              A mindful yoga practice rooted in tradition, adapted
              for modern life. Classes for all levels in the heart
              of Helsinki, Finland.
            </p>
            <div className="footer-social">
              <a className="footer-social-link" aria-label="Instagram">📸</a>
              <a className="footer-social-link" aria-label="Facebook">📘</a>
              <a className="footer-social-link" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <div className="footer-col-title">Our Classes</div>
            <ul className="footer-links">
              <li><a href="#classes">Ashtanga for Beginners</a></li>
              <li><a href="#classes">Singing Bowl</a></li>
              <li><a href="#classes">Yin Yoga</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <span>Soul Flow Yoga</span>. All rights reserved. Helsinki, Finland.
          </p>
          <p className="footer-tagline">
            "Find your stillness. Find your strength."
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;