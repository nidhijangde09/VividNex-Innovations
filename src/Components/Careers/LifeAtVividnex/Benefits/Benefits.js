import React from "react";
import "./Benefits.css";
import Navbar from "../../../Navbar/Navbar";
import benefitsimg from "../../../../assets/images/benefitsimg.jpg";
import WellBeingSection from './WellBeingSection';
import BankingHoverPanel from "./BankingHoverPanel";
import AcquisitionSlider from "./AcquisitionSlider";
import ValuesSection from './ValuesSection';
import Footer from '../../../Footer/Footer';
import Slider from './Slider';
import LearningDevelopment from './LearningDevelopment';
import ConnectSection  from './ConnectSection';
function Benefits() {
  return (
    <div>
      <Navbar />

      {/* Service section */}
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

      {/* Sections */}
      <h1 className="Careerhead">Your financial journey</h1>
      <BankingHoverPanel />

      <h1 className="Careerhead">Your time off</h1>
      <AcquisitionSlider />

      <h1 className="Careerhead">Your mental well-being</h1>
      <p className="Careerheadcontent">
        You don't leave any part of yourself behind when you login. <br />
        We offer support for the whole of you.
      </p>
<WellBeingSection />
  <h1 className='Careerhead'>Work with reach</h1>
      <p className='Careerheadcontent'>From industries to individuals, across continents, you’ll apply ingenuity and <br></br>innovation to make lasting impact.</p>
      <Slider />
    
     <h1 className='Careerhead'>Work with purpose</h1>
          <p className='Careerheadcontent'>Be part of creating positive change and making the world better for our people, our clients, and the communities where we live and work.</p>
          <ValuesSection />
           <h1 className='Careerhead'>Your growth</h1>
          <LearningDevelopment />
           <h1 className='Careerhead'>Stay connected</h1>
                <ConnectSection />
          <Footer />
    </div>
  );
}

export default Benefits;
