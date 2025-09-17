import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Career from '../Careers/Career';
import WhoWeAre from '../Abouts/WhoWeAre/WhoWeAre';
import Locations from '../Abouts/Locations/Locations';
import Value from '../Abouts/Value/Value';
import AwardsRecognition from '../Abouts/AwardsRecognition/AwardsRecognition';
import CookiePolicy from './CookiePolicy/CookiePolicy'
import PrivacyStatement from './PrivacyStatement/PrivacyStatement';
import TermsConditions from './TermsConditions/TermsConditions';
import AccessibilityStatement from './AccessibilityStatement/AccessibilityStatement';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Let there be Vividnex</h2>
        <div className="footer-links">
          <ul>
            <li><Link to="/AwardsRecognition">Awards & Recognition</Link></li>
            <li><Link to="/Career">Careers</Link></li>
            <li><Link to="/WhoWeAre">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/Locations">Locations</Link></li>
            <li><Link to="/Value">360° Value</Link></li>
          </ul>
          <ul>
            <li><Link to="/PrivacyStatement">Privacy Statement</Link></li>
            <li><Link to="/TermsConditions ">Terms & Conditions</Link></li>
            <li><Link to="/CookiePolicy">Cookie Policy/Settings</Link></li>
            <li><Link to="/AccessibilityStatement">Accessibility Statement</Link></li>
          </ul>
        </div>



        {/* ✅ Social Media after copyright */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/vividnex/posts/?feedView=all" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/vividnex/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Vividnex. All Rights Reserved.
        </p>


      </div>

      <div className="footer-right">
        <div className="footer-bg-text">
          <span>VIVIDNEX</span>
          <span>VIVIDNEX</span>
          <span>VIVIDNEX</span>
          <span>VIVIDNEX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
