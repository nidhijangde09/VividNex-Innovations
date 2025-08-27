import React from "react";
import "./WorkConnections.css";

const WorkConnections = () => {
  const items = [
    {
      img: "https://source.unsplash.com/400x300/?laptop,work", // replace with your real image
      title: "Make work work for you",
      desc: "Flexible work arrangements can be formal (which may be part of your contract) or informal (which you'll arrange with your lead)."
    },
    {
      img: "",
      title: "Form connections in real life",
      desc: "Your relationship with your local team and community are part of what makes working here special. Our people experience in-person collaboration (ranging in frequency from daily to quarterly) to learn, share knowledge, and build connections with clients, colleagues and leaders."
    },
    {
      img: "",
      title: "Be present with clients",
      desc: "If you're in a client-facing role, you'll connect with your client at least three days a week—either in person or virtually. Depending on the nature of your work and the client relationship, this will vary."
    }
  ];

  return (
    <div className="workconnections-container">
      {items.map((item, index) => (
        <div
          className={`workconnections-item ${
            index % 2 === 0 ? "left" : "right"
          }`}
          key={index}
        >
          <img src={item.img} alt={item.title} className="workconnections-img" />
          <div className="workconnections-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkConnections;
