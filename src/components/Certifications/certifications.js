import React from "react";
import "./certifications.css";

const certifications = () => {
  return (
    <section id="certifications" className="certSection">
      <h2 className="certTitle">Certifications</h2>
      <div className="certContent">
        <div className="certItem">
          <h3>📜 Full-Stack Web Development</h3>
          <p>Coursera – 2023</p>
        </div>
        <div className="certItem">
          <h3>🤖 Machine Learning</h3>
          <p>Udemy – 2022</p>
        </div>
        <div className="certItem">
          <h3>☁️ Cloud Practitioner</h3>
          <p>AWS – 2021</p>
        </div>
      </div>
    </section>
  );
};

export default certifications;
