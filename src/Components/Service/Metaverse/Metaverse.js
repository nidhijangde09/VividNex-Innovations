import React from 'react'
import MetaverseImg from '../../../assets/images/Metaverse.jpg'; // Renamed here
import Navbar from '../../Navbar/Navbar';
import './Metaverse.css'
import MetaverseCardSection from './MetaverseCardSection';
import MetaverseSlider from './MetaverseSlider';
import MetaverseGridHoverCard from './MetaverseGridHoverCard';
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import CloudStats from './CloudStats';
import MetaverseCareer from './MetaverseCareer';

function Metaverse() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={MetaverseImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Metaverse services</h1>
          <p>
            The lines between physical and digital are fading. The metaverse opens new opportunities to interact, innovate, and engage, creating inclusive and immersive experiences.
          </p>
        </div>
      </div>
      <h1 className='headings'>Metaverse </h1>
      <CloudStats />
      <h1 className='headings'>Innovate with Metaverse</h1>
      <MetaverseCardSection />
      <h1 className='headings'>What’s trending</h1>
      <MetaverseSlider />
      <h1 className='headings'>Awards & recognition</h1>
      <MetaverseGridHoverCard />

      <MetaverseCareer />
      <Footer />
    </div>
  );
}

export default Metaverse;
