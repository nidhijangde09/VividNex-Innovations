import React from "react";
import "./InsightsSection.css";

const insights = [
  {
    title: "One-off pilots won’t decarbonize industry fast enough",
    description:
      "With heavy industry lagging on 2050 climate goals, companies must shift from isolated projects to a multigenerational, portfolio-driven approach that compounds learnings, standardizes and modularizes components and encourages innovation.",
  },
  {
    title: "Scaling up unlocks cost efficiencies",
    description:
      "Our research confirms that early low-carbon investments, though expensive, become cost-competitive as continuous learning and efficiencies take hold.",
  },
  {
    title: "AI drives compounding efficiencies",
    description:
      "Beyond accelerating projects, AI preserves institutional knowledge and ensures every initiative builds on past insights to drive sustained cost reductions.",
  },
];


function InsightsSection1() {
  return (
    <div className="insights-container">
      {insights.map((item, index) => (
        <div key={index} className="insight-item">
          <span className="insight-bullet"></span>
          <p>
            <strong>{item.title}</strong> – {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default InsightsSection1
