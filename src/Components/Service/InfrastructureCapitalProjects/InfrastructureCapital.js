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
          <h1>Leverage every customer touchpoint to drive business growth.</h1>
          <p>
            Fragmented and impersonal customer interactions limit organizational impact. Growth comes from delivering intuitive, data-driven experiences that feel effortless and proactive.
          </p>
        </div>
      </div>
      <h1 className='headings'>Why evolve your approach to capital project delivery?</h1>
      <CapitalProjects />
      <h1 className='headings'>How AI is changing infrastructure and capital projects</h1>
      <AIInfrastructureSection />

      <h1 className='headings'>What you can do</h1>
      < AccordionSection />
      <h1 className='headings'>Celebrating Excellence</h1>
      < InfrastructureCapitalHoverCards />

      <h1 className='headings'>What’s trending with infrastructure & capital projects








      </h1>
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

