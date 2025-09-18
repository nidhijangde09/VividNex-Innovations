import React from "react";
import "./ConnectedConstruction.css";

const ConnectedConstruction = () => {
  return (
    <div className="connected-construction">
      <div className="video-section">
        <iframe
          className="video-embed"
          src="https://i.ytimg.com/vi/MFcXCIOfscU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gOSgcMA8=&rs=AOn4CLD_ksJ_iKkm0v-niFvGurkbejfUdg"
          title="Connected Construction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-section">
        <div className="highlight-bar"></div>
    
        <p>
          "Step into the future of construction project management with VividNex Connected
           Construction. This platform is revolutionizing the industry by providing 
           real-time data and integrated tools that enhance every aspect of your project. 
           Reshape project planning, scheduling, and execution through smart equipment
            monitoring, video analytics for on-site progress, real-time site activity
             views, and material tracking."
        </p>
      </div>
    </div>
  );
};

export default ConnectedConstruction;
