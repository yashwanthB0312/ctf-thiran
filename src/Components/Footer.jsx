import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contacts">
        <h2>Contact Us:</h2>
        <div className="contact-boxes">
          <div className="contact-box">
            <strong>Faculty<br /> Co-ordinator:</strong>
            <p>Ms. P. Megala</p>
            <a href="tel:7708284661">+91 7708284661</a>
          </div>
          <div className="contact-box">
            <strong>Student<br /> Co-ordinator:</strong>
            <p>Mr. R. Yukesh</p>
            <a href="tel:6380087296">+91 6380087296</a>
          </div>
        </div>
      </div>

      <div className="footer-socials">
        <h3>Follow Us:</h3>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/department-of-computer-and-communication-engineering?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sece_cce?igsh=cmdyeDBvamZ0aGlx" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </li>
          <li>
            <a href="mailto:sececceinnovations@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} />
            </a>
          </li>
        </ul>
      </div>

      <p>&copy; {new Date().getFullYear()} CTFQuest. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
