import React from 'react'
import './ManagedServices.css';
import Navbar from '../../Navbar/Navbar';
import ManagedServicesImg from '../../../assets/images/ManagedService.jpg';
import CloudStats from './CloudStats';
import CloudCardSection from './CloudCardSection';
import ServiceHoverPanel from './ServiceHoverPanel';
import SixGridHoverCards from './SixGridHoverCards';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';
import ManagedServicesCareer from './ManagedServicesCareer';
function ManagedServices() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={ManagedServicesImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Managed Services</h1>
          <p>
            "The lines between physical and digital are blurring. The metaverse opens new opportunities to interact, innovate, and engage, creating a powerful space for designing inclusive, meaningful, and immersive experiences."
          </p>
        </div>
      </div>
      <h1 className='headings'>Managed Services </h1>
      <CloudStats />
      <h1 className='headings'>Innovate with Managed Services</h1>
      <CloudCardSection />
      <h1 className='headings'> Areas we support</h1>
      <ServiceHoverPanel />
       <h1 className='headings'>Awards and recognition</h1>
      <SixGridHoverCards />
      <ManagedServicesCareer />
      <Footer />
    </div>
  )
}

export default ManagedServices;
