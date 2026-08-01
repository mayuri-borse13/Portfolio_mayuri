function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="greeting">Hello, I'm</p>

        <h1>Mayuri Borse</h1>

        <h2>Computer Science Engineer | Frontend Developer</h2>

        <p className="hero-description">
          I build responsive and user-friendly web applications using React,
          JavaScript, HTML, CSS, and Python. I enjoy solving real-world
          problems through clean and modern web development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://via.placeholder.com/350"
          alt="Mayuri Borse"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;