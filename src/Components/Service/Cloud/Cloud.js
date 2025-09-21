import React from 'react';
import './Cloud.css';
import cloud4 from '../../../assets/images/cloud4.jpg'; // Adjust the path if needed
import CloudStats from './CloudStats';
import CloudCardSection from './CloudCardSection';
import Navbar from '../../Navbar/Navbar';
import PartnersSlider from './PartnersSlider'
import Footer from '../../Footer/Footer';
import SixGridCards from './SixGridCards';
import CloudSlider from './CloudSlider';
import CloudCareers from './CloudCareers';
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';

const CloudSection = () => {
  return (
    <div>
      <Navbar />
      <div className="cloud-section">
        <div className="cloud-image">
          <img src={cloud4} alt="Cloud illustration" />
        </div>
        <div className="cloud-text">
          <h1>Cloud consulting offerings</h1>
          <p>
            Cloud computing fuels business innovation and adaptability. Empower your enterprise to continuously evolve and thrive in a fast-paced digital world.
          </p>
        </div>
      </div>
      <h1 className='headings'>Cloud </h1>
      <CloudStats />
      <h1 className='headings'>Innovate with cloud</h1>
      <CloudCardSection />
      <h1 className='headings'>What’s next in cloud? </h1>
      <CloudSlider />

      <h1 className='headings'>Awards and recognition</h1>
      <SixGridCards />
      <h1 className='headings'>Partners in change</h1>
      <PartnersSlider />
<CloudCareers />
    
      <Footer />

    </div>
  );
};

export default CloudSection;
