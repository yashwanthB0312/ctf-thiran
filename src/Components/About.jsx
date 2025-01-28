import React, { useEffect } from 'react';
import image from '../assets/Thiran.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({ threshold: 0.1 }); // Hook to track section visibility
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        About CTF Events
      </motion.h2>
      <div className="about-content">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <p
              style={{
                color: 'rgb(252, 234, 222)',
                fontSize: '30px',
                fontWeight: '900',
                fontFamily: 'Playwrite IN',
                marginBottom: '30px',
              }}
            >
              Registration Ends on 5-Feb-2025
            </p>
            <h1>
              <b>The Ultimate Reward for the Winner!</b>
            </h1>
            The champion of this challenge will earn an exclusive internship
            opportunity, giving them the chance to gain hands-on experience and
            kickstart their career in a real-world environment! Don't miss out
            on this incredible opportunity—take the first step towards your
            dream role and get rewarded for your hard work!
          </motion.div>
          <motion.div
            className="about-image"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <img src={image} alt="Cybersecurity" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
