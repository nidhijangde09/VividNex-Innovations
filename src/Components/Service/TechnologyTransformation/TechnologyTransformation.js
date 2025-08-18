import React from 'react'
import './TechnologyTransformation.css';
import TechnologyTransformationStats from './TechnologyTransformationStats';
import TechnologyConsultingimg from '../../../assets/images/TechnologyConsultingimg.jpg';
import TechnologyTransformationCardSection from './TechnologyTransformationCardSection';
import TechnologyTransformationSlider from './TechnologyTransformationSlider';
import TechnologyTransformationSection from './TechnologyTransformationSection';
import TechnologyTransformationConsultingSections from './TechnologyTransformationConsultingSections';
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
      <h1 className='headings-1'>Technology Transformation Now</h1>
      <TechnologyTransformationStats />
      <h1 className='headings-1'>Reinvent with strategy</h1>
      <TechnologyTransformationCardSection />
         <h1 className='headings-1'>What’s trending with strategy</h1>
      <TechnologyTransformationSlider />
       <h1 className='headings-1'>Partners in change</h1>
      <TechnologyTransformationSection />
       <h1 className='headings-1'>Our leaders</h1>
       <TechnologyTransformationConsultingSections />
       <div className='head-container-6'>
               <img src={customer3} alt="Logo" className='head-2-img' />
               <h1>Learning careers</h1>
               <p>
                 While technology drives business reinvention, it’s people who determine its success. Empower them with the skills needed to accelerate growth.
               </p>
               <Link to="/" className="learn-more-btn">Learn More</Link>
             </div>
             <Footer />
    </div>

  )
}

export default TechnologyTransformation;













