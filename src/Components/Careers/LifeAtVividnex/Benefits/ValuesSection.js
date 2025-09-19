
import React from "react";
import "./ValuesSection.css";


const values = [
  {
    title: "Sustainability",
   description: "At Vividnex, we integrate sustainability into our client solutions and run our business with a strong commitment to the environment, ethics, and human rights—creating meaningful value for communities worldwide.",
    img: "https://media.istockphoto.com/id/2185887801/photo/businessman-analyze-investment-sustainability-esg-icons-esg-environmental-protection-concept.jpg?b=1&s=612x612&w=0&k=20&c=bZVWpkNL_13w57ajF4-gyXi8TAFnl_gWBF3mqyJmm_E=", // replace with your image
  },
  {
   title: "Inclusion & Diversity",
   description: "At Vividnex, we hire and develop people from diverse backgrounds, perspectives, and experiences. This cognitive diversity fuels fresh insights, innovative thinking, and the reinvention businesses need to thrive.",
    img: "https://images.pexels.com/photos/4630669/pexels-photo-4630669.jpeg",
  },
  {
   title: "Ethical AI Innovation",
   description: "Vividnex empowers organizations to leverage AI intentionally, creating impact and trust while managing emerging risks.",
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
