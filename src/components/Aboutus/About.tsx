import "./About.css";
import sapnaImg from "../../assets/Aboutus/sapna.jpeg";

const About = () => {
  return (
    <section className="about" id="about">

      {/* Section Header */}
      <div className="about-header">
        <div className="about-label">About Me</div>
        <h2 className="about-title">
          The <em>soul</em> behind Soul Flow
        </h2>
      </div>

      {/* Single Row — Image Left, Text Right */}
      <div className="about-single">

        {/* Left — Photo */}
        <div className="about-image-wrap">
          <img
            src={sapnaImg}
            alt="Sapna"
            className="about-img"
          />
        </div>

        {/* Right — Content */}
        <div className="about-content">
          <h3 className="about-name">Sapna</h3>
          <div className="about-role">Yoga Teacher · Helsinki, Finland</div>
          <div className="about-divider" />
          <p className="about-quote">
            "Yoga found me before I found it."
          </p>
          <p className="about-text">
            I began my yoga journey at 19 — curious, self-taught,
            learning by watching and feeling. What started as a
            personal practice grew into a deep study of yoga and
            meditation in Jaipur, where I trained in Ashtanga and
            discovered the true depth of this ancient practice.
          </p>
          <p className="about-text" style={{ marginTop: "1rem" }}>
            Today I bring that same curiosity and warmth to my
            classes at Monaliiku RY in Helsinki — where East meets
            North, and every body is welcome exactly as they are.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;