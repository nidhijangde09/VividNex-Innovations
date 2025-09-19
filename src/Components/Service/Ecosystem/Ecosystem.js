import React from 'react'
import emergimg from '../../../assets/images/emergimg.jpg';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Ecosystem.css';
import EcosystemStats from './EcosystemStats';
import WhyWorkWithUs from './WhyWorkWithUs';
import PartnersCard from './PartnersCards';
import RelatedCapabilities from './RelatedCapabilities';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';

export default function Ecosystem() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={emergimg} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Transform each client moment into an opportunity for success.</h1>
          <p>
            Inconsistent and impersonal touchpoints stop organizations from building lasting customer trust. Unlocking growth requires delivering unified, intelligent experiences that feel natural, not forced.</p>
        </div>
      </div>
      <EcosystemStats />
      <WhyWorkWithUs />
      <div className='head-container-5'>
        <h1>Our Partners</h1>
      </div>
      <PartnersCard />
      <RelatedCapabilities />
      
      <Footer />
    </div>

  )
}

