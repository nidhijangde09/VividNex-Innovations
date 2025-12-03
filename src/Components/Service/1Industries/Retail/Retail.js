import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import EnergyStats from './EnergyStats';
import Retailimg from '../../../../assets/images/Retail.jpg';
import BankingHoverPanel from './BankingHoverPanel';
import BankingSlider from './BankingSlider';
import EnergyGridHoverCard from './EnergyGridHoverCard';
import PartnersCarouselSection from './PartnersCarouselSection';
import EnergyCardSection from './EnergyCardSection';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import BankingPartnersSection from './BankingPartnersSection';
import RetailCareer from './RetailCareer';
function Retail() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Retailimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Retail consulting</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
          </p>
        </div>
      </div>
      <h1 className='headings'>Retail now</h1>
      <EnergyStats />
      <h1 className='headings'>How to reinvent</h1>
      <EnergyCardSection />
      <h1 className='headings'>Segments we support</h1>
      <BankingHoverPanel />
      <h1 className='headings'>What’s trending</h1>
      <BankingSlider />
      <h1 className='headings'>Our extended partner ecosystem</h1>
      <BankingPartnersSection />
      <h1 className='headings'>Awards and recognition</h1>
      <EnergyGridHoverCard />
      <h1 className='headings'>Partners in change</h1>
      <PartnersCarouselSection />
      <RetailCareer />

      <Footer />
    </div>
  )
}

export default Retail;
