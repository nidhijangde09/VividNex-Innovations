import React from "react";
import "./FlexConnect.css";

function FlexConnect() {
  return (
    <div className="flexconnect-container">
      {/* Left side text */}
      <div className="flexconnect-text">
        <div className="heading-line"></div>
        <h2>AI is transforming work—are you ready?</h2>
        <p>
      At VividNex, AI is changing how we solve problems, collaborate, and deliver results. It’s redefining careers and enabling us to turn ideas into meaningful impact faster than ever.
        </p>
      </div>

      {/* Right side image only */}
      <div className="flexconnect-image">
        <img
          src="https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg"
          alt="Flex and connect"
        />
      </div>
    </div>
  );
}

export default FlexConnect;
