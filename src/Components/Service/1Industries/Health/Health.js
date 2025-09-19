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
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
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
      



      <Footer />
    </div>
  )
}

export default Health;
