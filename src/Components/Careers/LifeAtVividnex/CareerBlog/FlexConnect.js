import React from "react";
import "./FlexConnect.css";

function FlexConnect() {
  return (
    <div className="flexconnect-container">
      {/* Left side text */}
      <div className="flexconnect-text">
        <div className="heading-line"></div>
        <h2>Flex and connect</h2>
        <p>
       Vividnex embraces flexibility in work and approach,
        empowering connections that strengthen relationships
         and fuel innovation
        </p>
      </div>

      {/* Right side image only */}
      <div className="flexconnect-image">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Check-Clients%3Arad-3x2?ts=1721906763880&dpr=off"
          alt="Flex and connect"
        />
      </div>
    </div>
  );
}

export default FlexConnect;
