import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="nav-logo">CTF Events</h1>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="events" smooth={true} duration={500}>Events</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li>
            <a 
              href=" https://forms.gle/JEkiFUZ2KxhfyqLZA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="register-btn"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;