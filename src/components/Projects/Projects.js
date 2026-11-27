
import { Container } from "react-bootstrap";
import { BsController } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import TechGame from "./TechGame";
import Particle from "../Particle";
import SalesPilot from "../../Assets/Projects/SalesPilot.webp";

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
    ghLink: "https://github.com/the-tejal30/CRM",
    demoLink: "https://salespilot-crm.vercel.app/",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "OpenAI API", "JWT", "Vercel"],
    featured: true,
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
