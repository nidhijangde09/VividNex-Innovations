import React from 'react';
import './Cloud.css';
import cloud2 from '../../../assets/images/cloud2.jpg'; // Adjust the path if needed
import CloudStats from './CloudStats';
import CloudCardSection from './CloudCardSection';
import Navbar from '../../Navbar/Navbar';
import PartnersSlider from './PartnersSlider'
import Footer from '../../Footer/Footer';
import SixGridCards from './SixGridCards';
import CloudSlider from './CloudSlider';

import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';

const CloudSection = () => {
  return (
    <div>
      <Navbar />
      <div className="cloud-section">
        <div className="cloud-image">
          <img src={cloud2} alt="Cloud illustration" />
        </div>
        <div className="cloud-text">
          <h1>Similar cloud consulting offerings</h1>
          <p>
            Cloud computing fuels business innovation and adaptability. Empower your enterprise to continuously evolve and thrive in a fast-paced digital world.
          </p>
        </div>
      </div>
      <CloudStats />
      <CloudCardSection />
         <h1 className='headings-1'>What’s next in cloud? </h1>
      <CloudSlider />
      
       <h1 className='headings-1'>Awards and recognition</h1>
      <SixGridCards />
      <h1 className='headings'>Partners in change</h1>
      <PartnersSlider />
     
       <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Cloud careers</h1>
        <p>
    Join our cloud team to help clients across industries build smarter, future-ready solutions.
        </p>
       <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />
    </div>
  );
};

export default CloudSection;
