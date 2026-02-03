import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section id="education" className="eduSection">
      <h2 className="eduTitle">Education</h2>
      <div className="eduTimeline">
        <div className="eduItem">
          <h3>Bachelor of Computer Science</h3>
          <p>XYZ University | 2019 – 2023</p>
        </div>
        <div className="eduItem">
          <h3>High School</h3>
          <p>ABC School | 2017 – 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
