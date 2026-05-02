import "./Classes.css";
import class1 from "../../assets/Classes/class1.jpg";
import class2 from "../../assets/Classes/class2.jpg";
import class3 from "../../assets/Classes/class3.jpg";

const classData = [
  {
    number: "01",
    name: "Ashtanga for Beginners",
    level: "Beginner Friendly",
    image: class1,
    desc:
      "A gentle introduction to the Ashtanga method. Learn the foundational postures, breathing techniques and flowing sequences in a warm and supportive environment — no experience needed.",
  },
  {
    number: "02",
    name: "Singing Bowl",
    level: "All Levels",
    image: class2,
    desc:
      "Immerse yourself in the healing vibrations of singing bowls. This deeply relaxing session combines sound therapy with gentle breathwork to calm the mind, release tension and restore inner balance.",
  },
  {
    number: "03",
    name: "Yin Yoga",
    level: "All Levels",
    image: class3,
    desc:
      "A slow and meditative practice focusing on deep stretching and stillness. Yin Yoga targets connective tissues and invites you to slow down, breathe and restore.",
  },
];

const Classes = () => {
  return (
    <section className="classes" id="classes">
      {/* Header */}
      <div className="classes-header">
        <div className="classes-label">What We Offer</div>
        <h2 className="classes-title">
          Find your <em>practice</em>
        </h2>
      </div>

      {/* Three Cards */}
      <div className="classes-grid">
        {classData.map((c) => (
          <div className="class-card" key={c.number}>
            <div className="class-image-wrap">
              <img src={c.image} alt={c.name} className="class-img" />
            </div>
            <div className="class-body">
              <div className="class-number">{c.number}</div>
              <h3 className="class-name">{c.name}</h3>
              <div className="class-level">{c.level}</div>
              <div className="class-divider" />
              <p className="class-desc">{c.desc}</p>
              <button className="class-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;