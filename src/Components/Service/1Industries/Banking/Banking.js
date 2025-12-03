import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import FinancialImg from '../../../../assets/images/FinancialImg.jpg';
import BankingStats from './BankingStats';
import BankingCardSection from './BankingCardSection';
import BankingHoverPanel from './BankingHoverPanel';
import BankingSlider from './BankingSlider';
import BankingGridHoverCard from './BankingGridHoverCard';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import BankingCareer from './BankingCareer';


function Banking() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={FinancialImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Fintech Innovation</h1>
          <p>
            Redefine banking for a digital-first world with Vividnex. We deliver seamless customer experiences, smarter operations, and agile risk management—empowering banks to innovate and lead.
          </p>
        </div>
      </div>
      <h1 className='headings'>Banking  </h1>
      <BankingStats />
      <h1 className='headings'>Innovate with Banking</h1>
      <BankingCardSection />
      <h1 className='headings'>Segments we support</h1>
      <BankingHoverPanel />
      <h1 className='headings'>Reinventing the Digital Core</h1>
      <BankingSlider />
      <h1 className='headings'>Awards & recognition</h1>
      <BankingGridHoverCard />

      <BankingCareer />
      <Footer />
    </div>
  )
}

export default Banking
