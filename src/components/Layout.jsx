import { useState } from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Controls from "./Controls";
import ThemeToggle from "./ThemeToggle";
import "../App.css";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Header />;
      case "about":
        return (
          <section className="container about active">
            <About />
          </section>
        );
      case "portfolio":
        return (
          <section className="container portfolio active">
            <Portfolio />
          </section>
        );
      case "blogs":
        return (
          <section className="container active">
            <Blogs />
          </section>
        );
      case "contact":
        return (
          <section className="container contact active">
            <Contact />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="main-content"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <main>{renderSection()}</main>
      <ThemeToggle />
      <Controls active={activeSection} setActive={setActiveSection} />
    </div>
  );
};

export default Layout;
