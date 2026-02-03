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
  { image: Portfolio1, desc: 'Netflix Clone' },
  { image: Portfolio2, desc: 'Temple Website Contact Form' },
  { image: Portfolio3, desc: 'Amazon Clone' },
  { image: Portfolio4, desc: 'Space Shooter Game in python' },
  { image: Portfolio5, desc: '2D Game in Unity' },
  { image: Portfolio6, desc: 'AI Chat-Bot' },
  // More projects (you can update images and descriptions later)
  { image: Portfolio7, desc: 'WebCraft Solutions' },
  { image: Portfolio8, desc: 'Mobile App' },
  { image: Portfolio9, desc: 'Tic-Tac-Toe Game ' },
  { image: Portfolio10, desc: ' Rock Paaper Scissors Game' },
  { image: Portfolio11, desc: 'Weather App' },
  { image: Portfolio12, desc: 'To-Do List App' }
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
          <div className="workCard" key={index}>
            <img src={proj.image} alt={`Project ${index + 1}`} className="worksimg" />
            <p className="workDesc">{proj.desc}</p>
          </div>
        ))}
      </div>

      {visibleCount < allProjects.length && (
        <button className="seeMore" onClick={handleSeeMore}>See More</button>
      )}
    </section>
  );
};

export default Works;
