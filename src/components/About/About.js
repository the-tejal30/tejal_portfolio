import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Experience from "./Experience";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
      </Container>

      <Experience />
    </Container>
  );
}

export default About;
