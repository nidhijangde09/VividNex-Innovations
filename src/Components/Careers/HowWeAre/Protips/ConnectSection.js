import React from "react";
import "./ConnectSection.css";
import career1 from '../../../../assets/images/career1.png';
import community from '../../../../assets/images/community.png';
import CareerBlog from '../../LifeAtVividnex/CareerBlog/CareerBlog';

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
        <p>Find your next role with Vividnex and apply your skills where they make the biggest impact.</p>
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
        <p>Stay ahead with Vividnex—career tips, trends, and insights that empower your growth.</p>
        <a href="/CareerBlog" className="connect-link">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ConnectSection;
