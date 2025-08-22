import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import AutomotiveStats from './AutomotiveStats';
import Utilitiesimg from '../../../../assets/images/Automotiveimg.jpg';
import AutomotiveCardSection from './AutomotiveCardSection';
import AutomotiveHoverPanel from './AutomotiveHoverPanel';
import PartnersCarouselSection from './PartnersCarouselSection';
import AutomotiveSlider from './AutomotiveSlider';
import AutomotiveGridHoverCard from './AutomotiveGridHoverCard';
import AutomotiveSection from './AutomotiveSection';
import { Link } from 'react-router-dom';
import customer3 from '../../../../assets/images/customer3.jpg';

function Utilities() {
  return (
    <div>
         <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Utilitiesimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Utilities services</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
          </p>
        </div>
      </div>
      <h1 className='headings-1'>Automotive now</h1>
      <AutomotiveStats />
      <h1 className='headings-1'>How to reinvent </h1>
      <AutomotiveCardSection />
      <h1 className='headings-1'>Ares we support</h1>
      <AutomotiveHoverPanel />
      <h1 className='headings-1'>What’s trending</h1>
      <AutomotiveSlider />
      <h1 className='headings-1'>Awards and recognition</h1>
      <AutomotiveGridHoverCard />
      <h1 className='headings-1'>Partners in change</h1>
      <PartnersCarouselSection />
      <h1 className='headings-1'>Our leaders</h1>
      <AutomotiveSection />
      <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Cloud careers</h1>
        <p>
          Join our cloud team to help clients across industries build smarter, future-ready solutions.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Utilities
