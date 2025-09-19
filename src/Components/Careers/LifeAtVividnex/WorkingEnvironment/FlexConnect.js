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
          Work your way at Vividnex. Flexibility means freedom
           in how you work and the connections you build—driving
            stronger relationships and innovation that creates change.
        </p>
      </div>

      {/* Right side image with play button */}
      <div className="flexconnect-video">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Check-Clients%3Arad-3x2?ts=1721906763880&dpr=off"
          alt="Flex and connect"
        />
     
      </div>
    </div>
  );
}

export default FlexConnect;
