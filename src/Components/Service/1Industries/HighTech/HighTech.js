import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import EnergyStats from './EnergyStats';
import energyimg from '../../../../assets/images/energy.jpg';
import BankingHoverPanel from './BankingHoverPanel';
import BankingSlider from './BankingSlider';
import EnergyGridHoverCard from './EnergyGridHoverCard';
import PartnersCarouselSection from './PartnersCarouselSection';
import EnergyCardSection from './EnergyCardSection';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';

function HighTech() {
  return (
    <div>
      <Navbar />
         <div className="service-container">
        <div className="service-image">
          <img src={energyimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>HighTech consulting</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
          </p>
        </div>
      </div>
  <h1 className='headings-1'>HighTech now</h1>
      <EnergyStats />
<h1 className='headings-1'>How to reinvent</h1>
      <EnergyCardSection />
<h1 className='headings-1'>Segments we support</h1>
      <BankingHoverPanel />
<h1 className='headings-1'>What’s trending</h1>
      <BankingSlider />
<h1 className='headings-1'>Awards and recognition</h1>
      <EnergyGridHoverCard />
<h1 className='headings-1'>Partners in change</h1>
<PartnersCarouselSection/>
      <h1 className='headings-1'>Our leaders</h1>
      <BankingSection />
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

export default HighTech
