function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Python", "Flask", "SQL"],
    },
    {
      title: "Workflow",
      skills: ["Git", "GitHub", "VS Code", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
