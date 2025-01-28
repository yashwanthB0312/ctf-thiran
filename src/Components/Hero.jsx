import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <header id="home" className="hero">
      <img
        src="https://c.tenor.com/-SV9TjUGabMAAAAd/tenor.gif"
        alt="Cybersecurity GIF"
        className="hero-gif"
      />

      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to CTF Events</h1>
        <p>Test your cybersecurity skills in exciting capture the flag challenges</p>
        <Link to="events" smooth={true} duration={500}>
          <button className="cta-button">Explore Events</button>
        </Link>
      </motion.div>
    </header>
  );
}

export default Hero;
