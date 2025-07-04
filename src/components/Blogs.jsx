// src/components/Blogs.jsx
import React from "react";
import carRental from "../assets/images/CAR_RENTAL_.png";
import movies2 from "../assets/images/MOVIES2_.png";
import portfolio1 from "../assets/images/PORTFOLIO-.png";
import travel from "../assets/images/TRAVEL.png";
import movies1 from "../assets/images/MOVIES_.png";
import portfolio2 from "../assets/images/PORTFOLIO..png";

const blogPosts = [
  {
    img: carRental,
    title: "How to Create Your Own Website",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: movies2,
    title: "How to Become an Expert in Web Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: portfolio1,
    title: "Become a Web Designer in 10 Days",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: travel,
    title: "Debugging Made Easy with Web Inspector",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: movies1,
    title: "Get Started with Web Design and UI",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    img: portfolio2,
    title: "What You Need to Know About Web Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
];

const Blogs = () => {
  return (
    <>
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Blogs</span>
            {/* <span className="bg-text">My Blog</span> */}
          </h2>
        </div>
        <div className="blogs">
          <div className="blog">
            <img src={carRental} alt="" />
            <div className="blog-text">
              <h4>How to Create Your Own Website</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={movies2} alt="" />
            <div className="blog-text">
              <h4>How to Become an Expert in Web Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={portfolio1} alt="" />
            <div className="blog-text">
              <h4>Become a Web Designer in 10 Days</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={travel} alt="" />
            <div className="blog-text">
              <h4>Debbuging made easy with Web Inspector</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={movies2} alt="" />
            <div className="blog-text">
              <h4>Get started with Web Design and UI Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
          <div className="blog">
            <img src={portfolio2} alt="" />
            <div className="blog-text">
              <h4>This is what you need to know about Web Design</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus natus voluptas, eos obcaecati recusandae amet?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
