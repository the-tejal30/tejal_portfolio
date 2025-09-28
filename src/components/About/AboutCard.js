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
            I am currently working as a Frontend Engineer at FinalLayer, Hyderabad.
            <br />
            I'm a frontend developer who loves building responsive web applications and learning new technologies.
            <br />
            Always excited to take on new challenges and create meaningful digital experiences!
            <br />
            <br />
            Apart from coding, here are some things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Frontend Frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs and Articles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best code is no code at all, but when you must write code, make it simple and readable."
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;