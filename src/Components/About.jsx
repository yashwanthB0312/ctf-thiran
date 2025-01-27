import React from 'react';
import image from '../assets/Thiran.jpg';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About CTF Events</h2>
      <div className="about-content">
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p style={{color:'rgb(252, 234, 222)',fontSize:'30px',fontWeight:'900',fontFamily:"Playwrite IN",marginBottom:"30px"}} >Registration Ends on 5-Feb-2025</p>
            <h1><b>The Ultimate Reward for the Winner!</b></h1>
            The champion of this challenge will earn an exclusive internship opportunity, giving them the chance to gain hands-on experience and kickstart their career in a real-world environment! Don't miss out on this incredible opportunity—take the first step towards your dream role and get rewarded for your hard work!
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={image} alt="Cybersecurity" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;