import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaNewspaper,
} from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

const Controls = ({ active, setActive }) => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsLight(savedTheme === "light");
    document.body.className = savedTheme === "light" ? "light-mode" : "";
  }, []);

  const toggleTheme = () => {
    const newTheme = isLight ? "dark" : "light";
    document.body.className = newTheme === "light" ? "light-mode" : "";
    localStorage.setItem("theme", newTheme);
    setIsLight(!isLight);
  };
  const controls = [
    { id: "home", icon: <FaHome /> },
    { id: "about", icon: <FaUser /> },
    { id: "portfolio", icon: <FaBriefcase /> },
    { id: "blogs", icon: <FaNewspaper /> },
    { id: "contact", icon: <FaEnvelopeOpen /> },
    {
      id: "theme",
      icon: <VscColorMode onClick={toggleTheme} />,
    },
  ];

  return (
    <div className="controls">
      {controls.map((control) => (
        <div
          key={control.id}
          className={`control tooltip-container ${
            control.id !== "theme" && active === control.id ? "active-btn" : ""
          }`}
          onClick={() => {
            if (control.id === "theme") {
              toggleTheme();
            } else {
              setActive(control.id);
            }
          }}
        >
          {control.icon}
          <span className="tooltip-text">
            {control.id.charAt(0).toUpperCase() + control.id.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Controls;
