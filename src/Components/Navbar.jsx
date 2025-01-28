// import React, { useState } from 'react'; // Import useState hook
// import { Link } from 'react-scroll';

// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

//   return (
//     <nav className="navbar">
//       <div className="nav-content">
//         <h1 className="nav-logo">CTF Events</h1>
//         <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
//           <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//           <li><Link to="events" smooth={true} duration={500}>Events</Link></li>
//           <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//           <li>
//             <a 
//               href="https://forms.gle/JEkiFUZ2KxhfyqLZA" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="register-btn"
//             >
//               Register
//             </a>
//           </li>
//         </ul>

//         {/* Hamburger Icon */}
//         <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
//           <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
//           <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
//           <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="nav-logo">CTF Events</h1>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true} duration={500}>
              Events
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/JEkiFUZ2KxhfyqLZA"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
          <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
