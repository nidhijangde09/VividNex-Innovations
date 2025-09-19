import React from "react";
import "./MentalWellBeing.css"; // updated css file name

function MentalWellBeing() {
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
            At Vividnex, you’ll have access to confidential, professional
             guidance for life’s challenges—from anxiety, depression, and 
             grief to relationship, legal, and financial concerns. We’re here 
             to support your whole self, every step of the way.
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
            Vividnex gives you access to well-being tools like Calm for
             stress relief, Nudge for financial learning, RethinkCare for 
             parents, and Thrive Global for resilience. For round-the-clock
              support, Wysa offers private, anonymous, clinically validated guidance.
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
           We’re here for each other worldwide. Reach out to a trained member of our
            Accenture network for support whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentalWellBeing;
