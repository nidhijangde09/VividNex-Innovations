import React from 'react'
import Navbar from '../../Navbar/Navbar';
import emerging1 from '../../../assets/images/emerging1.jpg';
import './EmergingTechnology.css'
import { Link } from 'react-router-dom';
import EmergingStats from './EmergingStats';
import EmergingCardSection from './EmergingCardSection';
import EmergingHoverPanel from './EmergingHoverPanel';
import EmergingSlider from './EmergingSlider';
import EmergingPartnersSection from './EmergingPartnersSection';
import EmergingHoverCards from './EmergingHoverCards';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import EmergingSection from './EmergingSection';

export default function EmergingTechnology() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={emerging1} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Turn every customer interaction into a catalyst for growth.</h1>
          <p>
            Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
          </p>
        </div>
      </div>
      <EmergingStats />
      <EmergingCardSection />
      <h1 className='headings-1'>How to innovate</h1>
      <EmergingHoverPanel />
      <h1 className='headings-1'>Latest in Emerging Technology</h1>
      <EmergingSlider />
      <h1 className='headings-1'>Partners in change </h1>
      <EmergingPartnersSection />
      <h1 className='headings-1'>Awards and recognition</h1>
      <EmergingHoverCards />
      <h1 className='headings-1'>Our leaders</h1>
<EmergingSection />
      <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Technology careers​</h1>
        <p>
          Combine deep expertise with agile thinking to empower clients to build secure, future-ready businesses in an unpredictable digital world.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />

    </div>
  )
}
