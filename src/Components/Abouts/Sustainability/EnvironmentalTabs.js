import React, { useState } from "react";
import "./SustainabilityTabs.css";

const tabsData = [
  {
    key: "climate",
    title: "Carbon capture",
    text: `Our nature-based carbon removal program is designed to remove millions of metric tons of carbon from the atmosphere, supporting our journey toward our SBTi-approved net-zero targets for fiscal 2040. By the end of fiscal 2024, our project portfolio included initiatives in Indonesia, the Philippines, the United Kingdom, and the United States.`,
    img: "https://media.istockphoto.com/id/1954840203/photo/businessman-holding-green-scrap-paper-ball-with-world-map-and-environment-icon-such-as-carbon.jpg?b=1&s=612x612&w=0&k=20&c=RH3KRhXeEnJxEM838wb716lPQlQnUtLW4BDq1_8E5v0=",
  },
  {
    key: "carbonReduction",
    title: "Pathway to Income",
    text: `Passport to Earning, an initiative by UNICEF’s Generation Unlimited, founded globally by VividNex and other partners, has reached 2 million young learners in India. Passport to Earning provides free digital learning opportunities in local languages, helping bridge the educational divide for millions of young people.`,
    img: "https://images.pexels.com/photos/7654133/pexels-photo-7654133.jpeg",
  },
  {
    key: "carbonRemoval",
    title: "Global Child Aid",
    text: `Through the Equip Today to Thrive Tomorrow program, Save the Children has provided young people across five countries with future-ready skills in fiscal 2024. We also support youth through the Youth Leaders for a Sustainable Future initiative, empowering them to access jobs, launch businesses, or pursue higher education. These programs prioritize gender equality, youth-led advocacy, and leverage technology for digital skills development, while promoting innovation and entrepreneurship in the green economy. Together, these initiatives have equipped more than 100,000 young people, as reported in fiscal 2024.`,
    img: "https://media.istockphoto.com/id/1326251444/photo/portrait-of-a-successful-young-man.jpg?b=1&s=612x612&w=0&k=20&c=W7wYgMYXGTgemW_5BMzBtEDHS_7P3kf4JwErLDjS0tk=",
  },
  {
    key: "zeroWaste",
    title: "Youth Leadership Alliance",
    text: `VividNex and World Scouting are partnering to expand educational opportunities for Scouts worldwide, equipping them with leadership, sustainability, and digital skills needed to thrive in today’s fast-paced world and contribute to a more sustainable future. VividNex is supporting the launch of the Impact Innovator Challenge badge, helping young people develop innovation and creative problem-solving skills for life.`,
    img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
  },
  {
    key: "waterRisk",
    title: "PRO-A Initiative",
    text: `We have partnered with the NGO Instituto PRO-A in Brazil to help transform the lives of low-income youth by equipping them with workforce-ready skills. Instituto PRO-A aims to reach 300,000 young people by 2027, and we are supporting this goal by leveraging automation and artificial intelligence to make job placement more efficient.`,
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
 
];


export default function EnvironmentalTabs() {
   const [activeTab, setActiveTab] = useState(tabsData[0]);
  
    return (
      <div className="sustainability-container">
        {/* Tabs */}
        <div className="tabs">
          {tabsData.map((tab) => (
            <span
              key={tab.key}
              className={`tab ${activeTab.key === tab.key ? "active" : ""}`}
              onMouseEnter={() => setActiveTab(tab)}
            >
              {tab.title}
            </span>
          ))}
        </div>
  
        {/* Content */}
        <div className="content">
          <div className="text">
            <p>{activeTab.text}</p>
          </div>
          <div className="image">
            <img src={activeTab.img} alt={activeTab.title} />
          </div>
        </div>
      </div>
    );
  }