import React from "react";
import "./WellBeingSection.css";

function WellBeingSection() {
  return (
    <div className="wellbeing-container">
      {/* Row 1 */}
      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/4921081/pexels-photo-4921081.jpeg"
          alt="Employee Assistance"
        />
        <div className="wellbeing-text">
          <h3>Employee Assistance Program (EAP)</h3>
          <p>
           You’ll have access to confidential, expert guidance for 
           challenges such as anxiety, depression, grief, relationship 
           issues, or legal and financial concerns.
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
            Access a range of well-being resources: Calm for stress
             and sleep, Nudge for financial guidance, RethinkCare
              for parents, Thrive Global for resilience-building,
               and Wysa for 24/7 private, anonymous support.
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
          <h3>Mental Health Ally Network</h3>
          <p>
            Around the world, we support one another. Speak with a member
             of our trained Vividnex network whenever you need guidance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WellBeingSection;
