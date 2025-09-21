import React from 'react'
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import supplyChainImg from '../../../assets/images/supplyChainImg.jpg';
import Navbar from '../../Navbar/Navbar';
import CloudStats  from './CloudStats';
import SupplyChainCardSection from './SupplyChainCardSection';
import SupplyChainSlider from './SupplyChainSlider';
import SupplyChainPartnersSection from './SupplyChainPartnersSection';
import PartnersCarouselSection from './PartnersCarouselSection';
import SupplyChainGridHoverCard from './SupplyChainGridHoverCard';
import SupplyChainCareer from './SupplyChainCareer';
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
            Embrace bold reinvention and join the forward-thinking few driving exceptional business growth while creating meaningful societal impact.
          </p>
        </div>
      </div>
      <h1 className='headings'> Supply Chain </h1>
      <CloudStats/>
      <h1 className='headings'>Innovate with Supply Chain</h1>
      <SupplyChainCardSection />
        <h1 className='headings'> Areas we support</h1>
      <SupplyChainHoverPanel />
          <h1 className='headings'>What’s trending</h1>
      <SupplyChainSlider />
       <h1 className='headings'>Extended partner ecosystem</h1> 
     <SupplyChainPartnersSection />
       <h1 className='headings'>Partners in change</h1> 
      <PartnersCarouselSection />
         <h1 className='headings'>Awards & recognition</h1> 
      <SupplyChainGridHoverCard />
       
       <SupplyChainCareer />
      <Footer />
    </div>
  )
}

export default SupplyChain
