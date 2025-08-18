import React from 'react'
import ecosystempartner from '../../../assets/images/ecosystempartner.jpg';
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
          <img src={ecosystempartner} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Turn every customer interaction into a catalyst for growth.</h1>
          <p>
            Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
          </p>
        </div>
      </div>
      <EcosystemStats />
      <WhyWorkWithUs />
      <div className='head-container-5'>
        <h1>Our Partners</h1>
      </div>
      <PartnersCard />
      <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Careers​</h1>
        <p>
          Become part of our community of over 10,000 platform engineers and experts, and create long-term, meaningful connections with our partners and suppliers.
        </p>
        <Link to="#" className="learn-more-btn">Learn More</Link>
        <RelatedCapabilities />
      </div>
      <Footer />
    </div>
    
  )
}

