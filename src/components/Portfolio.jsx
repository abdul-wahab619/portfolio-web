import aistartup from "../assets/images/3d-startup-app.png";
import instella from "../assets/images/Instella.png";
import aiResumeBuilder from "../assets/images/AI-Resume-Builder.png";
import movieApp from "../assets/images/Movie-app.png";
import learnPath from "../assets/images/learn-path.png";

import aiMedlab from "../assets/images/AI-MedLab.png";
import shoeVista from "../assets/images/shoeVista.png";

const Portfolio = () => {
  return (
    <>
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
        </h2>
      </div>
      <p className="port-text">Here Is Some Of My Professional Work.</p>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="image">
            <img src={learnPath} alt="AI-Powered Learning Path" />
          </div>
          <div className="hover-items">
            <h3>AI-Learning Path </h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/AI-Powered-Personalized-Learning-Roadmap"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://learnpath-ai.netlify.app/" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={aistartup} alt="aistartup" />
          </div>
          <div className="hover-items">
            <h3>3D Startup App</h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/3D-Startup-App"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://aistartupapp.netlify.app/" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={instella} alt="" />
          </div>
          <div className="hover-items">
            <h3>Instella Mobile App</h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/Instella-mobileApp"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://github.com/abdul-wahab619/Instella-mobileApp"
                className="icon"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={movieApp} alt="" />
          </div>
          <div className="hover-items">
            <h3>Movie App</h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/movie-app-appwrite"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://movie-app-appwrite.vercel.app/" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={shoeVista} alt="" />
          </div>
          <div className="hover-items">
            <h3>Shoe Vista</h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/ShoeVista"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://shoe-vista.vercel.app/" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={aiResumeBuilder} alt="AI Resume Builder" />
          </div>
          <div className="hover-items">
            <h3>AI Resume Builder</h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/AI-Resume-Builder"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://github.com/abdul-wahab619/AI-Resume-Builder"
                className="icon"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={aiMedlab} alt="AI MedLab" />
          </div>
          <div className="hover-items">
            <h3>AI MedLab</h3>
            <div className="icons">
              <a
                href="https://github.com/abdul-wahab619/AI-MedLab"
                className="icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://medi-care-plum.vercel.app/" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
