import React from 'react'
import Navbar from '../../Navbar/Navbar';
import sustainabilityImg from '../../../assets/images/sustainability.jpg';
import SustainabilityConsultingStats from './SustainabilityConsultingStats';
import SustainabilityConsultingCardSection from './SustainabilityConsultingCardSection';
import SustainabilityConsultingSlider from './SustainabilityConsultingSlider';
import SustainabilityConsultingViedoSection from './SustainabilityConsultingViedoSection';
import PartnersCarouselSection from './PartnersCarouselSection';
import SustainabilityConsultingGridHoverCard from './SustainabilityConsultingGridHoverCard';

import SustainabilityConsultingHoverPanel from './SustainabilityConsultingHoverPanel';
import Footer from '../../Footer/Footer';




function SustainabilityConsulting() {
  return (
    <div>
       <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={sustainabilityImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Sustainability Consulting</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
          </p>
        </div>
      </div>
      <h1 className='headings'>Sustainability now</h1>
      <SustainabilityConsultingStats />
       <h1 className='headings'>Reinvent with sustainability</h1>
       <SustainabilityConsultingCardSection />
            <h1 className='headings'>What’s trending </h1>
       <SustainabilityConsultingSlider />
       <SustainabilityConsultingViedoSection />
         <h1 className='headings'>Partners in change </h1>
       <PartnersCarouselSection />
        <h1 className='headings'>Awards and recognition</h1>
       <SustainabilityConsultingGridHoverCard />
        <h1 className='headings'>Areas we support</h1>
       <SustainabilityConsultingHoverPanel />
    
       <Footer />
    </div>
  )
}

export default SustainabilityConsulting;
