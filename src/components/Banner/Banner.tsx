import "./Banner.css";
import heroImage from "../../assets/bannerimg/hero.jpg";

const Banner = () => {
  return (
    <section className="banner">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Soul Flow Yoga"
        className="banner-image"
      />

      {/* Dark Overlay */}
      <div className="banner-overlay" />

      {/* Content */}
      <div className="banner-content">
        {/* Main Tagline */}
        <h1 className="banner-tagline">
          Find your <em>stillness.</em><br />
          Find your strength.
        </h1>

        <p className="banner-subtitle">
          Yoga & Wellness · Helsinki, Finland
        </p>

        {/* Light Lines */}
        <div className="banner-lines">
          <div className="banner-line">
            <div className="banner-line-icon">🧘‍♀️</div>
            <div className="banner-line-title">Yoga</div>
            <div className="banner-line-desc">Mind & Body</div>
          </div>

          <div className="banner-divider" />

          <div className="banner-line">
            <div className="banner-line-icon">🌿</div>
            <div className="banner-line-title">Life</div>
            <div className="banner-line-desc">Balance & Peace</div>
          </div>

          <div className="banner-divider" />

          <div className="banner-line">
            <div className="banner-line-icon">💪</div>
            <div className="banner-line-title">Exercise</div>
            <div className="banner-line-desc">Strength & Flow</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="banner-btn">Book a Class</button>
      </div>

      {/* Scroll Indicator */}
      <div className="banner-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Banner;