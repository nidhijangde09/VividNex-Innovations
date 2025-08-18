import React from "react";
import "./GenerativeDesign.css";

const GenerativeDesign = () => {
  return (
    <div className="generative-design">
      <div className="text-section">
        <div className="highlight-bar"></div>
        <h2>Generative Design and Planning</h2>
        <p>
          Imagine a solution that can instantly boost your capacity and optimize
          project timelines and resources. Generative Design and Planning makes
          this a reality.
        </p>
        <p>
          Cutting-edge technology and project expertise come together to automate
          tedious tasks and offer real-time insights into project progress, from
          the initial planning stages through to commissioning. Minimize your
          costs, avoid delays, and reduce changes, to complete projects on time
          and within budget.
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
