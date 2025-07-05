import React from 'react';
import './Cloud.css';
import cloudImage from '../../../assets/images/cloud.png'; // Adjust the path if needed
import CloudStats from './CloudStats';
import CloudCardSection from './CloudCardSection';
import Navbar from '../../Navbar/Navbar';
import PartnersSlider from './PartnersSlider'


const CloudSection = () => {
  return (
    <div>
      <Navbar />
      <div className="cloud-section">
        <div className="cloud-image">
          <img src={cloudImage} alt="Cloud illustration" />
        </div>
        <div className="cloud-text">
          <h1>Cloud consulting services</h1>
          <p>
            Empower your business with the cloud. Cloud computing is now central to transformation—enabling
            innovation, agility, and continuous reinvention to meet the demands of a fast-evolving world.
          </p>
        </div>
      </div>
      <CloudStats />
      <CloudCardSection />
<PartnersSlider />
    </div>
  );
};

export default CloudSection;
