import React from 'react'
import BankingStats from './BankingStats';
import BankingCardSection from './BankingCardSection';
import BankingHoverPanel from './BankingHoverPanel';
import BankingSlider from './BankingSlider';
import BankingGridHoverCard from './BankingGridHoverCard';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Insuranceimg from '../../../../assets/images/InsuranceImg.jpg';
import './Insurance.css';

function Insurance() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Insuranceimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Insurance consulting</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
          </p>
        </div>
      </div>
      <BankingStats />  

      <BankingCardSection />

      <BankingHoverPanel />

      <BankingSlider />

      <BankingGridHoverCard  />
      
   
      <Footer />
    </div>
  )
}

export default Insurance;
