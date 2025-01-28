// import React from 'react';

// function Footer() {
//   return (
//     <footer className="footer">
//       <p>&copy; {new Date().getFullYear()} CTF Events. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contacts">
        <h2>Contact Us:</h2>
        <ul>
          <li><strong>Member 1:</strong> Ms.P.Megala - <a href="tel:7708284661">+91 7708284661</a></li>
          <li><strong>Member 2:</strong> Mr.R.Yukesh - <a href="tel:6380087296">+91 6380087296</a></li>
        </ul>
      </div>
      <p>&copy; {new Date().getFullYear()} CTF Events. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
