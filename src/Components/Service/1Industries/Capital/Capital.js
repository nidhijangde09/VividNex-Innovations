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
          <h1>Modernizing Legacy Systems</h1>
          <p>
            The boundaries between physical and digital are blurring. The metaverse opens doors to fresh ways to interact, innovate, and engage—creating inclusive, immersive experiences that drive meaningful impact.
          </p>
        </div>
      </div>
      <h1 className='headings'>Capital  now</h1>
      <CapitalStats />
      <h1 className='headings'>How to reinvent</h1>
      <CapitalCardSection />
      <h1 className='headings'>What’s trending </h1>
      <CapitalSlider />
      <h1 className='headings'>Partners in change</h1>
      <CapitalPartnersSection />
      <h1 className='headings'>Awards and recognition</h1>
      <CapitalGridHoverCard />
    
      
      <Footer />
    </div>
  )
}

export default Capital;
