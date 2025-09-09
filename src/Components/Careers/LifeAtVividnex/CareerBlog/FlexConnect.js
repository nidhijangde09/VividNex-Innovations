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
          Flexibility extends beyond where you work—to what you do and when and
          how you do it. For all of us, making connections is a key part of
          flexible working. We believe in its power to build strong relationships
          and innovate to create change.
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
