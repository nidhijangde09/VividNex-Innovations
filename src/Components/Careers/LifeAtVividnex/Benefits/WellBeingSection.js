import React from "react";
import "./WellBeingSection.css";

function WellBeingSection() {
  return (
    <div className="wellbeing-container">
      {/* Row 1 */}
      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/16249345/pexels-photo-16249345.jpeg"
          alt="Employee Assistance"
        />
        <div className="wellbeing-text">
          <h3>Employee Assistance Program </h3>
          <p>
            You will have access to the Employee Assistance Program (EAP), providing confidential, professional support for challenges including stress, anxiety, grief, relationship issues, or financial and legal concerns.
          </p>
        </div>
      </div>

      <div className="wellbeing-item">
        <img
          src="https://media.istockphoto.com/id/1033552822/photo/holding-glasses-on-hand-palm.jpg?b=1&s=612x612&w=0&k=20&c=NvQg7zfvqpPdJjywveGi-5H9TldXmOxQ9aAWKRESDQM="
          alt="Apps and tools"
        />
        <div className="wellbeing-text">
          <h3>Apps and tools</h3>
          <p>
            You’ll have access to a variety of well-being apps and tools designed to support your mental, emotional, and financial health. The Calm app offers stress reduction and sleep improvement tips; Nudge provides personalized financial education; RethinkCare supports parents and guardians; and Thrive Global courses help build habits that enhance resilience, well-being, and belonging. Additionally, Wysa offers 24/7 private, anonymous, and clinically validated mental health support through a confidential chatbot.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="wellbeing-item2">
        <img
          src="https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg"
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
