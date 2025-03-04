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
            Highly motivated and adaptable computer science student with a passion for cloud engineering and DevOps. 
            Possess strong programming skills (Golang, Python) and Linux experience to automate tasks and build 
            applications using Docker. Eager to contribute to a team environment and continuously learn new technologies.
          </p>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>TAMKANG UNIVERSITY</h4>
              <p>Taiwan, New Taipei City</p>
              <p>Bachelor of Computer Science and Information Engineering</p>
              <p>2021 - Present</p>
            </div>
            <div className="education-item">
              <h4>BINUS SCHOOL BEKASI</h4>
              <p>Indonesia, West Java</p>
              <p>High School, Natural Science</p>
              <p>2018 - 2021</p>
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