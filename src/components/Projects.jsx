function Projects() {
  const projects = [
    {
      title: "Restaurant Management System",
      description:
        "Developed during my internship to manage restaurant operations, billing, orders, and customer records.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/mayuri-borse13",
      demo: "#",
    },
    {
      title: "E-Learning Portal for Civic Awareness",
      description:
        "A responsive web application developed during internship to spread civic awareness through interactive learning content.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/mayuri-borse13",
      demo: "#",
    },
    {
      title: "Flask Notes App",
      description:
        "A secure Notes application with Login, Registration, JWT Authentication and CRUD operations using Flask and SQLite.",
      tech: "Python • Flask • SQLite",
      github: "https://github.com/mayuri-borse13/flask-notes-app",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="project-tech">{project.tech}</span>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;