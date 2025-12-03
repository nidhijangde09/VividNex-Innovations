import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import AutomotiveStats from './AutomotiveStats';
import Automotiveimg from '../../../../assets/images/Automotiveimg.jpg';
import AutomotiveCardSection from './AutomotiveCardSection';
import AutomotiveHoverPanel from './AutomotiveHoverPanel';
import PartnersCarouselSection from './PartnersCarouselSection';
import AutomotiveSlider from './AutomotiveSlider';
import AutomotiveGridHoverCard from './AutomotiveGridHoverCard';
import AutomotiveSection from './AutomotiveSection';
import { Link } from 'react-router-dom';
import customer3 from '../../../../assets/images/customer3.jpg';
import AutomotiveCraeer from './AutomotiveCareer';

function Automotive() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Automotiveimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Automotive consulting</h1>
          <p>
           The automotive industry stands at a turning point. What was once traditional manufacturing is now evolving into a broader mobility ecosystem. Progress depends on embracing this shift—collaborating across industries, innovating boldly, and building partnerships that drive shared success.

          </p>
        </div>
      </div>
      <h1 className='headings'>Automotive </h1>
      <AutomotiveStats />
      <h1 className='headings'>Innovate with Automotive</h1>
      <AutomotiveCardSection />
      <h1 className='headings'>Expertise Across Industries</h1>
      <AutomotiveHoverPanel />
      <h1 className='headings'>What’s trending</h1>
      <AutomotiveSlider />
      <h1 className='headings'>Milestones & Achievements</h1>
      <AutomotiveGridHoverCard />
      <h1 className='headings'>Transformative Partnerships</h1>
      <PartnersCarouselSection />
      <AutomotiveCraeer />
      <Footer />
    </div>
  )
}

export default Automotive
