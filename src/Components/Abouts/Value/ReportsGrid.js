import React from "react";
import "./ReportsGrid.css";

const reports = [
  {
    title: "Bloomberg Gender Equality Index",
    img: "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg",
    size: "tall",
  },
  {
    title: "360° VALUE REPORT – Delivering value from every angle",
    img: "https://images.pexels.com/photos/33678100/pexels-photo-33678100.jpeg",
    size: "tall",
  },
  {
    title: "Performance Data Table",
    img: "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg",
    size: "tall",
  },
  {
    title: "Annual Report – Value from every angle",
    img: "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg",
    size: "small",
  },
  {
    title: "Environmental and ESG Metrics",
    img: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg",
    size: "tall",
  },
  {
    title: "Proxy Statement and notice of Annual meeting",
    img: "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg",
    size: "small",
  },
];

const ReportsGrid = () => {
  return (
    <div className="reports-container">
      <div className="reports-grid">
        {reports.map((report, index) => (
          <div className={`report-card ${report.size}`} key={index}>
            <img src={report.img} alt={report.title} />
            <div className="report-overlay">
              <h3>{report.title}</h3>
              <a href="#">
                {report.title} <span className="arrow">›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsGrid;
