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
              Experienced frontend developer with a strong foundation in{" "}
              <i>
                <b className="purple">HTML, CSS, and JavaScript,</b>
              </i>{" "}
              and advanced proficiency in{" "}
              <i>
                <b className="purple">React.js.</b>
              </i>{" "}
              Passionate about creating responsive and interactive web interfaces. Skilled in{" "}
              <b className="purple">UI/UX design principles</b> and ensuring seamless user experiences. 🚀
              <br />
              <br />
              My field of interest includes building new <i><b className="purple">Web Technologies and Products</b></i> and exploring frontend frameworks like{" "}
              <i>
                <b className="purple">React.js and Next.js.</b>
              </i> 🌐
              <br />
              <br />
              Familiar with backend technologies such as <b className="purple">Node.js</b> for building server-side logic and APIs. ⚙️
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
                  href="mailto:tejalwani2000@gmail.com"                  
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
