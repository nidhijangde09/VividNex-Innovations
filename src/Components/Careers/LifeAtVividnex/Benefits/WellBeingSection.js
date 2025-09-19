import React from "react";
import "./WellBeingSection.css";

function WellBeingSection() {
  return (
    <div className="wellbeing-container">
      {/* Row 1 */}
      <div className="wellbeing-item">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Professional-guidance-challenges%3Arad-2x3?ts=1720594207413&dpr=off"
          alt="Employee Assistance"
        />
        <div className="wellbeing-text">
          <h3>Employee Assistance Program (EAP)</h3>
          <p>
            You’ll have access to confidential, professional guidance for
            challenges that may arise including anxiety, depression, grief,
            relationship challenges, or legal and financial concerns.
          </p>
        </div>
      </div>

      <div className="wellbeing-item">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/The-Calm-app-help-reduce-stress%3Arad-3x2?ts=1720594206322&dpr=off"
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
        </div>
      </div>

      {/* Row 2 */}
      <div className="wellbeing-item2">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Talk-With-Someone-From-Our-Trained-Network%3Arad-3x2?ts=1720594205868&dpr=off"
          alt="Mental Health Ally Network"
        />
        <div className="wellbeing-text">
          <h3>Vividnex Mental Wellness Allies</h3>
          <p>
            Wherever you are, Vividnex is here. Talk with someone from our 
            network of trained professionals to get support and advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WellBeingSection;
