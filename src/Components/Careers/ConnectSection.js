import React from "react";
import "./ConnectSection.css";
import career1 from '../../assets/images/career1.png';
import community from '../../assets/images/community.png';

const ConnectSection = () => {
  return (
    <div className="connect-container">
      {/* Join Us */}
      <div className="connect-card">
        <div className="icon">
          <img 
            src={career1 }
            alt="Join us icon" 
            className="connect-icon" 
          />
        </div>
        <h3>Join us</h3>
        <p>Explore open roles that match your interests and skills.</p>
        <a href="#" className="connect-link">
          Search jobs →
        </a>
      </div>

      {/* Stay in Touch */}
      <div className="connect-card">
        <div className="icon">
          <img 
            src={community}
            alt="Stay in touch icon" 
            className="connect-icon" 
          />
        </div>
        <h3>Stay in touch</h3>
        <p>Get career tips and industry-leading insights.</p>
        <a href="#" className="connect-link">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ConnectSection;
