import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import benefitsimg from '../../../../assets/images/benefitsimg.jpg';
import Footer from '../../../Footer/Footer';
import FlexConnect from './FlexConnect';
import WellBeingSection from './WellBeingSection';
import ConductSection from './ConductSection';
import ConnectSection from './ConnectSection';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import MentalWellBeing from './MentalWellBeing';

function WorkingEnvironment() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={benefitsimg} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>Here, possibilities have no limits.</h1>
          <p>
           Join us in driving impact, delivering value, and
            building a sustainable, connected future.
          </p>
        </div>
      </div>
      
      <FlexConnect />

      <h1 className="Careerhead">Your mental well-being</h1>
      <p className="Careerheadcontent">
      When you log in, you don’t leave any part of yourself behind. 
      We provide support for the whole you.
      </p>
      <WellBeingSection />
      <h1 className="Careerhead">Working with integrity</h1>
      <p className="Careerheadcontent">
       We are committed to upholding the highest ethical standards and driving positive change in everything we do. Here are three core principles of our code
      </p>
      <ConductSection />
      <h1 className="Careerhead">Awards & recognition</h1>
      <DataAIGridHoverCard />
      <h1 className="Careerhead">Designed for belonging, built for innovation</h1>
      <p className="Careerheadcontent">
       Our offices are more than just places to work—they’re designed to foster connection, 
       creativity, and well-being. With a blend of private offices, open spaces, social hubs,
        and flexible meeting rooms, you can choose how and where you work. Together with our
         people, partners, and suppliers, we’re making every office more accessible,
          inclusive, and sustainable.
      </p>

<MentalWellBeing />
<h1 className="Careerhead">Stay connected</h1>
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default WorkingEnvironment;
