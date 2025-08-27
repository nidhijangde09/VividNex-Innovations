import React from "react";
import "./GrowthSection.css";

const growthData = [
  {
    title: "Grow with purpose",
    description:
      "Whether this is your first full-time role or you're joining us as an executive, there’s space to grow. Our breadth and depth of expertise across industries means you can easily explore and develop your skills and interests.",
    img: "https://media.istockphoto.com/id/1498322832/photo/indian-businesspeople-clapping-and-appreciating-businessman-at-conference-company-is-greeting.jpg?b=1&s=612x612&w=0&k=20&c=VGDYW-G_GmfWFuOxQck9ADXlk0Fl-cdnpVUCYM7roU0=", // replace with real image
    reverse: false,
  },
  {
    title: "Keep learning",
    description:
      "Continuous learning is essential for growth. That’s why we invest $1B annually in learning and development for all of our people. No matter your function, industry or business expertise, you'll get the skills you need to for ongoing success.",
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
            <a href="/" className="read-more">
              Read more <span className="arrow">➔</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GrowthSection;
