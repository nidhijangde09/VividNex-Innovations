import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Industriesimg from '../../../assets/images/Industriesimg.jpg';
import './Industries.css';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import BankingHoverPanel from './BankingHoverPanel';
import Footer from '../../Footer/Footer';

function Industries() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Industriesimg} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Industry Analyst</h1>
          <p>
          Our achievements continue to earn recognition from leading industry analysts, reinforcing our position as a global leader.
          </p>
        </div>
      </div>

      <h1 className='Careerhead'>Featured recognition</h1>
      <DataAIGridHoverCard />
 
      <h1 className='Careerhead'>Driving industry transformation</h1>
<BankingHoverPanel />
<Footer />
    </div>
  )
}

export default Industries
