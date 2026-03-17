import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiClickup,
  SiDocker,
  SiRender,
  SiFirebase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiRender />, name: "Render" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiClickup />, name: "ClickUp" },
];

function Toolstack() {
  return (
    <div className="skill-category-grid" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <div key={tool.name} className="skill-pill">
          <span className="skill-pill-icon">{tool.icon}</span>
          <span className="skill-pill-name">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
