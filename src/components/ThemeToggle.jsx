// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import { FaAdjust } from "react-icons/fa";

const ThemeToggle = () => {
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

  return (
    <div className="theme-btn" onClick={toggleTheme}>
      <FaAdjust />
    </div>
  );
};

export default ThemeToggle;
