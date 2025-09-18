import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './InfrastructureCapital.css';
import project1 from '../../../assets/images/project1.jpg';
import CapitalProjects from './CapitalProjects';
import AIInfrastructureSection from './AIInfrastructureSection';
import AccordionSection from './AccordionSection';
import AchievementSlider from './AchievementSlider';
import InfrastructureCapitalHoverCards from './InfrastructureCapitalHoverCards';
import InfrastructureSlider from './InfrastructureSlider';
import SecondAchievementSlider from './SecondAchievementSlider';
import ConnectedConstruction from './ConnectedConstruction';
import GenerativeDesign from './GenerativeDesign';
import InfrastructurePartnersSection from './InfrastructurePartnersSection';
import AcquisitionSlider from './AcquisitionSlider';
import CareersSection from './CareersSection';

import Footer from '../../Footer/Footer';
function InfrastructureCapital() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={project1} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Turn every customer interaction into a catalyst for growth.</h1>
          <p>
            Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
          </p>
        </div>
      </div>
      <h1 className='headings'>Why transform capital project delivery?</h1>
      <CapitalProjects />
      <h1 className='headings'></h1>
      <AIInfrastructureSection />

      <h1 className='headings'></h1>
      < AccordionSection />
      <h1 className='headings'>Awards and recognition</h1>
      < InfrastructureCapitalHoverCards />

      <h1 className='headings'></h1>
      <InfrastructureSlider />

      <h1 className='headings'></h1>
      <ConnectedConstruction />

      <h1 className='headings'></h1>
      <GenerativeDesign />

   

      <h1 className='headings'></h1>
      <CareersSection />
      <Footer />
    </div>
  )
}

export default InfrastructureCapital

