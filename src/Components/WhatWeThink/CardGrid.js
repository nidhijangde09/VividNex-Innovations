import React from "react";
import { Link } from "react-router-dom";
import "./CardGrid.css";

const cardData = [
  {
    subtitle: "Want to lead the future? Think smarter. Build bolder. Act now.",
    title: "Generative AI Leadership Report",
    description: "Generative AI is rewriting the rules of competition. Forward-thinking companies are taking decisive action today. Are you ready to join them? Step into the future with proven insights and strategies.",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Supply chains are getting smarter. Are you ready to lead?",
    title: "Intelligent Supply Chain Research Report",
    description: "Traditional efficiency models are no longer enough. To stay competitive, supply chains must be intelligent, responsive, and resilient. AI-driven autonomy is shaping the next frontier—are you prepared to embrace it?",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
  },
  {
    subtitle: "Transforming the workplace through synergy between humans, AI, and robotics.",
    title: "Research Report",
    description: "VividNex is collaborating with Wharton to research how human strengths can integrate with AI and robotics, and what this means for people, businesses, and society.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/france"
  },
  {
    subtitle: "Redefining Engagement in the Age of AI",
    title: "Generative AI & Brand Strategy Report",
    description: "As AI evolves, human-centered, AI-enabled engagement becomes critical. The strongest brands will be those that adapt, personalize, and connect at every customer touchpoint.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    subtitle: "Safeguarding the Digital Frontier: Inside the Work of the UK’s National Cyber Security Centre",
    title: "   Case Study",
    description: "The latest phase of its Protective DNS blocks more than 350 million threats each month—strengthening the digital resilience of UK citizens, services, and organizations.",
    image: "https://t3.ftcdn.net/jpg/12/53/26/80/360_F_1253268001_JcEeDW4SB2iLba0o6mCQZAeDjJBwX3SB.jpg",
    link: "/australia"
  },
  {
    subtitle: "Mastering the Art of Dealmaking in the Age of AI",
    title: "AI-Driven M&A Research Report",
    description: "Technology is transforming the M&A landscape—but only firms that move beyond experimentation and apply AI with discipline capture its full potential. Three defining traits set leading acquirers apart and drive outsized returns.",
    image: "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
    link: "/italy"
  },
  {
    subtitle: "Transforming the Future of Payments in the UAE",
    title: "FinTech Case Study",
    description: "Driven by a bold vision for digital innovation, the UAE is revolutionizing its financial services sector and emerging as a leading global FinTech hub.",
    image: "https://images.stockcake.com/public/b/5/e/b5e8b748-c1db-416f-af57-d3d05a918c47_medium/neon-tech-nexus-stockcake.jpg",
    link: "/canada"
  },
  {
    subtitle: "AI and the Future of Strategic Acquisitions",
    title: "Generative AI M&A Insights",
    description: "Firms that leverage AI strategically in M&A unlock greater value. Leading acquirers combine discipline, foresight, and agility to achieve exceptional returns.",
    image: "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
    link: "/italy"
  },
  {
    subtitle: "AI, Identity, and Engagement: Shaping Tomorrow’s Consumer Experience",
    title: "AI-Powered Consumer Insights",
    description: "As AI shifts from tool to trusted partner, brands that foster meaningful, human-centered interactions will define the market leaders of tomorrow.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    subtitle: "Protecting the UK’s Digital Landscape",
    title: "National Cyber Security Centre Case Study",
    description: "With Protective DNS, the UK blocks hundreds of millions of threats each month, fortifying the digital safety of citizens, organizations, and critical services.",
    image: "https://t3.ftcdn.net/jpg/12/53/26/80/360_F_1253268001_JcEeDW4SB2iLba0o6mCQZAeDjJBwX3SB.jpg",
    link: "/australia"
  },
  {
   subtitle: "Driving M&A Excellence in the Age of AI",
   title: "AI-Powered M&A Research",
    description: "The future of dealmaking favors firms that move beyond experimentation. Discipline, insight, and AI-driven strategies define the acquirers who outperform the market.",
    image: "https://i.pinimg.com/736x/62/85/a9/6285a90254a1290db17306587cf434c1.jpg",
    link: "/italy"
  },
  {
    subtitle: "Building True Resilience in an Unpredictable World",
    title: "Resilience & Transformation Report",
    description: "Surface-level stability is not enough. Organizations must shift toward adaptive resilience to navigate volatility and secure long-term growth.",
    image: "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_960_720.jpg",
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
