import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import real_estate from "../../Assets/Projects/real_estate.png";
import tictactoe from '../../Assets/Projects/tic_tac_toe.png'
import KBC from '../../Assets/Projects/KBC.png'
import todo from '../../Assets/Projects/todo_app.PNG'
import connect4 from '../../Assets/Projects/connect4.png'
import Calculator from '../../Assets/Projects/calculator.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real_estate}
              isBlog={false}
              title="Real Estate Catalog"
              description="I developed a responsive user interface using HTML, CSS, and Bootstrap, and added interactive features with JavaScript. Utilizing React, I built the frontend, including user registration, login, and property listing. The backend was powered by NodeJS and MongoDB. I used VS Code for development and GitHub for version control, collaborating with a team to ensure successful project completion."
              ghLink="https://github.com/the-tejal30/Real_Estate_Catalog"
              demoLink="https://real-estate-project-mernstack.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KBC}
              isBlog={false}
              title="Kaun Banega Crorepati"
              description="Developed a modern Tic-Tac-Toe game with dynamic music, unique sound effects, GIF animations for player moves and victory celebrations, responsive design, undo/redo functionality, customizable settings, thoroughly tested, documented, and deployed for an engaging user-friendly experience."
              ghLink="https://github.com/the-tejal30/Kaun_Banega_Crorepati"
              demoLink="https://kaun-banega-crorepati-tejal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Developed a modern Tic-Tac-Toe game with immersive dynamic music, distinctive sound effects tailored for wins and game over, engaging GIF animations for player moves and victory celebrations, responsive design ensuring seamless play across devices, and user-friendly features such as undo/redo actions and customizable game settings."
              ghLink="https://github.com/the-tejal30/Internship-CodeCasa"
              demoLink="https://tictactoe-internpe.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect4}
              isBlog={false}
              title="Connect Four Game"
              description="Developed an interactive and enjoyable Connect Four game with a user-friendly interface and visually appealing game board. The game features intuitive controls, core game logic, and provides the option to play against another human player or an AI opponent with adjustable difficulty levels. The game recognizes and announces a winner when four discs are connected, offering visual feedback for the winning moves."
              ghLink="https://github.com/the-tejal30/connect4_Internpe"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do App"
              description="Developed a task management application that allows users to easily add, edit, and delete tasks with an appealing user interface. The application features an attractive color scheme and task prioritization to help users stay organized."
              ghLink="https://github.com/the-tejal30/Internship-CodeCasa"
              demoLink="https://todoapp-tejal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="Developed a user-friendly calculator application using HTML, CSS, and JavaScript to perform basic arithmetic operations. The application features an intuitive and responsive user interface with a clean layout and easy-to-use buttons. Implemented standard calculator functions such as addition, subtraction, multiplication, division, and clear/reset options. Ensured robust error handling to manage invalid inputs and prevent application crashes."
              ghLink="https://github.com/the-tejal30/Calculator"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
