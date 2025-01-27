import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CTF Events. All rights reserved.</p>
    </footer>
  );
}

export default Footer;