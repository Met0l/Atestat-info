import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Social media</h3>
          <p>Instagram: @megadeth</p>
          <p>Facebook: @Megadeth</p>
          <p>X: @megadeth</p>
        </div>
        <div className="footer-section">
          <h3>Muzică</h3>
          <p>Youtube: @Megadeth</p>
          <p>Spotify: @Megadeth</p>
          <p>Apple Music: @Megadeth</p>
        </div>
        <div className="footer-section">
          <h3>Parteneri</h3>
          <p>Gibson, Ibanez</p>
          <p>Yamaha</p>
          <p>Tama</p>
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