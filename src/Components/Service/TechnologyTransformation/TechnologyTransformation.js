import React from 'react'
import './TechnologyTransformation.css';
import TechnologyTransformationStats from './TechnologyTransformationStats';
import TechnologyConsultingimg from '../../../assets/images/TechnologyConsultingimg.jpg';
import TechnologyTransformationCardSection from './TechnologyTransformationCardSection';
import TechnologyTransformationSlider from './TechnologyTransformationSlider';
import TechnologyTransformationSection from './TechnologyTransformationSection';

import Navbar from '../../Navbar/Navbar';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

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
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
          </p>
        </div>
      </div>
      <h1 className='headings'>Technology Transformation Now</h1>
      <TechnologyTransformationStats />
      <h1 className='headings'>Reinvent with strategy</h1>
      <TechnologyTransformationCardSection />
         <h1 className='headings'>What’s trending with strategy</h1>
      <TechnologyTransformationSlider />
       <h1 className='headings'>Partners in change</h1>
      <TechnologyTransformationSection />
      
      
             <Footer />
    </div>

  )
}

export default TechnologyTransformation;













