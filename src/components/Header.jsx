import profileImg from "../assets/images/image.jpg";
import resume from "../assets/AbdulWahab_Resume.pdf";

const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={profileImg} alt="main image" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            I'm <span>Abdul Wahab</span> Full-Stack Web Developer.
          </h1>
          <p>
            Professional Web Developer with 3+ Years of Industrial Experience.
            <br />
            Qualified Bachelors of Technology in Computer Science.
          </p>
          <div className="btn-con">
            <a href={resume} className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
