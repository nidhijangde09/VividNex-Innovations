import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";

const cardData = [
  {
   subtitle: "Protecting the Digital World with Vividnex",
   title: "Case Study",
   description: "With Vividnex’s Protective DNS, hundreds of millions of threats are stopped monthly, strengthening digital security for people and organizations alike.",
  image:
      "https://t3.ftcdn.net/jpg/12/53/26/80/360_F_1253268001_JcEeDW4SB2iLba0o6mCQZAeDjJBwX3SB.jpg",
  ink: "/australia",
  },
  {
   subtitle: "Dealmaking in the Age of AI",
   title: "Research Report",
   description: "Vividnex research reveals how disciplined AI adoption in M&A enables firms to outperform, delivering strategic advantage and superior returns.",
  image:
      "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
  link: "/italy",
  },
  {
    subtitle: "Innovating Payments in the UAE",
    title: "Case Study",
    description: "With Vividnex, the UAE is driving digital transformation in financial services, emerging as a global leader in FinTech innovation.",
    image:
      "https://images.stockcake.com/public/b/5/e/b5e8b748-c1db-416f-af57-d3d05a918c47_medium/neon-tech-nexus-stockcake.jpg",
    link: "/canada",
  },
  {
    subtitle: "From Preparedness to Transformation",
    title: "Research Report",
    description: "Vividnex research shows that thriving in volatile times demands adaptive resilience—helping organizations grow stronger and stay ahead of the curve.",
    image:
      "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_960_720.jpg",
    link: "/egypt",
  },
];

const CardGrid = () => {
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default CardGrid;
