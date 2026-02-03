import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/project_images/portfolio-1.png';
import Portfolio2 from '../../assets/project_images/portfolio-2.png';
import Portfolio3 from '../../assets/project_images/portfolio-3.png';
import Portfolio4 from '../../assets/project_images/portfolio-4.png';
import Portfolio5 from '../../assets/project_images/portfolio-4.png'; // or correct it
import Portfolio6 from '../../assets/project_images/portfolio-4.png'; // or correct it
import Portfolio7 from '../../assets/project_images/portfolio-7.png';
import Portfolio8 from '../../assets/project_images/Portfolio8.png';
import Portfolio9 from '../../assets/project_images/Portfolio9.png';
import Portfolio10 from '../../assets/project_images/Portfolio10.png';
import Portfolio11 from '../../assets/project_images/Portfolio11.png';
import Portfolio12 from '../../assets/project_images/Portfolio12.png';

const allProjects = [
  { image: Portfolio1, desc: 'Netflix Clone', link: 'https://github.com/your-username/netflix-clone' },
  { image: Portfolio2, desc: 'Temple Website Contact Form', link: 'https://github.com/your-username/temple-contact-form' },
  { image: Portfolio3, desc: 'Amazon Clone', link: 'https://github.com/your-username/amazon-clone' },
  { image: Portfolio4, desc: 'Space Shooter Game in python', link: 'https://github.com/your-username/space-shooter' },
  { image: Portfolio5, desc: '2D Game in Unity', link: 'https://github.com/your-username/unity-2d-game' },
  { image: Portfolio6, desc: 'AI Chat-Bot', link: 'https://github.com/your-username/ai-chat-bot' },
  // More projects (you can update images and descriptions later)
  { image: Portfolio7, desc: 'WebCraft Solutions', link: 'https://github.com/your-username/webcraft-solutions' },
  { image: Portfolio8, desc: 'Mobile App', link: 'https://github.com/your-username/mobile-app' },
  { image: Portfolio9, desc: 'Tic-Tac-Toe Game', link: 'https://github.com/your-username/tic-tac-toe' },
  { image: Portfolio10, desc: 'Rock Paper Scissors Game', link: 'https://github.com/your-username/rock-paper-scissors' },
  { image: Portfolio11, desc: 'Weather App', link: 'https://github.com/your-username/weather-app' },
  { image: Portfolio12, desc: 'To-Do List App', link: 'https://github.com/your-username/todo-list' }
];

const Works = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="works">
      <h2 className="workHeading">My Portfolio</h2>
      <p className="worksPara">Here are some projects I’ve worked on recently.</p>

      <div className="worksImages">
        {allProjects.slice(0, visibleCount).map((proj, index) => (
          <a
            className="workCard"
            key={index}
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${proj.desc} (opens in a new tab)`}
          >
            <img src={proj.image} alt={proj.desc} className="worksimg" />
            <p className="workDesc">{proj.desc}</p>
          </a>
        ))}
      </div>

      {visibleCount < allProjects.length && (
        <button className="seeMore" onClick={handleSeeMore}>See More</button>
      )}
    </section>
  );
};

export default Works;
