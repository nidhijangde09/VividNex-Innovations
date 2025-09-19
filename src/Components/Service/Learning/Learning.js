import React from 'react'
import Navbar from '../../Navbar/Navbar';
import learning from '../../../assets/images/learning1.jpg';
import './Learning.css'
import ResilienceSection from './ResilienceSection';
import LearningStats from './LearningStats';
import LearningCardSection from './LearningCardSection';
import LearningSlider from './LearningSlider';
import LearningPartnersSection from './LearningPartnersSection';
import LearningSection from './LearningSection';
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';




function Learning() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={learning} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Online Learning Solutions</h1>
          <p>
            While technology accelerates transformation, it’s your people who drive lasting impact. Vividnex Innovations LearnHub empowers you to cultivate the skills your teams need—and your business demands—to grow smarter, faster, and stronger.


          </p>
        </div>
      </div>
      <ResilienceSection />
      <LearningStats />
      <LearningCardSection />
      <h1 className='headings'>AI-Enhanced Learning Experiences</h1>
      <LearningSlider />
      <LearningPartnersSection />
  

     

      <Footer />
    </div>
  )
}

export default Learning
