import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";


const cardData = [
  
  {
    subtitle: "Embrace curiosity and continuous learning",
    title: "Case Study",
    description: "Innovation starts with asking questions. Stay curious, explore new technologies, and seek out learning opportunities—whether through courses, mentorship, or hands-on experimentation. The more you learn, the more ideas you can turn into impact.",
    image: "https://t3.ftcdn.net/jpg/12/53/26/80/360_F_1253268001_JcEeDW4SB2iLba0o6mCQZAeDjJBwX3SB.jpg",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Think beyond boundaries",
    title: "Research Report",
    description: "Don’t just solve the problem in front of you—look for opportunities to improve processes, products, or experiences. Collaboration across teams, functions, and disciplines often sparks the most creative solutions.",
    image: "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
    link: "/ResearchReportcard"
  },
  {
   subtitle: "Be proactive and take ownership",
    title: "Case Study",
    description: "At VividNex, initiative matters. Identify challenges, propose solutions, and take responsibility for delivering results. Ownership drives both personal growth and meaningful impact for the company.",
    image: "https://images.stockcake.com/public/b/5/e/b5e8b748-c1db-416f-af57-d3d05a918c47_medium/neon-tech-nexus-stockcake.jpg",
    link: "/ResearchReportcard"
  },
  {
    subtitle: "Collaborate and build connections",
    title: "Research Report",
    description: "Innovation thrives in connected teams. Engage with colleagues, clients, and partners to share ideas, get feedback, and iterate faster. Diverse perspectives lead to smarter, more robust solutions.",
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