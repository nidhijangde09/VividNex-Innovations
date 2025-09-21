import React from 'react'
import { Link } from 'react-router-dom';
import './CyberSecurity.css';
import cyber4 from '../../../assets/images/cyber4.jpg';
import CybersecurityStats from './CybersecurityStats';
import CyberCardSection from './CyberCardSection';
import PartnersSection from './PartnersSection';
import Navbar from '../../Navbar/Navbar';
import SixGridHoverCards from './SixGridHoverCards';
import CyberSecurityCareer from './CyberSecurityCareer';
import Footer from '../../Footer/Footer';
import CybersSlider from './CybersSlider';
export default function CyberSecurity() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={cyber4} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Cybersecurity consulting</h1>
          <p>
            Secure today. Thrive tomorrow. Infuse cybersecurity into your strategy to protect value, prevent threats, and build lasting trust.
          </p>
        </div>
      </div>
      <CybersecurityStats />
      <CyberCardSection />
      <h1 className='headings'>What’s next in Customer service ? </h1>
      <CybersSlider />
      <h1 className='headings'> Partners in change</h1>
      <PartnersSection />
      <h1 className='headings'> Awards and recognition</h1>
      <SixGridHoverCards />

      <CyberSecurityCareer />
      <Footer />
    </div>
  )
}














