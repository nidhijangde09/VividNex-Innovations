import React from "react";
import "./GrowthSection.css";
import CareerArea from "../../FindJob/CareerArea/CareerArea";

const growthData = [
  {
    title: "Grow with purpose",
    description:
      "Whether it’s your first role or you’re joining as an executive, there’s room to grow. With expertise across industries, we provide opportunities to explore, expand, and develop your skills and interests.",
    img: "https://media.istockphoto.com/id/1498322832/photo/indian-businesspeople-clapping-and-appreciating-businessman-at-conference-company-is-greeting.jpg?b=1&s=612x612&w=0&k=20&c=VGDYW-G_GmfWFuOxQck9ADXlk0Fl-cdnpVUCYM7roU0=", // replace with real image
    reverse: false,
  },
  {
    title: "Keep learning",
    description:
      "Continuous learning is the foundation of success. With a $1B annual investment in learning and development, we ensure everyone—across every function, industry, and expertise—has the tools to grow and succeed.",
    img: "https://media.istockphoto.com/id/1413884808/photo/business-colleagues-in-a-meeting-or-financial-advisor-or-lawyer-with-couple-explaining-options.jpg?b=1&s=612x612&w=0&k=20&c=2Iyp6sn63znkTHH6D7k8Ej57Evn5XjeP_B82Xop6dUM=", // replace with real image
    reverse: true,
  },
];

function GrowthSection() {
  return (
    <div className="growth-container">
      {growthData.map((item, index) => (
        <div
          key={index}
          className={`growth-block ${item.reverse ? "reverse" : ""}`}
        >
          <div className="growth-image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="growth-text">
            <div className="line"></div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href="/CareerArea" className="read-more">
              Read more <span className="arrow">➔</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GrowthSection;
