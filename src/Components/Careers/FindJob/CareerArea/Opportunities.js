import React from "react";
import "./Opportunities.css";
import Careeri from '../../../../assets/images/Careeri.jpg';
const Opportunities = () => {
  return (
    <div className="career-container">
      {/* Left Side - Image with Early Career Professionals */}
      <div className="career-left">
        <img
          src={Careeri }
          alt="Early career professional"
          className="career-img"
        />
        <div className="career-text">
          <h3>Aspiring Professionals</h3>
          <p>
         Starting your professional journey? The Vividne program welcomes you. 
         From engineers to strategists, our analysts learn,
          grow, and make an impact every day.
          </p>
           <a href="#" className="career-link">
            Explore opportunities →
          </a>
        </div>
      </div>

      {/* Right Side - Experienced Professionals */}
      <div className="career-right">
        <img
          src="https://media.istockphoto.com/id/1384110533/photo/asian-male-director-is-interviewing-to-recruit-new-employees.jpg?b=1&s=612x612&w=0&k=20&c=g5sngRywrnOSd8QvKtJFsqCaPZ40mHXqJoH3wRuDYUM="
          alt="Experienced professionals"
          className="career-img"
        />
        <div className="career-text">
          <h3>Experienced professionals</h3>
          <p>
            Your skills, solutions, and curiosity are welcome here. 
            Join our global innovators to shape the future and 
            empower our clients.
          </p>
          <a href="#" className="career-link">
            Explore opportunities →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
