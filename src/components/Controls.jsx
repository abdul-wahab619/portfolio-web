// src/components/Controls.jsx
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaNewspaper,
} from "react-icons/fa";

const Controls = ({ active, setActive }) => {
  const controls = [
    { id: "home", icon: <FaHome /> },
    { id: "about", icon: <FaUser /> },
    { id: "portfolio", icon: <FaBriefcase /> },
    { id: "blogs", icon: <FaNewspaper /> },
    { id: "contact", icon: <FaEnvelopeOpen /> },
  ];

  return (
    <div className="controls">
      {controls.map((control) => (
        <div
          key={control.id}
          className={`control ${active === control.id ? "active-btn" : ""}`}
          onClick={() => setActive(control.id)}
        >
          {control.icon}
        </div>
      ))}
    </div>
  );
};

export default Controls;
