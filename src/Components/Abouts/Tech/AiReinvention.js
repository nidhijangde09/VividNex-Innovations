import React from "react";
import "./AiReinvention.css";
import { Play } from "lucide-react"; // play icon

const AiReinvention = () => {
  return (
    <div className="ai-container">
      {/* Left Content */}
      <div className="ai-content">
        <h2>Empowering Innovation Across Regions</h2>
        <p>
          As technology continues to redefine industries, the demand for localized solutions that respect regional priorities and drive economic growth has never been greater. At VividNex, we collaborate with leading partners to build integrated, future-ready ecosystems that empower nations and enterprises to harness innovation responsibly. Our comprehensive approach enables organizations to scale quickly, maintain digital sovereignty, and deliver transformative solutions that strengthen both local economies and global competitiveness.
        </p>
        <a href="#" className="read-more">
          Read more →
        </a>
      </div>

      {/* Right Image */}
      <div className="ai-image">
        <img
          src="https://media.istockphoto.com/id/1398144342/photo/x-letter-digitally-generated-abstract-technology-background.jpg?b=1&s=612x612&w=0&k=20&c=EGMnQHOHZkxbC0Os2bJMGTSUTbZIaAzCmQMKdj7q0tU="
          alt="AI Reinvention"
        />

      </div>
    </div>
  );
};

export default AiReinvention;
