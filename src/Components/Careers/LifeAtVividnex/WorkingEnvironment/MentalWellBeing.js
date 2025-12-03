import React from "react";
import "./MentalWellBeing.css"; // updated css file name

function MentalWellBeing() {
  return (
    <div className="wellbeing-container">
      {/* Row 1 */}
      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/7108758/pexels-photo-7108758.jpeg"
          alt="Employee Assistance"
        />
        <div className="wellbeing-text">
          <h3>Global accommodation support</h3>
          <p>
        Available across multiple countries, the VividNex Accommodation Support Program provides tools and resources—like assistive technologies, flexible work options, sign language interpreters, screen readers, and more—to ensure an accessible and empowering workplace for everyone.
          </p>
        </div>
      </div>

      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/7979439/pexels-photo-7979439.jpeg"
          alt="Apps and tools"
        />
        <div className="wellbeing-text">
          <h3>Inclusive dress code</h3>
          <p>
          At VividNex, our dress code lets you express yourself. Wear what makes you feel confident, professional, and true to your personal style.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="wellbeing-item2">
        <img
          src="https://images.pexels.com/photos/5710667/pexels-photo-5710667.jpeg"
          alt="Mental Health Ally Network"
        />
        <div className="wellbeing-text">
          <h3>Supportive spaces</h3>
          <p>
          VividNex offices are designed with everyone in mind. From wellness and interfaith rooms to lactation facilities and all-gender restrooms, we create spaces that support comfort, well-being, and inclusion for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentalWellBeing;
