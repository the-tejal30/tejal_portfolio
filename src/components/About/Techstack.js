import React from "react";
import { DiJavascript1, DiReact, DiGit, DiNodejs } from "react-icons/di";
import {
  SiTypescript, SiNextdotjs, SiAstro,
  SiTailwindcss, SiSass, SiBootstrap, SiAntdesign, SiMui,
  SiRedux, SiGraphql,
  SiJest, SiVite, SiDocker, SiVercel, SiWebpack, SiJira,
  SiVisualstudiocode, SiPostman, SiFirebase, SiRender, SiClickup,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skillCategories = [
  {
    label: "Languages & Frameworks",
    color: "#c770f0",
    skills: [
      { icon: <DiJavascript1 />, name: "JavaScript" },
      { icon: <SiTypescript />,  name: "TypeScript" },
      { icon: <DiReact />,       name: "React.js" },
      { icon: <SiNextdotjs />,   name: "Next.js" },
      { icon: <SiAstro />,       name: "Astro" },
    ],
  },
  {
    label: "UI & Styling",
    color: "#a855f7",
    skills: [
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiSass />,        name: "SCSS" },
      { icon: <SiBootstrap />,   name: "Bootstrap" },
      { icon: <SiAntdesign />,   name: "Ant Design" },
      { icon: <SiMui />,         name: "Material UI" },
    ],
  },
  {
    label: "State & APIs",
    color: "#8b5cf6",
    skills: [
      { icon: <SiRedux />,   name: "Redux" },
      { icon: <DiReact />,   name: "Context API" },
      { icon: <SiGraphql />, name: "GraphQL" },
      { icon: <DiNodejs />,  name: "REST APIs" },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "#7c3aed",
    skills: [
      { icon: <DiGit />,               name: "Git" },
      { icon: <SiVisualstudiocode />,   name: "VS Code" },
      { icon: <SiPostman />,            name: "Postman" },
      { icon: <SiVite />,               name: "Vite" },
      { icon: <SiWebpack />,            name: "Webpack" },
      { icon: <SiDocker />,             name: "Docker" },
      { icon: <SiVercel />,             name: "Vercel" },
      { icon: <SiRender />,             name: "Render" },
      { icon: <SiFirebase />,           name: "Firebase" },
      { icon: <FaAws />,                name: "AWS" },
      { icon: <SiJira />,               name: "Jira" },
      { icon: <SiClickup />,            name: "ClickUp" },
      { icon: <SiJest />,               name: "Jest" },
    ],
  },
];

function Techstack() {
  return (
    <div className="skill-categories">
      {skillCategories.map((category) => (
        <div key={category.label} className="skill-category">
          <h3 className="skill-category-label" style={{ color: category.color }}>
            {category.label}
          </h3>
          <div className="skill-category-grid">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-pill">
                <span className="skill-pill-icon">{skill.icon}</span>
                <span className="skill-pill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
