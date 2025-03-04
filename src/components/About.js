import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I am a passionate Software Engineer with a strong foundation in computer science
            and a keen interest in developing innovative solutions. My journey in technology
            has equipped me with diverse skills in software development, system architecture,
            and problem-solving.
          </p>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Computer Science</h4>
              <p>BINUS University</p>
              <p>2020 - 2024</p>
              <p>GPA: 3.95/4.00</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="/a.jpg" 
            alt="About Benedict Brian Mulia"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;