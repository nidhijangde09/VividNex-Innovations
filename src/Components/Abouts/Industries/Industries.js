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
          <h1>About recruiting at <br></br>Accenture</h1>
          <p>
            Here’s what happens after you apply for a role:
          </p>
        </div>
      </div>

      <h1 className='Careerhead'>Featured recognition</h1>
      <DataAIGridHoverCard />
 <p className='Careerheadcontent'>AWARDS BY ORGANIZATION</p>
      <h1 className='Careerhead'>Leading industry-wide reinvention</h1>
<BankingHoverPanel />
<Footer />
    </div>
  )
}

export default Industries
