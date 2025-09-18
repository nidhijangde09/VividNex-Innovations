import React from 'react'
import './StrategyConsulting.css';
import StrategyConsultingImg from '../../../assets/images/StrategyConsultingImg.jpg';
import customer3 from '../../../assets/images/customer3.jpg';
import Navbar from '../../Navbar/Navbar';
import StrategyConsultingStats from './StrategyConsultingStats';
import StrategyConsultingCardSection from './StrategyConsultingCardSection';
import StrategyConsultingSlider from './StrategyConsultingSlider';

import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

function StrategyConsulting() {
  return (
    <div>
          <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={StrategyConsultingImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1> Strategy Consulting Services</h1>
          <p>
            Lead with bold reinvention—unlock remarkable business growth and make a lasting, positive impact on society.
          </p>
        </div>
      </div>
      <h1 className='headings'>Metaverse now</h1>
      <StrategyConsultingStats />
       <h1 className='headings'>Reinvent with strategy</h1>
      <StrategyConsultingCardSection />
         <h1 className='headings'>What’s trending with strategy</h1>

      <StrategyConsultingSlider />
         
      <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Learning careers</h1>
        <p>
          While technology enables transformation, it’s people who make it succeed. Empower your workforce with the skills to drive rapid growth.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />
    </div>
  )
}

export default StrategyConsulting;
