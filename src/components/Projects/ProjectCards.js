import Tilt from "react-parallax-tilt";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";

function ProjectCards({ index, title, points, techStack, ghLink, demoLink, gradient, icon, imgPath, featured }) {
  return (
    <div className="showcase-item" data-index={index}>
      <div className="showcase-content">
        <div className="showcase-top-row">
          <span className="showcase-index">{index}</span>
          <div className="showcase-title-group">
            <h3 className="showcase-title">{title}</h3>
            {featured && <span className="showcase-badge">✦ Featured</span>}
          </div>
        </div>

        <ul className="showcase-desc-list">
          {points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        <div className="showcase-bottom">
          {techStack && (
            <div className="tech-tags">
              {techStack.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          )}
          <div className="showcase-links">
            {ghLink && (
              <a href={ghLink} target="_blank" rel="noreferrer" className="showcase-link showcase-link-gh">
                <BsGithub /> GitHub
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noreferrer" className="showcase-link showcase-link-live">
                Live Demo <BsArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>

      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={800}
        glareEnable={false}
        className="showcase-visual-tilt"
      >
        <div className="showcase-visual">
          {imgPath ? (
            <img src={imgPath} alt={title} className="showcase-visual-img" />
          ) : (
            <div className="showcase-visual-gradient" style={{ background: gradient }}>
              <span className="showcase-visual-icon">{icon}</span>
            </div>
          )}
        </div>
      </Tilt>
    </div>
  );
}

export default ProjectCards;
