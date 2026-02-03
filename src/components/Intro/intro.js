import React from "react";
import "./intro.css";
import profile from '../../assets/profile.jpg'
import hireme from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Nimrah</span>
          <br />
          Software Engineer
        </span>
        <p className="textDesc">
          I am passionate about frontend development specializing in <br />interactive web applications, 
          game development, and exploring <br />AI/ML with Python. 
          Passionate about creating seamless digital experiences.
        </p>
        <Link>
          <button className="btn">
            <img className="btnImg"src={hireme} alt="hire me" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={profile} alt="background" className="bg" />
    </section>
  );
};

export default Intro;
