import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { BsSpeedometer2, BsWindowStack } from "react-icons/bs";
import TerminalIntro from "./TerminalIntro";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "3",  label: "Companies" },
  { number: "10+", label: "Apps Shipped" },
  { number: "50+", label: "Components Built" },
];

const services = [
  {
    icon: <DiReact />,
    title: "React & Next.js Apps",
    desc: "Worked across React and Next.js projects picking up different libraries each time. Every new project taught me something I did not know before.",
    color: "#c770f0",
  },
  {
    icon: <BsSpeedometer2 />,
    title: "SEO & Google Tag Manager",
    desc: "Got hands on with SEO and GTM while working in production. Learned by doing, set up tracking, improved visibility, and kept digging deeper.",
    color: "#a855f7",
  },
  {
    icon: <BsWindowStack />,
    title: "Scalable UI Architecture",
    desc: "Restructured projects from scratch to make them reusable, fully responsive, and easy to maintain with a modern and consistent design.",
    color: "#8b5cf6",
  },
];

function Home2() {
  return (
    <>
      {/* ── Terminal Intro ── */}
      <Container fluid className="home-terminal-section">
        <Container>
          <Row className="align-items-center g-0">
            <Col lg={6} className="terminal-text-col">
              <p className="terminal-eyebrow">Frontend Engineer</p>
              <h2 className="terminal-headline">
                I love building things<br />
                <span className="purple">people enjoy</span><br />
                using every day.
              </h2>
              <p className="terminal-sub">
                From a blank screen to a product that works beautifully, 
                that's the part I enjoy most about being a frontend engineer.
              </p>
            </Col>
            <Col lg={6} className="terminal-col">
              <TerminalIntro />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        <Container>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── What I Craft ── */}
      <Container fluid className="what-i-craft-section">
        <Container>
          <h2 className="craft-heading">
            What I <span className="purple">Craft</span>
          </h2>
          <div className="craft-grid">
            {services.map((s) => (
              <div key={s.title} className="craft-card">
                <div
                  className="craft-icon"
                  style={{
                    background: `${s.color}18`,
                    borderColor: `${s.color}40`,
                  }}
                >
                  <span className="craft-icon-svg" style={{ color: s.color }}>{s.icon}</span>
                </div>
                <h4 className="craft-title" style={{ color: s.color }}>
                  {s.title}
                </h4>
                <p className="craft-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Container>

      {/* ── Social Links ── */}
      <Container fluid className="home-social-section">
        <Container>
          <div className="home-about-social">
            <h2>FIND ME ON</h2>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/the-tejal30" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://wa.link/4gxf44" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaWhatsappSquare />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/tejalwani30/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=tejalwani2000@gmail.com" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <MdAttachEmail />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
