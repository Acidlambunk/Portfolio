import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "StudySurf",
    description: "A modern educational platform built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    link: "https://github.com/Acidlambunk/studysurf"
  },
  {
    title: "Web Development Projects",
    description: "Collection of web development projects showcasing various technologies and frameworks",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Acidlambunk/web"
  },
  {
    title: "OCR Training",
    description: "Optical Character Recognition training project for text detection and recognition",
    technologies: ["Python", "Machine Learning", "Computer Vision"],
    link: "https://github.com/Acidlambunk/OCR_Train"
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        My Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;