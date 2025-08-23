import travel from "../assets/images/TRAVEL.png";
import movies1 from "../assets/images/MOVIES_.png";
import movies2 from "../assets/images/MOVIES2_.png";
import portfolio1 from "../assets/images/PORTFOLIO-.png";
import portfolio2 from "../assets/images/PORTFOLIO..png";
import carRental from "../assets/images/CAR_RENTAL_.png";

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
            <img src={travel} alt="travel" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={movies1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={portfolio1} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={carRental} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={movies2} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src={portfolio2} alt="" />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
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
