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

function Automotive() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Automotiveimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Telecommunications & Media</h1>
          <p>
          As the physical and digital worlds converge, the metaverse opens doors to interactive, innovative, and engaging experiences that are inclusive and transformative.

          </p>
        </div>
      </div>
      <h1 className='headings'>Automotive now</h1>
      <AutomotiveStats />
      <h1 className='headings'>Shape What’s Next </h1>
      <AutomotiveCardSection />
      <h1 className='headings'>Expertise Across Industries</h1>
      <AutomotiveHoverPanel />
      <h1 className='headings'>What’s trending</h1>
      <AutomotiveSlider />
      <h1 className='headings'>Milestones & Achievements</h1>
      <AutomotiveGridHoverCard />
      <h1 className='headings'>Transformative Partnerships</h1>
      <PartnersCarouselSection />
  
      <Footer />
    </div>
  )
}

export default Automotive
