import React from 'react'
import './TechnologyTransformation.css';
import CloudStats from './CloudStats';
import TechnologyConsultingimg from '../../../assets/images/TechnologyConsultingimg.jpg';
import TechnologyTransformationCardSection from './TechnologyTransformationCardSection';
import TechnologyTransformationSlider from './TechnologyTransformationSlider';
import TechnologyTransformationSection from './TechnologyTransformationSection';
import Navbar from '../../Navbar/Navbar';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import TechnologyTransformationCareer from './TechnologyTransformationCareer';

function TechnologyTransformation() {
  return (

    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={TechnologyConsultingimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Technology consulting</h1>
          <p>
            As physical and digital realities converge, the metaverse becomes a platform for innovation, interaction, and engagement—helping organizations craft immersive, inclusive experiences.
          </p>
        </div>
      </div>
      <h1 className='headings'>Technology Transformation </h1>
      <CloudStats />
      <h1 className='headings'>Innovate with Technology Transformation</h1>
      <TechnologyTransformationCardSection />
      <h1 className='headings'>What’s trending with strategy</h1>
      <TechnologyTransformationSlider />
      <h1 className='headings'>Partners in change</h1>
      <TechnologyTransformationSection />
      <TechnologyTransformationCareer />
     
             <Footer />
    </div>

  )
}

export default TechnologyTransformation;













