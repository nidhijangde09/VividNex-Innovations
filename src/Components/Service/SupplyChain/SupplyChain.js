import React from 'react'
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import supplyChainImg from '../../../assets/images/supplyChainImg.jpg';
import Navbar from '../../Navbar/Navbar';
import SupplyChainStats from './SupplyChainStats';
import SupplyChainCardSection from './SupplyChainCardSection';
import SupplyChainSlider from './SupplyChainSlider';
import SupplyChainPartnersSection from './SupplyChainPartnersSection';
import PartnersCarouselSection from './PartnersCarouselSection';
import SupplyChainGridHoverCard from './SupplyChainGridHoverCard';
import SupplyChainLeader from './SupplyChainLeader';
import SupplyChainHoverPanel  from './SupplyChainHoverPanel';


function SupplyChain() {
  return (
    <div>
          <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={supplyChainImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1> Supply Chain </h1>
          <p>
            Embrace bold reinvention and join the forward-thinking few who are not only unlocking exceptional business growth, but also creating meaningful impact for society.
          </p>
        </div>
      </div>
      <h1 className='headings-1'> Supply Chain now</h1>
      < SupplyChainStats />
      <h1 className='headings-1'> How to reinvent</h1>
      <SupplyChainCardSection />
        <h1 className='headings-1'> Areas we support</h1>
      <SupplyChainHoverPanel />
          <h1 className='headings-1'>What’s trending</h1>
      <SupplyChainSlider />
       <h1 className='headings-1'>Extended partner ecosystem</h1> 
     <SupplyChainPartnersSection />
       <h1 className='headings-1'>Partners in change</h1> 
      <PartnersCarouselSection />
         <h1 className='headings-1'>Awards & recognition</h1> 
      <SupplyChainGridHoverCard />
         <h1 className='headings-1'>Our leaders</h1> 
      <SupplyChainLeader />
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

export default SupplyChain
