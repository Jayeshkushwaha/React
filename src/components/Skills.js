import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    "React Native",
    "JavaScript",
    "TypeScript",
    "Redux",
    "REST APIs",
    "GitHub",
    "GitLab",
    "CI/CD",
    "User Interface Design"
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;