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
            Be part of the change. Drive impact, deliver value, and help build a
            sustainable, connected future.
          </p>
        </div>
      </div>
      
      <FlexConnect />

      <h1 className="Careerhead">Your mental well-being</h1>
      <p className="Careerheadcontent">
        You don't leave any part of yourself behind when you login. <br />
        We offer support for the whole of you.
      </p>
      <WellBeingSection />
      <h1 className="Careerhead">Working with integrity</h1>
      <p className="Careerheadcontent">
        We share a commitment to working with the highest ethical standards and making positive change<br></br>
        in all we do.   Here are three essential parts of our code.
      </p>
      <ConductSection />
      <h1 className="Careerhead">Awards & recognition</h1>
      <DataAIGridHoverCard />
      <h1 className="Careerhead">Designed for belonging, built for innovation</h1>
      <p className="Careerheadcontent">
        Our offices are more than just places to plug in—they're environments designed to support connection,<br></br>
         creativity and well-being. With a mix of private offices, open spaces, social areas,<br></br>
         and flexible meeting rooms, you can flex where you work.<br></br>
        Working with our suppliers, partners and our people, we strive to make each office more<br></br>
         accessible, inclusive and sustainable.
      </p>

<MentalWellBeing />
<h1 className="Careerhead">Stay connected</h1>
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default WorkingEnvironment;
