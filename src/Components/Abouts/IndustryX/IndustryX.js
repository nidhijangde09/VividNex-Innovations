import React from 'react'
import Navbar from '../../Navbar/Navbar';
import ManagedServicesImg from '../../../assets/images/ManagedService.jpg';
import CloudStats from './CloudStats';
import CloudCardSection from './CloudCardSection';
import ServiceHoverPanel from './ServiceHoverPanel';
import SixGridHoverCards from './SixGridHoverCards';
import Footer from '../../Footer/Footer';
import './IndustryX.css';



function IndustryX() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={ManagedServicesImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Metaverse services</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
          </p>
        </div>
      </div>
      <h1 className='headings-1'>Metaverse now</h1>
      <CloudStats />
      <h1 className='headings-1'>Reinvent with managed services</h1>
      <CloudCardSection />
      <h1 className='headings-1'> areas we support</h1>
      <ServiceHoverPanel />
      
      <SixGridHoverCards />
      <Footer />
    </div>
  )
}

export default IndustryX;
