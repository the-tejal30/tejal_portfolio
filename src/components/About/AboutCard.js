import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejal Wani </span>
            from <span className="purple">Maharashtra, India.</span>
            <br />
            I am currently employed as a MERN Stack Developer at Mobius (Gaian Solutions), Hyderabad.
            <br />
            I'm a web developer excited to explore new opportunities and passionate about creating user-friendly websites.
            <br />
            Let's collaborate and build something great together!
            <br />
            <br />
            In addition to coding, here are a few professional activities I engage in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Staying Updated with Industry Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Documentation
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
          </p>
          <footer className="blockquote-footer"> Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
