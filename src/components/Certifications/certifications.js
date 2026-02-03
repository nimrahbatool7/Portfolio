import React, { useState } from "react";
import "./certifications.css";

import CourseraBadge from "../../assets/certifications/Coursera Badge.pdf";
import EthicalHacking from "../../assets/certifications/ethical hacking.pdf";
import IntroToAI from "../../assets/certifications/introToAI.pdf";
import IotCert from "../../assets/certifications/iot.pdf";
import PythonDataScience from "../../assets/certifications/pythonForDataScience.pdf";
import WebDevReact from "../../assets/certifications/webDevInReact.pdf";

const certifications = [
  {
    title: "Full-Stack Web Development",
    org: "Coursera",
    date: "2023",
    icon: "📜",
    file: CourseraBadge
  },
  {
    title: "Machine Learning",
    org: "Udemy",
    date: "2022",
    icon: "🤖",
    file: IntroToAI
  },
  {
    title: "Cloud Practitioner",
    org: "AWS",
    date: "2021",
    icon: "☁️",
    file: IotCert
  },
  {
    title: "React Native Mobile Apps",
    org: "Meta",
    date: "2024",
    icon: "📱",
    file: WebDevReact
  },
  {
    title: "UI/UX Design Foundations",
    org: "Google",
    date: "2023",
    icon: "🎨",
    file: PythonDataScience
  },
  {
    title: "JavaScript Algorithms",
    org: "freeCodeCamp",
    date: "2022",
    icon: "🧠",
    file: EthicalHacking
  }
];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  const handleOpen = (cert) => {
    setActiveCert(cert);
  };

  const handleClose = () => {
    setActiveCert(null);
  };

  return (
    <section id="certifications" className="certSection">
      <h2 className="certTitle">Certifications</h2>
      <div className="certGrid">
        {certifications.map((cert, index) => (
          <button
            className="certCard"
            key={`${cert.title}-${index}`}
            type="button"
            onClick={() => handleOpen(cert)}
            aria-label={`Open ${cert.title} certification`}
          >
            <div className="certIcon" aria-hidden="true">
              {cert.icon}
            </div>
            <div className="certText">
              <h3 className="certName">{cert.title}</h3>
              <p className="certOrg">
                {cert.org}
                {cert.date ? ` • ${cert.date}` : ""}
              </p>
            </div>
          </button>
        ))}
      </div>

      {activeCert && (
        <div className="certModalOverlay" role="dialog" aria-modal="true">
          <div className="certModal" onClick={(event) => event.stopPropagation()}>
            <button
              className="certModalClose"
              type="button"
              onClick={handleClose}
              aria-label="Close certification preview"
            >
              ×
            </button>
            <div className="certModalTitle">
              {activeCert.title}
            </div>
            <iframe
              className="certModalFrame"
              src={activeCert.file}
              title={activeCert.title}
            />
          </div>
          <button
            className="certModalBackdrop"
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
