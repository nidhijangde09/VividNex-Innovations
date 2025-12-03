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
          <h1>Here at Vividnex, there are no limits to what you can achieve.</h1>
          <p>
            At Vividnex, your ideas fuel change—create impact, unlock value, and help build a sustainable, connected world.
          </p>
        </div>
      </div>

      {/* Sections */}
      <h1 className="Careerhead">Your financial journey</h1>
      <BankingHoverPanel />

      <h1 className="Careerhead">Your time off</h1>
      <AcquisitionSlider />

      <h1 className="Careerhead"> Mental well-being</h1>
      <p className="Careerheadcontent">
       Vividnex embraces the whole you—because growth, creativity, and impact happen when you can be yourself fully.
      </p>
<WellBeingSection />
  <h1 className='Careerhead'>Family’s Well-being</h1>
      <p className='Careerheadcontent'>We understand that families come in many forms. As your family grows or your caregiving needs evolve, we’re committed to supporting you through flexible benefits and resources.</p>
      <Slider />
    
     <h1 className='Careerhead'>Work with purpose</h1>
          <p className='Careerheadcontent'>Be part of creating positive change at Vividnex—making the world better for our people, clients, and the communities where we live and work</p>
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
