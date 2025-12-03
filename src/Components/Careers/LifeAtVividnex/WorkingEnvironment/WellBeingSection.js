import React from "react";
import "./WellBeingSection.css";

function WellBeingSection() {
  return (
    <div className="wellbeing-container">
      {/* Row 1 */}
      <div className="wellbeing-item">
        <img
          src="https://images.pexels.com/photos/17774930/pexels-photo-17774930.jpeg"
          alt="Employee Assistance"
        />
        <div className="wellbeing-text">
          <h3>Make work work for you</h3>
          <p>
            At VividNex, flexibility can take many forms—whether it’s a formal arrangement outlined in your role or an informal plan created with your team lead to support how you work best.
          </p>
        </div>
      </div>

      <div className="wellbeing-item">
        <img
          src="https://media.istockphoto.com/id/1430078498/photo/mature-adult-participants-discussing-in-teams-during-the-workshop.jpg?b=1&s=612x612&w=0&k=20&c=YTjGPyVnNQMZUZrkZSCPNUgSC9mTea_68d5ZGDF_KI0="
          alt="Apps and tools"
        />
        <div className="wellbeing-text">
          <h3>Form connections in real life</h3>
          <p>
            Your relationships with your local team and the VividNex community are what make working here unique. Everyone at VividNex experiences moments of in-person collaboration—whether daily, monthly, or quarterly—to learn together, share ideas, and strengthen connections with colleagues, leaders, and clients.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="wellbeing-item2">
        <img
          src="https://images.pexels.com/photos/7979439/pexels-photo-7979439.jpeg"
          alt="Mental Health Ally Network"
        />
        <div className="wellbeing-text">
          <h3>Be present with clients</h3>
          <p>
            If you’re in a client-facing role at VividNex, you’ll engage with your clients regularly—at least three days a week, whether in person or virtually. Depending on your project and team location, we encourage prioritizing in-person collaboration to build stronger partnerships and deliver impactful results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WellBeingSection;
