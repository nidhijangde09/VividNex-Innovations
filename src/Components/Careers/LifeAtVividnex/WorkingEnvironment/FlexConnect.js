import React from "react";
import "./FlexConnect.css";

function FlexConnect() {
  return (
    <div className="flexconnect-container">
      {/* Left side text */}
      <div className="flexconnect-text">
        <div className="heading-line"></div>
        <h2>Work your way, connect your way</h2>
        <p>
         Flexibility isn’t just about location—it’s about empowering you to choose how, when, and where you work best. We know that meaningful connections spark creativity and collaboration, helping us drive innovation together.
        </p>
      </div>

      {/* Right side image with play button */}
      <div className="flexconnect-video">
        <img
          src="https://images.pexels.com/photos/5973966/pexels-photo-5973966.jpeg"
          alt="Flex and connect"
        />
     
      </div>
    </div>
  );
}

export default FlexConnect;
