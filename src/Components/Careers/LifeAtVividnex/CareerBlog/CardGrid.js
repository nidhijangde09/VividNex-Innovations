import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";


const cardData = [
  
  {
    subtitle: "Safeguarding the Digital Frontier: Inside the Work of the UK’s National Cyber Security Centre",
    title: "   Case Study",
    description: "The latest phase of its Protective DNS blocks more than 350 million threats each month—strengthening the digital resilience of UK citizens, services, and organizations.",
    image: "https://t3.ftcdn.net/jpg/12/53/26/80/360_F_1253268001_JcEeDW4SB2iLba0o6mCQZAeDjJBwX3SB.jpg",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Mastering the Art of Dealmaking in the Age of AI",
    title: "Research Report",
    description: "Technology can reshape the M&A landscape—but only for firms that move past experimentation and apply it with discipline. Three traits set leading acquirers apart—and drive outsized returns.",
    image: "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Transforming the Future of Payments in the UAE",
    title: " Case Study",
    description: "With a vision for digital innovation, the UAE is reshaping its financial services sector and rising as a prominent FinTech hub on the global stage.",
    image: "https://images.stockcake.com/public/b/5/e/b5e8b748-c1db-416f-af57-d3d05a918c47_medium/neon-tech-nexus-stockcake.jpg",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Redefining Resilience: Shifting from Preparedness to Transformation",
    title: "Research Report",
    description: "While resilience is rebounding to pre-pandemic levels, the stability may be misleading. Heightened volatility demands a shift toward adaptive resilience to sustain growth and competitive edge.",
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