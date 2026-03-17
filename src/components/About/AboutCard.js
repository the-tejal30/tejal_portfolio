import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Tejal Wani</span> from{" "}
            <span className="purple">Maharashtra, India.</span>
            <br />
            I'm a Frontend Engineer with <span className="purple">2+ years</span> of
            professional experience, currently building AI tools and products at{" "}
            <span className="purple">FinalLayer, Hyderabad.</span>
            <br />
            <br />
            I specialize in crafting responsive, high-performance UIs using{" "}
            <span className="purple">React.js, Next.js, and TypeScript</span>, with a
            strong focus on SEO, accessibility, and scalable code. I love turning
            complex problems into clean, intuitive interfaces.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring cutting-edge AI-powered UI experiences
            </li>
            <li className="about-activity">
              <ImPointRight /> Building full-stack products end-to-end
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading tech blogs and staying ahead of frontend trends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Write code that's easy to delete, not easy to extend."
          </p>
          <footer className="blockquote-footer">Tef</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
