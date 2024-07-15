import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Created and crafted by Tejal Wani</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TW</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/the-tejal30"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.link/4gxf44"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tejalwani30/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:tejalwani2000@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdAttachEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
