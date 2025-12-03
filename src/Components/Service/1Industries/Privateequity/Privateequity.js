import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Privateequityimg from '../../../../assets/images/PrivateEquity.jpg';
import BankingStats from './BankingStats';
import BankingCardSection from './BankingCardSection';
import BankingSlider from './BankingSlider';
import BankingGridHoverCard from './BankingGridHoverCard';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import PartnersCarouselSection from './PartnersCarouselSection';
import './Privateequity.css';
import PrivateequityCareer from './PrivateequityCareer';

function Privateequity() {
  return (
    <div>
       <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Privateequityimg } alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Public Sector consulting</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
          </p>
        </div>
      </div>
      <h1 className='headings'>Public Sector  now</h1>
      <BankingStats />
      <h1 className='headings'>How to reinvent</h1>
      <BankingCardSection />
      <h1 className='headings'>What’s trending in banking</h1>
      <BankingSlider />
      <h1 className='headings'>Awards & recognition</h1>
      <BankingGridHoverCard />
      <h1 className='headings'>Partners in change</h1>
      <PartnersCarouselSection />
      
      <PrivateequityCareer />
      <Footer />
    </div>
  )
}

export default Privateequity ;
