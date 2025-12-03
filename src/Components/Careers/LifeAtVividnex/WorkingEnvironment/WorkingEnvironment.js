import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import workingimg from '../../../../assets/images/workingimg.jpg';
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
          <img src={workingimg} alt="Cloud consulting illustration" />
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

      <h1 className="Careerhead">VividNex workplace: empowered to grow</h1>
      <p className="Careerheadcontent">
        Where, when, and how you work at VividNex depends on your role and project needs. Our flexible approach is designed to support balance, creativity, and collaboration—empowering every team member to do their best work.
      </p>
      <WellBeingSection />
      <h1 className="Careerhead">Working with integrity</h1>
      <p className="Careerheadcontent">
        At VividNex, we’re united by a commitment to uphold the highest ethical standards and create positive impact through our actions. These three principles form the foundation of how we work and lead every day.
      </p>
      <ConductSection />
      <h1 className="Careerhead">Awards & recognition</h1>
      <DataAIGridHoverCard />
      <h1 className="Careerhead">Designed for belonging, built for innovation</h1>
      <p className="Careerheadcontent">
        At VividNex, our workspaces are more than just offices—they’re hubs for creativity, collaboration, and well-being. With a thoughtful mix of open spaces, quiet zones, social areas, and flexible meeting rooms, you can choose how and where you work best.
        <br></br>
        Working alongside our teams, partners, and suppliers, we’re committed to making every VividNex space more accessible, inclusive, and sustainable—so innovation can thrive for everyone.
      </p>

      <MentalWellBeing />
      <h1 className="Careerhead">Stay connected</h1>
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default WorkingEnvironment;
