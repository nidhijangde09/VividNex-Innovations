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


export default function EmergingTechnology() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={emerging1} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Transform every customer interaction into an opportunity for growth.</h1>
          <p>
            Disconnected and impersonal customer experiences prevent organizations from reaching their full potential. Achieving growth requires seamless, insight-driven experiences that feel proactive, not reactive.
          </p>
        </div>
      </div>
      <EmergingStats />
      <EmergingCardSection />
      <h1 className='headings'>How to innovate</h1>
      <EmergingHoverPanel />
      <h1 className='headings'>Latest in Emerging Technology</h1>
      <EmergingSlider />
      <h1 className='headings'>Partners in change </h1>
      <EmergingPartnersSection />
      <h1 className='headings'>Awards and recognition</h1>
      <EmergingHoverCards />
      
   
      <Footer />

    </div>
  )
}
