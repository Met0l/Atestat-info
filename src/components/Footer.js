import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Social media ??? </h3>
          <p>Instagram: pinkfloyd</p>
          <p>Youtube: Pink Floyd</p>
          <p>Fax: +40 254 213 457</p>
        </div>
        <div className="footer-section">
          <h3>Nu stiu ce pun aici</h3>
          <p>Str. 1 Decembrie 1918, Nr. 22</p>
          <p>Deva, Hunedoara, Romania</p>
          <p>ZIP: 330025</p>
        </div>
        <div className="footer-section">
          <h3>Parteneri</h3>
          <p>Chatgpt si youtuberi indieni</p>
          {/* <img src="/remedia-logo.png"/> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pepenar Maria. All rights reserved :D.</p>
      </div>
    </footer>
  );
}

export default Footer;