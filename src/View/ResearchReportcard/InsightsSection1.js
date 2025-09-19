import React from "react";
import "./InsightsSection.css";

const insights = [
  {
    title: "One-off pilots won’t decarbonize industry fast enough",
    description:
      "Heavy industry is falling behind on 2050 climate goals. Companies must shift from isolated projects to a multigenerational, portfolio-driven approach that standardizes components, compounds learnings, and fosters continuous innovation."
  },
  {
    title: "Scaling up unlocks cost efficiencies",
    description:
      "Early low-carbon investments may seem costly, but our research shows they become cost-competitive as organizations embrace continuous learning and operational efficiencies."
  },
  {
    title: "AI drives compounding efficiencies",
    description:
      "AI accelerates projects while preserving institutional knowledge, ensuring every initiative builds on prior insights to deliver sustained cost reductions and smarter outcomes."
  }
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
