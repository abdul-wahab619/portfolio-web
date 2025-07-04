// src/components/Contact.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserGraduate,
  FaPhone,
  FaGlobeAfrica,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            {/* <span className="bg-text">Contact</span> */}
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>Lahore, Pakistan</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>abdulwahab.sengineer@gmail.com</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>
                  <span>University of Gujrat</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span>03093573172</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span>English, Urdu & Punjabi</span>
                </p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a
                  href="https://www.linkedin.com/in/abdul-wahab-aw/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="http://x.com/mrabdulwahabaw/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/abdul-wahab619/" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.youtube.com/@abdul-wahab-aw"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <form action="" className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="NAME" />
                <input type="email" required placeholder="EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="SUBJECT" />
              </div>
              <div className="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="MESSAGE HERE..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <a href="#" className="main-btn">
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
