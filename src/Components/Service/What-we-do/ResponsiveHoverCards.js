import React from 'react';
import './ResponsiveHoverCards.css';
import { Link } from "react-router-dom"; // ✅ Import Link
import AwardsRecognition from '../../Abouts/AwardsRecognition/AwardsRecognition';
const cardData = [
  {
    title: "A Great Place To Work",
    description:
      "We are proud to be ranked No. 6 on the Great Place To Work® World's Best Workplaces™ list, a recognition based on our people’s feedback about trust, pride, and camaraderie at Vividnex.",
    image: "https://media.istockphoto.com/id/1192639016/vector/fashionable-abstract-technological-background-for-design.jpg?s=612x612&w=0&k=20&c=wNGUYeINFyN__XjXBDC2QZxQjiAPJbdlxG5bEJSLD44=",
    direction: "left",
    alignment: "flex-start",
    link: "/AwardsRecognition", // ✅ link
  },
  {
    title: "The Top Consulting Frim",
    description:
      "Ranked among the Top Global Technology Solutions Providers. Vividnex has been recognized for delivering innovative and impactful digital solutions, earning high recommendations from clients and partners across industries worldwide.",
    image: "https://media.istockphoto.com/id/1192639016/vector/fashionable-abstract-technological-background-for-design.jpg?s=612x612&w=0&k=20&c=wNGUYeINFyN__XjXBDC2QZxQjiAPJbdlxG5bEJSLD44=",
    direction: "right",
    alignment: "flex-end",
    link: "/AwardsRecognition", // ✅ added link
  },
  {
    title: "An Influential Innovator",
    description:
      "Virendra Kamble, Founder & CEO of Vividnex, is a visionary leader driving innovation and digital transformation. Under his guidance, Vividnex delivers cutting-edge solutions that empower businesses to adapt and thrive in a rapidly evolving digital world, fostering a culture of collaboration and people-first leadership.",
    image: "https://media.istockphoto.com/id/1192639016/vector/fashionable-abstract-technological-background-for-design.jpg?s=612x612&w=0&k=20&c=wNGUYeINFyN__XjXBDC2QZxQjiAPJbdlxG5bEJSLD44=",
    direction: "left",
    alignment: "flex-start",
    link: "/AwardsRecognition", // ✅ added link
  },
];

const ResponsiveHoverCards = () => {
  return (
    <div className="custom-card-wrapper">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="custom-card-row"
          style={{ justifyContent: card.alignment }}
        >
          {/* ✅ Wrap card with Link */}
          <Link to={card.link || "/Awards"} className="custom-card-link">
            <div className={`custom-card custom-slide-${card.direction}`}>
              <img
                src={card.image}
                alt={card.title}
                className="custom-card-image"
              />
              <h2 className="custom-card-title">{card.title}</h2>
              <div className="custom-card-description">
                <p>{card.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveHoverCards;
