import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will be in touch soon. 🙏");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        {/* Left Side */}
        <div>
          <div className="contact-header">
            <div className="contact-label">Get In Touch</div>
            <h2 className="contact-title">
              Begin your <em>journey</em> with us
            </h2>
            <p className="contact-desc">
              Whether you are brand new to yoga or returning to your practice,
              we would love to welcome you. Send us a message and we will
              help you find the perfect class.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <span>Monaliiku RY, Helsinki, Finland</span>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">📧</div>
              <span>sapnagera4u@gmail.com</span>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">🕐</div>
              <span>Classes available weekly — all levels welcome</span>
            </div>
          </div>
        </div>

        {/* Right Side — Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Sapna"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="hello@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Phone (optional)</label>
              <input
                className="form-input"
                type="tel"
                name="phone"
                placeholder="+358 00 000 0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Interested In</label>
              <select
                className="form-select"
                name="class"
                value={formData.class}
                onChange={handleChange}
              >
                <option value="">Select a class</option>
                <option value="ashtanga">Ashtanga for Beginners</option>
                <option value="singing-bowl">Singing Bowl</option>
                <option value="yin-yoga">Yin Yoga</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Your Message</label>
            <textarea
              className="form-input form-textarea"
              name="message"
              placeholder="Tell us a little about yourself and your yoga experience..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="form-submit" type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;