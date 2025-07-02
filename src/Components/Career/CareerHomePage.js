import React, { useState, useEffect } from 'react';
import './CareerPage.css';



const descriptions = [
  "You'll join a great place to build your skills and launch your career.",
  "You’re ready for hands-on experience to learn while you earn.",
  "You're our future leaders, ready to innovate and make impact.",
  "Join global innovators to transform industries and the world.",
  "Use your expertise and embrace change at the top level."
];

const images = [
  "student.jpg",
  "apprenticship.avif",
  "carrer.jpg",
  "experienced professionals.png",
  "execative-leader.jpg"
];

const CareerPage = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    const targets = [791, 200, 9000];
    const intervals = targets.map((target, i) =>
      setInterval(() => {
        setCounters(prev => {
          const updated = [...prev];
          if (updated[i] < target) {
            updated[i] = Math.min(target, Math.ceil(updated[i] + target / 100));
          }
          return updated;
        });
      }, 20)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div>
      <div className="navbar">
        <div><strong>Company</strong></div>
        <div>
          <a href="#">Job Search</a>
          <a href="#">Saved Jobs</a>
          <a href="#">Access Application</a>
        </div>
      </div>

      <div className="main-heading"><b>Work at the heart of change</b></div>
      <div className="line">
        <h1>This is a place to grow, learn and connect. Everything that makes you who you are is welcome here.</h1>
      </div>
      <div className="button1">
        <button className="purple-button">Search Open Role</button>
      </div>

      <p className="line1"><b>Whatever you want to do</b></p>
      <p className="line2">Wherever you are in your career</p>

      <div className="container">
        <div className="left">
          <h1>Wherever you are in your career</h1>
          <ul>
            {['Students', 'Apprenticeships', 'Early career professionals', 'Experienced professionals', 'Executive leaders'].map((label, idx) => (
              <li key={idx} onMouseOver={() => setContentIndex(idx)}>{label}</li>
            ))}
          </ul>
        </div>
        <div className="right">
          <p>{descriptions[contentIndex]}</p>
          <img src={images[contentIndex]} alt="career option" />
        </div>
      </div>

      <div>
        <p className="y-b-h"><b>You belong here</b></p>
        <p className="y-b-h-text">
          No two people are the same. By prioritizing six areas of well-being, we foster an inclusive environment—we call this Net Better Off.
        </p>
      </div>

      <div className="row">
        <div className="column">
          <img src="emotional.jpg" alt="Relational" />
          <div className="title">Relational</div>
          <div className="desc">Ensuring a sense of belonging and connection for all</div>
          <p className="link">Explore our culture</p><button className="button">></button>
        </div>
        <div className="column">
          <img src="3girls.webp" alt="Inclusive" />
          <div className="title">Inclusive</div>
          <div className="desc">Celebrating diversity to drive innovation and progress</div>
          <p className="link">Explore our culture</p><button className="button">></button>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <img className="photo22" src="physical2.jpg" alt="Physical" />
          <div className="title">Physical</div>
          <div className="desc">Supporting physical well-being</div>
          <p className="link">Explore our culture</p><button className="button">></button>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <img src="perpously.jpg" alt="Purposeful" />
          <div className="title">Purposeful</div>
          <div className="desc">Doing work that matters to you and to the world</div>
          <p className="link">Explore our culture</p><button className="button">></button>
        </div>
        <div className="column">
          <img src="employable.avif" alt="Employable" />
          <div className="title">Employable</div>
          <div className="desc">Building long-term skills for long-term success</div>
          <p className="link">Explore our culture</p><button className="button">></button>
        </div>
      </div>

      <div className="photos">
        <img className="photo22" src="financial.webp" alt="Financial" />
        <div className="title">Financial</div>
        <div className="desc">Supporting your financial well-being</div>
        <p className="link">Explore our culture</p><button className="button">></button>
      </div>

      <p className="we-are"><b>We are everywhere</b></p>
      <div className="stats">
        <div className="stat-box">
          <div className="value">{counters[0]}K</div>
          <div className="label">Accenture people worldwide</div>
        </div>
        <div className="stat-box">
          <div className="value">{counters[1]}</div>
          <div className="label">Cities with Accenture offices</div>
        </div>
        <div className="stat-box">
          <div className="value">{counters[2]}</div>
          <div className="label">Clients served across 120 countries</div>
        </div>
      </div>

      <p className="stay-c"><b>Stay connected</b></p>
      <div className="section">
        <div className="block">
          <img src="orgainzation (1).png" alt="Join" />
          <h3>Join us</h3>
          <p>Explore open roles that match your interests and skills.</p>
          <a href="#">Search jobs ></a>
        </div>
        <div className="block">
          <img src="eye.png" alt="Touch" />
          <h3>Stay in touch</h3>
          <p>Get career tips and insights.</p>
          <a href="#">Learn more ></a>
        </div>
        <div className="block">
          <img src="connection (1).png" alt="Alert" />
          <h3>Get job alerts</h3>
          <p>Receive alerts for new roles and career news.</p>
          <a href="#">Register for alerts ></a>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
