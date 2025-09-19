import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import ConsumerStats from './ConsumerStats';
import ConsumerGridHoverCard from './ConsumerGridHoverCard';
import ConsumerCardSection from './ConsumerCardSection';
import ConsumerHoverPanel from './ConsumerHoverPanel';
import ConsumerPartnersSection from './ConsumerPartnersSection';
import ConsumerSection from './ConsumerSection';
import ConsumerSlider from './ConsumerSlider';
import ConsumergoodsImg from '../../../../assets/images/ConsumergoodsImg.jpg';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';

function ConsumerService() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={ConsumergoodsImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>CPG consulting</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
          </p>
        </div>
      </div>
   <h1 className='headings'>Consumer goods and services now</h1>
      <ConsumerStats />
  <h1 className='headings'>How to reinvent</h1>
      <ConsumerCardSection />
  <h1 className='headings'>Segments we support</h1>
      <ConsumerHoverPanel />
  <h1 className='headings'>What’s trending </h1>
      <ConsumerSlider  />
  <h1 className='headings'>Awards and recognition</h1>
      <ConsumerGridHoverCard />
  <h1 className='headings'>Partners in change</h1>
      <ConsumerPartnersSection />
  
       
      <Footer />
    </div>
  )
}

export default ConsumerService
