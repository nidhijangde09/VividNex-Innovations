
import React from "react";
import "./ValuesSection.css";


const values = [
  {
    title: "Building a Better Tomorrow",
    description:
      "Sam heads into the office, collaborating with their team to solve problems.",
    img: "https://media.istockphoto.com/id/2185887801/photo/businessman-analyze-investment-sustainability-esg-icons-esg-environmental-protection-concept.jpg?b=1&s=612x612&w=0&k=20&c=bZVWpkNL_13w57ajF4-gyXi8TAFnl_gWBF3mqyJmm_E=", // replace with your image
  },
  {
   title: "Inclusion & Diversity",
description: "At Vividnex, we hire and nurture people from diverse backgrounds, perspectives, and experiences. This cognitive diversity drives richer insights and innovative solutions—essential for reinventing the way businesses succeed.",
    img: "https://images.pexels.com/photos/4630669/pexels-photo-4630669.jpeg",
  },
  {
    title: "Responsible AI",
description: "At Vividnex, we guide clients to harness AI responsibly. By designing, deploying, and using AI with intention, we help create value while building trust and managing emerging risks.",
    img: "https://media.istockphoto.com/id/2217642170/photo/responsible-ai-concept-with-ethical-principles-transparency-and-social-impact-in-technology.jpg?b=1&s=612x612&w=0&k=20&c=jE-zCo3UlM-SAyACeLPxBUF_tBcWAUzHZMKzqxEvYac=",
  },
];

function ValuesSection() {
  return (
    <div className="values-container">
      {values.map((item, index) => (
        <div key={index} className="value-card">
          <img src={item.img} alt={item.title} className="value-img" />
          <h3 className="value-title">{item.title}</h3>
          <p className="value-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ValuesSection;
