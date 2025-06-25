// NewsSlider.js
import React, { useState, useEffect } from "react";
import "./NewsSlider.css";

const newsItems = [
  {
    date: "January 07, 2025",
    title: "Vividnex Technology Vision 2025: New Age of AI to Bring Unprecedented Autonomy to Business",
  },
  {
    date: "March 18, 2025",
    title: "Vividnex Launches AI-Powered Developer Tools to Revolutionize Web Projects",
  },
  {
    date: "April 12, 2025",
    title: "Empowering Enterprises with Cloud and Automation for Digital Transformation",
  },
  {
    date: "May 22, 2025",
    title: "Sustainable Innovation: Vividnex’s Green Tech Solutions Take the Lead",
  },
  {
    date: "June 10, 2025",
    title: "Cybersecurity Next: How Vividnex is Securing the Future of Digital",
  },
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) next();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="news-slider">
      <h2 className="news-heading">Vividnex News</h2>
      <div className="news-content">
        <div className="news-date">{newsItems[currentIndex].date}</div>
        <div className="news-title">{newsItems[currentIndex].title}</div>
      </div>
      <div className="news-controls">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};

export default NewsSlider;
