import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";

const cardData = [
  {
    title: " Research Report",
    description: "The race to reinvent with generative AI is well underway. The time to determine if you’re leading or being left behind is now. Discover the front-runners&#39; guide to scaling AI.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/GS-The-Front-Runners-600x848:rad-card-full?ts=1741953762442&fit=constrain&dpr=off",
    link: "/colombia"
  },
  {
    title: "Japan",
    description: "Experience the beauty of Mount Fuji and Sakura.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRp4Y1xOYZA1JlF4AXuS-xzkl2G4DBavgYk26k7MTgGQPw0vYID",
    link: "/japan"
  },
  {
    title: "France",
    description: "Discover Paris and the elegance of the Eiffel Tower.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/france"
  },
  {
    title: "India",
    description: "Uncover the spiritual vibrancy of Varanasi.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    title: "Australia",
    description: "Dive into the wonders of the Great Barrier Reef.",
    image: "https://www.shutterstock.com/image-photo/portrait-selfconfident-designer-creating-colourful-260nw-2204640691.jpg",
    link: "/australia"
  },
  {
    title: "Italy",
    description: "Savor the art and cuisine of Rome and Venice.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/NCSC-Glance-Skim-600x424:rad-card-half?ts=1746550318493&fit=constrain&dpr=off",
    link: "/italy"
  },
  {
    title: "Canada",
    description: "Discover stunning nature from coast to coast.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlkhf0sKECx-GNkpv35Th46MJ6E4O_h1IhzUAzoneJG3z3WkN",
    link: "/canada"
  },
  {
    title: "Egypt",
    description: "Walk among ancient pyramids and timeless history.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMQty-pg65L54KNa2nb8XV7bxAjFnnB8ajXohNvcErxhQsuIJO",
    link: "/egypt"
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
                <h2 className="card__title">{card.title}</h2>
                <p className="card__subtitle">Research Report: Trying to scale AI? You are going to need to think big. And act bigger.</p> {/* 🔹 New subtitle */}
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
