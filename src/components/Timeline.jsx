// src/components/Timeline.jsx
import React from "react";

const timelineItems = [
  {
    duration: "Jan 2025 - present",
    title: "Frontend Engineer",
    company: "Appspresso",
  },
  {
    duration: "Nov 2024 - May 2025",
    title: "Associate MERN Stack Engineer",
    company: "DafiLabs",
  },
  {
    duration: "Aug 2024 - Oct 2024",
    title: "Trainee MERN Developer",
    company: "SabaSoft",
  },
  {
    duration: "Sep 2023 - Nov 2023",
    title: "Summer Internship",
    company: "TwinSpider",
  },
  {
    duration: "2020 - 2024",
    title: "Computer Science Degree",
    company: "University of Gujrat",
  },
  { duration: "2013 - 2020", title: "Degree", company: "Higher School" },
];

const Timeline = () => {
  return (
    <>
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">{item.duration}</p>
            <h5>
              {item.title}
              <span> - {item.company}</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quasi vero fugit.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
