function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-text">
        I'm currently looking for internship and full-time Software Developer
        opportunities. Feel free to connect with me!
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <span className="card-number">01</span>
          <h3>Email</h3>

          <a href="mailto:mvborse1306@gmail.com">
            mvborse1306@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <span className="card-number">02</span>
          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/mayuri-borse-237034334"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <span className="card-number">03</span>
          <h3>GitHub</h3>

          <a
            href="https://github.com/mayuri-borse13"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mayuri-borse13
          </a>
        </div>

        <div className="contact-card">
          <span className="card-number">04</span>
          <h3>Location</h3>

          <p>Nashik, Maharashtra, India</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
