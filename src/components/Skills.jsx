// src/components/Skills.jsx
import React from "react";

const skills = [
  { title: "HTML5", level: "95%", className: "html" },
  { title: "CSS3", level: "95%", className: "css" },
  { title: "JavaScript", level: "90%", className: "js" },
  { title: "ReactJS", level: "90%", className: "react" },
  { title: "NodeJS", level: "90%", className: "node" },
  { title: "Python", level: "80%", className: "python" },
];

const Skills = () => {
  return (
    <div className="about-stats">
      <h4 className="stat-title">My Skills</h4>
      <div className="progress-bars">
        {skills.map((skill, index) => (
          <div className="progress-bar" key={index}>
            <p className="prog-title">{skill.title}</p>
            <div className="progress-con">
              <p className="prog-text">{skill.level}</p>
              <div className="progress">
                <span className={skill.className}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
