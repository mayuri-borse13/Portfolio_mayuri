function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <p>
          Hello! I'm <span>Mayuri Borse</span>, a Computer Science Engineering
          student passionate about web development and software engineering.
          I enjoy building responsive websites, learning new technologies,
          and solving real-world problems through code.
        </p>

        <div className="about-info">
          <div className="info-card">
            <span className="card-number">01</span>
            <h3>Education</h3>
            <p>B.Tech in Computer Science Engineering</p>
          </div>

          <div className="info-card">
            <span className="card-number">02</span>
            <h3>Experience</h3>
            <p>3 Internships Completed</p>
          </div>

          <div className="info-card">
            <span className="card-number">03</span>
            <h3>Location</h3>
            <p>Nashik, Maharashtra</p>
          </div>

          <div className="info-card">
            <span className="card-number">04</span>
            <h3>Goal</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
