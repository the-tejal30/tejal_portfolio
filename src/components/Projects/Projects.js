
import { Container } from "react-bootstrap";
import { BsController } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import TechGame from "./TechGame";
import Particle from "../Particle";
import SalesPilot from "../../Assets/Projects/SalesPilot.png";
import SVSGold from "../../Assets/Projects/SVSGold.png";
import KBC from "../../Assets/Projects/KBC.png";

const projects = [
  {
    index: "01",
    title: "SalesPilot CRM Application",
    points: [
      "Multi tenant Sales CRM built from scratch with role based access for admins and employees.",
      "JWT authentication, email OTP verification, and a lead scoring pipeline with WhatsApp and email outreach.",
      "Analytics dashboard showing revenue trends, CSV export, team management, and task tracking.",
      "Real time toast notifications across the full application.",
    ],
    imgPath: SalesPilot,
    ghLink: "https://github.com/the-tejal30",
    demoLink: "https://salespilot-crm.vercel.app/",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "OpenAI API", "JWT", "Vercel"],
    featured: true,
  },
  {
    index: "02",
    title: "SVS Gold Trading Platform",
    points: [
      "Gold and silver trading platform with live rate graphs powered by real time price feeds.",
      "Secure admin login panel handling rate updates, user data exports, and mobile data exports.",
      "Automatic Google Sheets sync via App Script with email alerts on every form submission.",
      "Integrated 9 APIs covering real time pricing, form handling, and admin operations.",
    ],
    imgPath: SVSGold,
    demoLink: "https://svsgold.com/",
    techStack: ["React.js", "Tailwind CSS", "Google App Script", "REST APIs"],
    featured: true,
  },
  {
    index: "03",
    title: "Kaun Banega Crorepati",
    points: [
      "Browser based quiz game that mirrors the real KBC show experience.",
      "Features lifelines, timed questions, sound effects, and celebratory animations.",
      "Fully responsive across all devices with a genuine on show feel.",
    ],
    imgPath: KBC,
    ghLink: "https://github.com/the-tejal30/Kaun_Banega_Crorepati",
    demoLink: "https://kaun-banega-crorepati-tejal.vercel.app/",
    techStack: ["React.js", "CSS", "JavaScript"],
    featured: false,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="projects-header">
          <h1 className="project-heading">
            Selected <strong className="purple">Projects</strong>
          </h1>
          <p className="project-subheading">
            Real world products I have designed, built, and shipped.
          </p>
        </div>

        <div className="projects-showcase">
          {projects.map((p) => (
            <ProjectCard key={p.index} {...p} />
          ))}
        </div>

        <div className="game-section-wrapper">
          <div className="game-section-header">
            <h2 className="game-section-title">
              <BsController className="game-title-icon" /> Match My{" "}
              <strong className="purple">Stack</strong>
            </h2>
            <p className="game-section-sub">
              A memory game built with the tech I work with every day. Flip cards to find all pairs.
            </p>
          </div>
          <TechGame />
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
