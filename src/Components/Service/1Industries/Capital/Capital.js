import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import CapitalMarketImg from '../../../../assets/images/CapitalMarketImg.jpg';
import CapitalStats from './CapitalStats';
import CapitalCardSection from './CapitalCardSection';
import CapitalSlider from './CapitalSlider';
import CapitalPartnersSection from './CapitalPartnersSection';
import CapitalGridHoverCard from './CapitalGridHoverCard';
import CapitalSection from './CapitalSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';


function Capital() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={CapitalMarketImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Aerospace and defense services</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
          </p>
        </div>
      </div>
      <h1 className='headings-1'>Capital  now</h1>
      <CapitalStats />
      <h1 className='headings-1'>How to reinvent</h1>
      <CapitalCardSection />
      <h1 className='headings-1'>What’s trending </h1>
      <CapitalSlider />
      <h1 className='headings-1'>Partners in change</h1>
      <CapitalPartnersSection />
      <h1 className='headings-1'>Awards and recognition</h1>
      <CapitalGridHoverCard />
      <h1 className='headings-1'>Our leaders</h1>
      <CapitalSection />
      <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Cloud careers</h1>
        <p>
          Join our cloud team to help clients across industries build smarter, future-ready solutions.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Capital;
