import React from "react";

const About = () => {
  return (
    <>
      <div className="main-title">
        <h2>
          About <span>me</span>
          {/* <span className="bg-text">my skill</span> */}
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>What I Do</h4>
          <p>
            I'm a Full-Stack Web Developer specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js) with hands-on experience in
            building modern, responsive web applications. Proficient in HTML,
            CSS, JavaScript, TypeScript, React.js, Next.js, and backend
            technologies like Node.js and Express.js.
          </p>
          <div className="btn-con">
            <a href="#" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="right-about">
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">500+</p>
              <p className="small-text">
                Projects <br />
                Completed
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">3+</p>
              <p className="small-text">
                Years of <br />
                experience
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">100+</p>
              <p className="small-text">
                Happy <br />
                Clients
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">80+</p>
              <p className="small-text">
                Customer <br />
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          <div className="progress-bar">
            <p className="prog-title">html5</p>
            <div className="progress-con">
              <p className="prog-text">95%</p>
              <div className="progress">
                <span className="html"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">css3</p>
            <div className="progress-con">
              <p className="prog-text">95%</p>
              <div className="progress">
                <span className="css"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">javascript</p>
            <div className="progress-con">
              <p className="prog-text">90%</p>
              <div className="progress">
                <span className="js"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">ReactJS</p>
            <div className="progress-con">
              <p className="prog-text">90%</p>
              <div className="progress">
                <span className="react"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">NodeJS</p>
            <div className="progress-con">
              <p className="prog-text">90%</p>
              <div className="progress">
                <span className="node"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">Python</p>
            <div className="progress-con">
              <p className="prog-text">80%</p>
              <div className="progress">
                <span className="python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Jan 2025 - present</p>
          <h5>
            Frontend Engineer<span> - Appspresso</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Nov 2024 - May 2025</p>
          <h5>
            Associate MERN Stack Engineer<span> - DafiLabs</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Aug 2024 - Oct 2024</p>
          <h5>
            Trainee MERN Developer<span> - SabaSoft</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Sep 2023 - Nov 2023</p>
          <h5>
            Summer Internship<span> - TwinSpider</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2020 - 2024</p>
          <h5>
            Computer Science Degree<span> - University of Gujrat</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2013 - 2020</p>
          <h5>
            Degree<span> - Higher School</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi
            vero fugit.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
