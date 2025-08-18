import React from 'react'
import MetaverseImg from '../../../assets/images/Metaverse.jpg'; // Renamed here
import Navbar from '../../Navbar/Navbar';
import './Metaverse.css'
import MetaverseStats from './MetaverseStats';
import MetaverseCardSection from './MetaverseCardSection';
import MetaverseSlider from './MetaverseSlider';
import MetaverseGridHoverCard from './MetaverseGridHoverCard';
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';


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
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
          </p>
        </div>
      </div>
      <h1 className='headings-1'>Metaverse now</h1>
      <MetaverseStats />
      <h1 className='headings-1'>Reinvent with us</h1>
      <MetaverseCardSection />
      <h1 className='headings-1'>What’s trending</h1>
      <MetaverseSlider />
      <h1 className='headings-1'>Awards & recognition</h1>
      <MetaverseGridHoverCard />
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
}

export default Metaverse;
