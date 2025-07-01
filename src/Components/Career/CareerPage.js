import React from 'react';
import "./CareerPage.css";
import girlCoffee from '../../assets/images/girl_with_coffee.jpg'
import sustainability from '../../assets/images/sustainability.jpg';
import inclusion from '../../assets/images/inclusion_diversity.jpg';
import ai from '../../assets/images/responsible_ai.jpg';
import meeting from '../../assets/images/meeting.jpg';
import alertIcon from '../../assets/images/orgainzation.jpg';
import eyeIcon from '../../assets/images/eye.jpg';
import joinIcon from '../../assets/images/connection.jpg';


const CareerPage = () => {
  return (
    <div>
      <div className="section">
        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Work" />
        <div className="text-content">
          <h1>Grow with Purpose. <br />Build Your Expertise.</h1>
          <p>
            Join us and work at the heart of change. Innovate, collaborate, and make meaningful connections.
            Create lasting value and reinvent with our clients.
          </p>
        </div>
      </div>

      <div>
        <p className="work-wr">Work with reach</p>
        <p className="textafter">
          Accenture is big. Really big. When you join us, you’ll work with the top<br />
          companies with leaders from every industry.
        </p>
        <p className="threeline">
          From our I&D actions to our ethical<br /> approach to business, Accenture is<br /> recognized around the world.
        </p>
      </div>

      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className={`card-front ${card.color}`}>{card.front}</div>
              <div className={`card-back ${card.color}`}>{card.back}</div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="w-w-p"><b>Work with purpose</b></p>
        <p className="b-p-cre">
          Be part of creating positive change and making the world better for our people,<br />
          our clients, and the communities where we live and work.
        </p>
        <p className="v-a-c">View all communities <button className="button0">&gt;</button></p>
      </div>

      <div className="photo-row">
        <PhotoCard img={sustainability} title="Sustainability" description="We embed sustainability..." />
        <PhotoCard img={inclusion} title="Inclusion & Diversity" description="We actively hire and develop..." />
        <PhotoCard img={ai} title="Responsible AI" description="Powerful AI tools like generative AI..." />
      </div>

      <div>
        <p className="b-ynb">Become your next best self</p>
        <p className="b-ynb2">
          We value continuous learning and curiosity because <br />
          there’s always more to know, from new technologies to<br />
          skills that you’ll need as your career advances.
        </p>
      </div>

      <div className="section">
        <img src={girlCoffee} alt="Work with Coffee" />
        <div className="text-content1">
          <h1>Grow with Purpose</h1>
          <p>Whether this is your first full-time role or you're joining us as an executive, there’s space to grow.</p>
          <p>Learn More <button className="button0">&gt;</button></p>
        </div>
      </div>

      <div className="container222">
        <div className="text-section222">
          <h2>Keep learning</h2>
          <p>
            Continuous learning is essential for growth. That's why we invest $1B annually in learning and development.
          </p>
          <a href="#">Read more <button className="button0">&gt;</button></a>
        </div>
        <div className="image-section222">
          <img src={meeting} alt="Meeting" />
        </div>
      </div>

      <div className="section333">
        <InfoBlock img={joinIcon} title="Join us" text="Explore open roles..." link="Search jobs >" />
        <InfoBlock img={eyeIcon} title="Stay in touch" text="Get career tips..." link="Learn more >" />
        <InfoBlock img={alertIcon} title="Get job alerts" text="Receive notifications..." link="Register >" />
      </div>
    </div>
  );
};

const PhotoCard = ({ img, title, description }) => (
  <div className="photo-card">
    <img src={img} alt={title} />
    <div className="photo-text">{title}</div>
    <p>{description}</p>
  </div>
);

const InfoBlock = ({ img, title, text, link }) => (
  <div className="block">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
    <a href="#">{link}</a>
  </div>
);

const cardData = [
  {
    color: 'red',
    front: 'We’re proud to be a great place to work.',
    back: 'One of the World’s Best Workplaces™—top 10 in 10 countries.'
  },
  {
    color: 'blue',
    front: 'Inclusion is core to everything we do.',
    back: 'One of the World’s Best Workplaces™—top 10 in 10 countries.'
  },
  {
    color: 'lightblue',
    front: 'Diversity fuels creativity.',
    back: 'JUST Capital: #1 in our industry for leadership on key issues.'
  },
  {
    color: 'darkpurple',
    front: 'Built with purpose from day one.',
    back: 'Top 50 companies for diversity in the U.S.'
  },
  {
    color: 'purple',
    front: 'Sustainability embedded from the start.',
    back: 'Fortune World’s Most Admired Companies.'
  },
  {
    color: 'darkred',
    front: 'A sustainable tomorrow.',
    back: 'CDP Climate A List – 7 years running.'
  }
];

export default CareerPage;
