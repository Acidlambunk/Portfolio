import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    "Golang",
    "Python",
    "C",
    "Java",
    "Javascript",
    "SQL",
    "Linux",
    "Kubernetes",
    "AWS",
    "AZURE"
  ];

  const languages = [
    { name: "Indonesian", level: "Mother language" },
    { name: "English", level: "Advanced (TOEFL ITP-630)" },
    { name: "Chinese", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Skills & Languages
      </motion.h2>
      <div className="skills-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="technical-skills"
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="skill-item"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="languages"
        >
          <h3>Languages</h3>
          <div className="languages-list">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="language-item"
              >
                <h4>{lang.name}</h4>
                <p>{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;