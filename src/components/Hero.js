import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-image"
          animate={{ 
            boxShadow: [
              "0px 0px 0px rgba(139, 115, 85, 0.2)",
              "0px 0px 30px rgba(139, 115, 85, 0.3)",
              "0px 0px 0px rgba(139, 115, 85, 0.2)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img src="/IMG_1864.JPG" alt="Benedict Brian Mulia" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Benedict Brian Mulia
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Software Engineer & Developer
        </motion.p>
        <motion.div 
          className="hero-contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>📧 benedictbrianmulia@gmail.com</p>
          <p>📱 +62 812-9696-5969</p>
          <p>
            <a href="https://www.linkedin.com/in/benedict-brian-mulia/" target="_blank" rel="noopener noreferrer">
              🔗 LinkedIn Profile
            </a>
          </p>
        </motion.div>
        <motion.a 
          href="https://github.com/Acidlambunk"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05, backgroundColor: '#A67B5B' }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;