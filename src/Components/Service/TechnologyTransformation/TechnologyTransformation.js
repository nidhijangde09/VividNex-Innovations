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
            As physical and digital realities converge, the metaverse becomes a platform for innovation, interaction, and engagement—helping organizations craft immersive, inclusive experiences.
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













