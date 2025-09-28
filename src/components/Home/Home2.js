import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile_pic.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Frontend Engineer with <b className="purple">2+ years of professional experience</b> building web applications and digital solutions. Currently working at{" "}
              <i>
                <b className="purple">FinalLayer</b>
              </i>{" "}
              focusing on modern React applications with Next.js and TypeScript. 🚀
              <br />
              <br />
              I work with technologies like{" "}
              <i>
                <b className="purple">React.js, Next.js, TypeScript,</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">TailwindCSS.</b>
              </i>{" "}
              I enjoy creating clean, responsive interfaces that work well across different devices. 💡
              <br />
              <br />
              My skills include building{" "}
              <i>
                <b className="purple">React applications,</b>
              </i>{" "}
              working with{" "}
              <i>
                <b className="purple">Redux and Context API,</b>
              </i>{" "}
              and making websites that look good on all devices with smooth animations. 🌐
              <br />
              <br />
              I'm familiar with backend technologies like{" "}
              <b className="purple">Firebase, Node.js, MongoDB,</b> and have experience with{" "}
              <b className="purple">Mapbox, Framer Motion,</b> and chart libraries for showing data visually. ⚙️
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt >
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/the-tejal30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.link/4gxf44"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsappSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tejalwani30/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=tejalwani2000@gmail.com"                  
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdAttachEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;