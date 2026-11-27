import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiClickup,
  SiRender,
  SiFirebase,
  SiMicrosoftazure,
  SiGoogletagmanager,
  SiPosthog,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiRender />, name: "Render" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiMicrosoftazure />, name: "Azure" },
  { icon: <SiClickup />, name: "ClickUp" },
  { icon: <SiGoogletagmanager />, name: "Google Tag Manager" },
  { icon: <SiPosthog />, name: "PostHog" },
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
