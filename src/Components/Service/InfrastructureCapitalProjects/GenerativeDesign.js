import React from "react";
import "./GenerativeDesign.css";

const GenerativeDesign = () => {
  return (
    <div className="generative-design">
      <div className="text-section">
        <div className="highlight-bar"></div>
        
        <p>
        Envision a solution that enhances capacity and optimizes both timelines and resources. Generative Design and Planning turns this into reality.
        </p>
        <p>
          Cutting-edge technology and project expertise work together to automate tedious tasks and provide real-time insights into project progress, from initial planning through commissioning. Reduce costs, prevent delays, and minimize changes to ensure projects are completed on time and within budget."
          </p>
      </div>

      <div className="video-section">
        <iframe
          className="video-embed"
          src="https://www.youtube.com/embed/your_video_id"
          title="Generative Design Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GenerativeDesign;
