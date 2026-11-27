
import { Container } from "react-bootstrap";
import { BsController } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import TechGame from "./TechGame";
import Particle from "../Particle";
import SalesPilot from "../../Assets/Projects/SalesPilot.webp";
import NomadMigration from "../../Assets/Projects/NomadMigration.webp";

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
  {
    index: "02",
    title: "Nomad Credit: WordPress to Next.js Migration",
    points: [
      "Migrated 8 high priority study abroad landing pages from WordPress (Elementor) to Next.js, preserving content, metadata, and SEO structure.",
      "Cut median mobile Largest Contentful Paint from 2.3 s to 1.2 s, bringing every page under the 2.5 s good threshold (up from 4 of 7).",
      "Fixed layout shift on all pages (3 pages previously failed CLS) and raised accessibility from 90 to 95+ on every page.",
      "Biggest wins on the slowest pages: Profile Evaluation LCP 15.9 s to 1.7 s, University Predictor and Study in UK 3.9 s to 1.2 s.",
      "Integrated Google Tag Manager server side tracking and PostHog A/B testing for marketing experiments.",
    ],
    imgPath: NomadMigration,
    demoLink: "https://www.nomadcredit.com/lp/study-in-usa",
    techStack: ["Next.js", "React.js", "SSR", "SEO", "Google Tag Manager", "PostHog", "Lighthouse"],
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
