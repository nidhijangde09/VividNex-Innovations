import React from "react";
import "./WellBeingSection.css";
import Value from '../Value/Value';
import SustainabilityConsulting from '../../Service/SustainabilityConsulting/SustainabilityConsulting';

function WellBeingSection() {
  return (
    <div className="wellbeing-container">
      {/* Row 1 */}
      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/3951672/pexels-photo-3951672.jpeg"
          alt="Employee Assistance"
        />
        <div className="wellbeing-text">
          <h3>Employee Assistance Program (EAP)</h3>
          <p>
            You’ll have access to confidential, professional guidance for
            challenges that may arise including anxiety, depression, grief,
            relationship challenges, or legal and financial concerns.
          </p>
          <a href="/Value" className="read-more">
            Read more ➡
          </a>
        </div>
      </div>

      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/6953835/pexels-photo-6953835.jpeg"
          alt="Apps and tools"
        />
        <div className="wellbeing-text">
          <h3>Apps and tools</h3>
          <p>
            The Calm app offers stress-reduction and sleep improvement tips.
            Nudge provides personalized financial education and RethinkCare
            gives support to parents and guardians. Thrive Global courses help
            build new habits to boost resilience, well-being, and a sense of
            belonging. Additionally, you’ll have access to Wysa for 24/7 private,
            anonymous, and clinically validated support, including a confidential
            chatbot if you prefer not to speak with a person.
          </p>
          <a href="/SustainabilityConsulting" className="read-more">
            Read more ➡
          </a>
        </div>
      </div>
    </div>
  );
}

export default WellBeingSection;

