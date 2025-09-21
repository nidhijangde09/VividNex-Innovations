import React from 'react'
import SalesCommerceImg from '../../../assets/images/SalesCommerce.jpg'; // Renamed here
import Navbar from '../../Navbar/Navbar';
import CloudStats from './CloudStats';
import SalesCommerceCardSection from './SalesCommerceCardSection';
import SalesCommerceSlider from './SalesCommerceSlider';
import SalesCommerceViedoSection from './SalesCommerceViedoSection';
import Footer from '../../Footer/Footer';
import customer3 from '../../../assets/images/customer3.jpg';
import PartnersCarouselSection from './PartnersCarouselSection';
import { Link } from 'react-router-dom';
import SalesCommerceCareer from './SalesCommerceCareer';
import './SalesCommerce.css'
function SalesCommerce() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={SalesCommerceImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Sales & Commerce services</h1>
          <p>
            As physical and digital worlds converge, the metaverse empowers organizations to design meaningful, inclusive, and immersive experiences that drive innovation and engagement.
          </p>
        </div>
      </div>
      <h1 className='headings'>Sales & Commerce </h1>
      <CloudStats />
        <h1 className='headings'>Innovate with Sales & Commerce</h1>
      <SalesCommerceCardSection />
            <h1 className='headings'>What’s trending with strategy</h1>
      <SalesCommerceSlider />

      <SalesCommerceViedoSection />
        <h1 className='headings'>Partners in change</h1>
      <PartnersCarouselSection />

       <SalesCommerceCareer />
      <Footer />
    </div>
  )
}

export default SalesCommerce
