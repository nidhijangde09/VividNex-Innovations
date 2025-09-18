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
      <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Careers​</h1>
        <p>
          Join our community of 10,000+ platform engineers and specialists, and build lasting, impactful relationships with partners and suppliers.
        </p>
        <Link to="#" className="learn-more-btn">Learn More</Link>

      </div>
      <Footer />
    </div>

  )
}

