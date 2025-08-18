import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveHoverCards from './ResponsiveHoverCards';
import './Service.css';
import Robot from '../../../assets/images/Robot.jpg';
import Navbar from '../../Navbar/Navbar';
import ServiceHoverPanel from './ServiceHoverPanel';
import InteractiveServicePanel from './InteractiveServicePanel';
import Simg from '../../../assets/images/Simg.jpg';
import Footer from '../../../Components/Footer/Footer';
export default function Service() {

  return (
    <div>
      <Navbar />
      <div className='head-container-s'>
        <img src={Robot} alt="Logo" className='head-1-img' />
        <div className="head-text-block">
          <h1 className='head-1-s'>Transform the Future <br /> of Your Business</h1>
          <p className='head-1-p'>
            Our unique blend of expertise, innovation, and
            collaboration helps you transform into the next-level version of your business.
          </p>
        </div>
      </div>

      <h2 className='head-2-s'>Capabilities</h2>
      <h3 className='head-2-p'>Capabilities that drive reinvention</h3>
      <ServiceHoverPanel />

      <h2 className='head-2-s'>Industries</h2>
      <h3 className='head-2-p'>Unmatched industry expertise</h3>
      <InteractiveServicePanel />

     <div className="head-container-6">
  <img src={Simg} alt="Background" className="head-2-img" />
  <div className="head-content">
    <h1>Reinventing every day</h1>
    <p>
      We help clients unlock their full potential through technology, data, AI, and modern ways of working—
      pushing boundaries to reshape industries and define what’s next.
    </p>
    <Link to="/" className="learn-more-btn">Learn More</Link>
  </div>
</div>

      <div className="award-section">
  <h1 className="award-heading">
    Innovation tailored for every industry.
  </h1>
  <ResponsiveHoverCards />
</div>
<Footer />
    </div>
  );
}
