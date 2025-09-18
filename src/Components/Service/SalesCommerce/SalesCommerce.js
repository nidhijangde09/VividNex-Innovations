import React from 'react'
import SalesCommerceImg from '../../../assets/images/SalesCommerce.jpg'; // Renamed here
import Navbar from '../../Navbar/Navbar';
import SalesCommerceStats from './SalesCommerceStats';
import SalesCommerceCardSection from './SalesCommerceCardSection';
import SalesCommerceSlider from './SalesCommerceSlider';
import SalesCommerceViedoSection from './SalesCommerceViedoSection';
import Footer from '../../Footer/Footer';
import customer3 from '../../../assets/images/customer3.jpg';
import PartnersCarouselSection from './PartnersCarouselSection';
import { Link } from 'react-router-dom';
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
          <h1>Metaverse services</h1>
          <p>
            As physical and digital worlds converge, the metaverse empowers organizations to design meaningful, inclusive, and immersive experiences that drive innovation and engagement.
          </p>
        </div>
      </div>
      <h1 className='headings'>Metaverse now</h1>
      <SalesCommerceStats />
        <h1 className='headings'>Reinvent with strategy</h1>
      <SalesCommerceCardSection />
            <h1 className='headings'>What’s trending with strategy</h1>
      <SalesCommerceSlider />
      <SalesCommerceViedoSection />
        <h1 className='headings'>Partners in change</h1>
      <PartnersCarouselSection />
          <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Learning careers</h1>
        <p>
          While technology drives business reinvention, it’s people who determine its success. Empower them with the skills needed to accelerate growth.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />
    </div>
  )
}

export default SalesCommerce
