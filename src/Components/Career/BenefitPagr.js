import React, { useState } from 'react';
import './BenefitsPage.css';

const descriptions = [
  "You'll join a great place to build your skills and launch your career. From summer internships to innovation-led opportunities, we welcome your curiosity.",
  "You love being on a team and have great communication skills — and you’re ready for hands-on experience to learn while you earn.",
  "You're our future leaders. Bring your skills and passion to work with the latest technology to solve for some of the world's biggest challenges.",
  "You see around corners and create solutions. Join our global innovators to help transform industries and change the world for the better.",
  "You see endless possibilities and embrace challenges—and change. See how to use your ingenuity and expertise here."
];

const images = [
  "student.jpg",
  "apprenticship.avif",
  "carrer.jpg",
  "experienced professionals.png",
  "execative-leader.jpg"
];

const BenefitsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <div className="section1">
        <div className="image-container">
          <img src="work from home.jpg" alt="Delivery Workers" />
        </div>
        <div className="text-container">
          <h2>Benefits for the whole you</h2>
          <p>
            We offer benefits that support your well-being both at work and at home to help you achieve your personal and professional aspirations.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="left">
          <h1>Wherever you are in your career</h1>
          <ul>
            {["Students", "Apprenticeships", "Early career professionals", "Experienced professionals", "Executive leaders"].map((item, index) => (
              <li
                key={index}
                onMouseOver={() => setSelectedIndex(index)}
                style={{ color: selectedIndex === index ? "white" : "gray" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="right">
          <p>{descriptions[selectedIndex]}</p>
          <img src={images[selectedIndex]} alt="Career Stage" />
        </div>
      </div>

      <h1 className="y-t-o">Your time off</h1>

      <div className="section">
        <div className="block">
          <img src="orgainzation (1).png" alt="Join Icon" />
          <h3>Paid time off (PTO)</h3>
          <p>You’ll be eligible for Paid time off (PTO) each year based on the state you are working in. PTO includes earned leave, sick leave & casual leave.</p>
        </div>
        <div className="block">
          <img src="eye.png" alt="Touch Icon" />
          <h3>Public Holidays</h3>
          <p>You are entitled to ten public holidays in a calendar year that comprises eight fixed holidays and two floating holidays.</p>
        </div>
      </div>

      <p className="main-hedding"><b>Your mental well-being</b></p>
      <p className="sub-heading">You don't leave any part of yourself behind when you login. We offer support for the whole of you.</p>

      <div className="row">
        <div className="column">
          <img src="EPA.jpg" alt="Employee Assistance Program" />
          <div className="title">Employee Assistance Program (EAP)</div>
          <div className="desc">Confidential, professional guidance for challenges that may arise including anxiety, depression, grief, relationship challenges, or legal and financial concerns.</div>
        </div>

        <div className="column">
          <img src="apps $ tools.jpg" alt="Apps and tools" />
          <div className="title">Apps and tools</div>
          <div className="desc">A variety of apps and tools to help reduce stress or improve sleep, better manage your personal finances and get caregiving support. Based on your interests, you can access courses to help you build new habits and increase resilience, well-being and belonging. You’ll also have access to an online resource where you can get advice from a private, anonymous, and clinically safe 24/7 confidential chatbot.</div>
        </div>
      </div>

      <div className="photos">
        <img className="photo22" src="hand.avif" alt="Mental Health Ally Network" />
        <div className="title">Mental Health Ally Network</div>
        <div className="desc">Around the world, we’re here for each other. Talk with someone from our trained network of Accenture people.</div>
      </div>

      <div className="H-W-P">
        <h1>Your family’s well-being</h1>
        <p>Families come in all shapes and sizes. Whether your family grows or <br />your caregiving role changes, we're here to support you.</p>
      </div>

      <p className="head1"><b>Your physical well-being</b></p>
      <p className="head2">Feel your best at home and work and get the coverage<br />that’s best for you and your family.</p>

      <div className="photo-row">
        <div className="photo-card">
          <img src="cetiscope.avif" alt="Medical coverage" />
          <div className="photo-text">Medical coverage</div>
          <p>You’ll have a choice of national plans (PPO, EPO, HDHP)—and a variety of providers—to cover a wide range of medical services and prescription drugs.</p>
        </div>
        <div className="photo-card">
          <img src="vision insourance.jpg" alt="Vision insurance" />
          <div className="photo-text">Vision insurance</div>
          <p>You’ll have access to a vision care plan.</p>
        </div>
        <div className="photo-card">
          <img src="braces.jpg" alt="Dental insurance" />
          <div className="photo-text">Dental insurance</div>
          <p>You can choose either a dental PPO or dental maintenance organization (DMO) plan. </p>
        </div>
      </div>

      <p className="m-w-b-p">More well-being perks</p>
      <p className="m-w-b-p2">You also have access to additional resources designed to save you time and money<br /> and support your overall well-being.</p>

      <p className="your-growth">Your growth</p>

      <div className="section1">
        <div className="image-container">
          <img src="your-growth.jpg" alt="Your Growth" />
        </div>
        <div className="text-container">
          <h2 className="sub-head">Learning and development</h2>
          <p>
            We invest more than $1 billion each year in continuous learning and professional development programs. Depending on your roles and goals, you’ll get access to specialized certifications, deep-tech training, workshops, online games, hackathons, virtual reality experiences and more.
          </p>
          <p>Learn More <button className="button">{'>'}</button></p>
        </div>
      </div>

      <div className="section9">
        <div className="block9">
          <img src="orgainzation (1).png" alt="Join Icon" />
          <h3>Join us</h3>
          <p>Explore open roles that match your interests and skills.</p>
          <a href="#">Search jobs {'>'}</a>
        </div>
        <div className="block9">
          <img src="eye.png" alt="Stay in touch Icon" />
          <h3>Stay in touch</h3>
          <p>Get career tips and industry-leading insights.</p>
          <a href="#">Learn more {'>'}</a>
        </div>
        <div className="block9">
          <img src="connection (1).png" alt="Get job alerts Icon" />
          <h3>Get job alerts</h3>
          <p>Receive notifications when we have open roles and get other relevant career news.</p>
          <a href="#">Register for job alerts {'>'}</a>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
