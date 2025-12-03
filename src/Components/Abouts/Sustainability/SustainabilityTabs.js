import React, { useState } from "react";
import "./SustainabilityTabs.css";

const tabsData = [
  {
    key: "climate",
    title: "Global Warming Reduction",
    text: `We are actively advancing toward our 2025 carbon removal goal by first reducing emissions across Scope 1, 2, and 3, and then addressing any remaining emissions through nature-based carbon removal projects.

As a signatory to the UN Global Compact Business Ambition for 1.5°C Pledge, we are committed to helping limit global warming to below 1.5°C, in alignment with the Paris Agreement and the guidance of the Science Based Targets initiative (SBTi).

In 2018, we set a near-term 2025 emissions reduction target with SBTi, which we have since exceeded. In fiscal 2024, we received SBTi approval for our net-zero GHG emissions targets under the Corporate Net-Zero Standard, including updated 2030 near-term and 2040 long-term reduction targets.`,
    img: "https://media.istockphoto.com/id/2185887801/photo/businessman-analyze-investment-sustainability-esg-icons-esg-environmental-protection-concept.jpg?b=1&s=612x612&w=0&k=20&c=bZVWpkNL_13w57ajF4-gyXi8TAFnl_gWBF3mqyJmm_E=",
  },
  {
    key: "carbonReduction",
    title: "Carbon Capture",
    text: `Our approach to carbon reduction in support of our goals includes:

Maintaining 100% renewable electricity. In 2023, we reached our goal of sourcing 100% renewable electricity for our facilities, and we continued this achievement throughout fiscal 2024.

Enabling low-carbon business travel. We leverage technology to support more cost- and carbon-efficient delivery for our clients and operations. Additionally, we have implemented an internal carbon price on travel to encourage climate-smart travel decisions.

Engaging our suppliers. We work closely with our suppliers to reduce Scope 3 emissions. Our target is for 90% of key suppliers to disclose their environmental goals and the actions they are taking to reduce emissions by the end of 2025. We are on track, with 89% of key suppliers disclosing their targets and 96% reporting their emission-reduction actions. Key suppliers are defined as vendors representing a significant portion of our 2019 Scope 3 emissions.`,
    img: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
  },
  {
    key: "carbonRemoval",
    title: "Carbon removal",
    text: `To address our remaining emissions, we are investing in nature-based carbon removal projects that extract carbon from the atmosphere. We plan to start applying carbon removal credits in fiscal 2025, in alignment with our carbon removal goal.`,
    img: "https://media.istockphoto.com/id/2019990812/photo/diversity-team-discussion-focused-on-esg-for-net-zero-goals-in-a-sustainable-green-office.jpg?b=1&s=612x612&w=0&k=20&c=IcKyxRwKCQXYQble_FByAivyO9pb0tbM-rYyX6lbg_s=",
  },
  {
    key: "zeroWaste",
    title: "Circular Economy",
    text: `Our approach to moving toward zero waste in support of our goals includes:

Addressing e-waste and office furniture. We aim to reuse or recycle 100% of our electronic waste—including computers, servers, and uninterruptible power supply devices—as well as all office furniture by the end of 2025. In fiscal 2024, we successfully reused or recycled nearly 100% of our e-waste. We continue to refine our processes, leverage our asset tracking system, and collaborate with vendors to extend the life cycle of our furniture through refurbishment, reuse, or recycling.

Eliminating single-use plastics in our facilities. In 2023, we achieved our goal of removing single-use plastics—such as straws, plates, bowls, cutlery, cups, lids, stirrers, bottles, and to-go containers—from our facilities by adopting reusable and plastic-free alternatives. We maintained this achievement throughout fiscal 2024.`,
    img: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
  },
  {
    key: "waterRisk",
    title: "Water Sustainability",
    text: `Although Accenture is not a water-intensive company, we are proactively developing water resiliency action plans to protect our people and operations from the impacts of climate-related flooding, drought, and water scarcity in high-risk areas. To date, we have completed plans for approximately 90% of our facilities in these locations.`,
    img: "https://images.pexels.com/photos/34014518/pexels-photo-34014518.jpeg",
  },
  {
    key: "cleanAir",
    title: "Clean Air Partnership",
    text: `VividNex is a founding member of the Alliance for Clean Air, launched by the World Economic Forum and the Clean Air Fund at the 26th Conference of the Parties to the United Nations Framework Convention on Climate Change (COP26).

Air pollutants and greenhouse gases (GHGs) often originate from the same sources, such as fuel combustion, creating a natural synergy between actions to reduce GHG emissions and air pollutants.

Our most significant direct contribution to air pollution comes from our company vehicles. These impacts are summarized in the table below. Historical and current environmental statements may rely on evolving measurement standards, and assumptions are subject to future updates.`,
    img: "https://media.istockphoto.com/id/2220160468/photo/managers-collaborating-on-sustainable-business-strategies-in-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=z1xdZvfEhBLIQF0jJvIw9euNi01Mp6bavfoGVGf3Ul8=",
  },
];

export default function SustainabilityTabs() {
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
