import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Let there be change</h2>
        <div className="footer-links">
          <ul>
            <li>Preference Center</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Locations</li>
            <li>Sitemap</li>
          </ul>
          <ul>
            <li>Privacy Statement</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy/Settings</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <p className="footer-copy">© 2025 Vividnex. All Rights Reserved.</p>
      </div>
      <div className="footer-right">
        <div className="footer-bg-text">
          <span>CHANGE</span>
          <span>CHANGE</span>
          <span>CHANGE</span>
          <span>CHANGE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
