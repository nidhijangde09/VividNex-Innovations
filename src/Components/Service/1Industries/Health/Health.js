import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import healthimg from '../../../../assets/images/healthimg.jpg';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import BankingStats from './BankingStats';
import EnergyCardSection from './EnergyCardSection';
import BankingHoverPanel from './BankingHoverPanel';
import BankingSlider from './BankingSlider';
import EnergyGridHoverCard from './EnergyGridHoverCard';
import PartnersCarouselSection from './PartnersCarouselSection';
import BankingSection from './BankingSection';
import HealthCareer from './HealthCareer';



function Health() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={healthimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Health consulting</h1>
          <p>
            The boundaries between physical and digital are disappearing. The metaverse presents transformative opportunities to interact, innovate, and engage in entirely new ways. It's a dynamic space for designing inclusive, immersive, and meaningful experiences that connect people across realities.
          </p>
        </div>
      </div>

      <h1 className='headings'>Health  now</h1>
      <BankingStats />

      <EnergyCardSection />

      <BankingHoverPanel />

      <BankingSlider />

      <EnergyGridHoverCard />

      <PartnersCarouselSection />

      <BankingSection />
      

<HealthCareer />

      <Footer />
    </div>
  )
}

export default Health;
