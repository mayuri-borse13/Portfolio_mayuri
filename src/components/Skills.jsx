function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Python",
    "Git",
    "GitHub",
    "SQL",
    "Flask",
    "Responsive Design",
    "VS Code",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;