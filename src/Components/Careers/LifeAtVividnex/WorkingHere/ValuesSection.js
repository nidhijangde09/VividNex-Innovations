
import React from "react";
import "./ValuesSection.css";


const values = [
  {
    title: "Sustainability",
    description:
      "We embed sustainability to our client work and operate our business with a strong commitment to the environment, ethics and human rights. We work to create value in communities around the world.",
    img: "https://media.istockphoto.com/id/2185887801/photo/businessman-analyze-investment-sustainability-esg-icons-esg-environmental-protection-concept.jpg?b=1&s=612x612&w=0&k=20&c=bZVWpkNL_13w57ajF4-gyXi8TAFnl_gWBF3mqyJmm_E=", // replace with your image
  },
  {
    title: "Inclusion & diversity",
    description:
      "We actively hire and develop people who have different backgrounds, perspectives and lived experiences. This ensures that we have the cognitive diversity to deliver a variety of perspectives, observations, and insights—essential to drive the reinvention businesses need.",
    img: "https://images.pexels.com/photos/4630669/pexels-photo-4630669.jpeg",
  },
  {
    title: "Responsible AI",
    description:
      "Powerful AI tools like generative AI bring unprecedented opportunities as well as new risks. We help clients to take intentional actions to design, deploy and use AI to create value and build trust.",
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
