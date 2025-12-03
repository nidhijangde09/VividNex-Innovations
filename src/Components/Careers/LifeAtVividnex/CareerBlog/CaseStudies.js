import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";


const cardData = [
  
  {
    subtitle: "Insider Views",
    title: "Case Study",
    description: "Go behind the scenes at VividNex. Hear directly from our people about their projects, growth, and how they make an impact every day.",
    image: "https://media.istockphoto.com/id/1347269944/photo/abstract-technology-background-connection-structure-big-data-visualization-and-business.jpg?b=1&s=612x612&w=0&k=20&c=o0ho1aFFroIDV0fqJxjGDrrQwNcNRjMevyr7yxwmS0k=",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Life at VividNex",
    title: "Research Report",
    description: "Discover what it’s like to be part of our innovative teams. Stories, experiences, and insights straight from the people shaping our culture.",
    image: "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "From Our People",
    title: "Case Study",
    description: "Learn from the voices of VividNex employees. See how collaboration, creativity, and curiosity drive real-world solutions. ",
    image: "https://media.istockphoto.com/id/1155516052/photo/marble-colorful-neon-wave-pattern-prism-glitch-effect-abstract-background-dark-purple-blue.jpg?b=1&s=612x612&w=0&k=20&c=XC2eU9MH7p3cbSBxn83exmR62wlKZjep5EDLpblcBxM=",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Inside VividNex",
    title: "Research Report",
    description: "Get a firsthand look at our work environment, culture, and career journeys—through the eyes of those who know it best.",
    image: "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_960_720.jpg",
    link: "/ResearchReportcard"
  }
];


const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Link to={card.link} key={index} className="card-link">
          <article className="card">
            <img
              className="card__background"
              src={card.image}
              alt={card.title}
              width="1920"
              height="2193"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">

                <p className="card__subtitle">{card.subtitle}</p>
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.description}</p>

              </div>
              <button className="card__button">Read more</button>
            </div>

          </article>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;