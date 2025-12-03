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
          <h1>Industry Analyst</h1>
          <p>
            Our achievements continue to earn recognition from leading industry analysts, reinforcing our position as a global leader.
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
