import React from 'react'
import "./WellBeingSection.css";
function Beign() {
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
            Confidential, professional support is available for
             any challenges you may face—whether related to mental
              health, relationships, or legal and financial matters.
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
            The Calm app provides tips for stress reduction and better sleep. Nudge delivers personalized financial education, while RethinkCare supports parents and guardians. Thrive Global courses help build habits that boost resilience, well-being, and belonging. Additionally, Wysa offers 24/7 private, anonymous, and clinically validated support, including a confidential chatbot if you prefer not to speak with someone directly.
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
            Around the world, we support one another. Speak with a member of our 
            trained Vividnex network whenever you need guidance
          </p>
        </div>
      </div>
    </div>
  )
}

export default Beign ;
