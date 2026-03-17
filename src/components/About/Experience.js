import React from "react";
import { Container } from "react-bootstrap";

const experiences = [
  {
    company: "FinalLayer",
    role: "Frontend Engineer",
    period: "Jan 2025 to Present",
    year: "2025",
    location: "Hyderabad",
    current: true,
    color: "#c770f0",
    points: [
      "Built responsive, pixel perfect interfaces for multiple AI tools and worked on building AI agents, ensuring smooth usability across all devices",
      "Reduced page load time by 25–30% and boosted search visibility through Next.js server side rendering and SEO focused optimizations",
      "Set up Google Tag Manager for event tracking, enabling data driven insights and marketing analytics across the platform",
      "Consumed Floatiq CMS content via GraphQL within the Astro framework and wired up all required backend APIs",
      "Maintained shared application state with Redux and authored reusable UI components using Flowbite",
      "Collaborated in a 25 person startup team, operating under fast paced delivery cycles and contributing across multiple concurrent AI product lauches",
    ],
  },
  {
    company: "GenbaNext Pvt Ltd.",
    role: "Frontend Developer",
    period: "Aug 2024 to Jan 2025",
    year: "2024",
    location: "Hyderabad",
    current: false,
    color: "#a855f7",
    points: [
      "Worked on 3+ production React applications using Ant Design with custom SCSS for enterprise ready layouts",
      "Created interactive dashboards with Highcharts to clearly present complex datasets to end users",
      "Managed centralized state using Redux while contributing to performance focused UI enhancements",
      "Coordinated with backend teams to integrate RESTful APIs ensuring smooth data flow between frontend and server",
    ],
  },
  {
    company: "Gaian Solutions India Pvt. Ltd.",
    role: "Associate Member of Technical Staff - I",
    period: "Nov 2023 to Jun 2024",
    year: "2023",
    location: "Hyderabad",
    current: false,
    color: "#8b5cf6",
    points: [
      "Contributed to a React based mobile application with improved load times through optimized component structure",
      "Developed a Storybook component library with 50+ reusable UI components to ensure visual consistency across products",
      "Configured Firebase authentication with OTP based login and JWT token handling for secure user sessions",
      "Enabled multi language support using i18next and prepared technical documentation for developer reference",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading" style={{ textAlign: "left" }}>
          Work <strong className="purple">Experience</strong>
        </h1>

        <div className="timeline-v2">
          {experiences.map((exp, idx) => (
            <div key={idx} className="tl-row">
              <div className="tl-year-col">
                <span className="tl-year" style={{ color: exp.color }}>{exp.year}</span>
              </div>

              <div className="tl-line-col">
                <div className="tl-dot" style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}` }} />
                <div className="tl-connector" />
              </div>

              <div className="tl-content-col">
                <div className="tl-card" style={{ borderLeftColor: exp.color }}>
                  {exp.current && (
                    <span className="tl-current-badge" style={{ background: exp.color }}>
                      Current
                    </span>
                  )}
                  <h3 className="tl-company" style={{ color: exp.color }}>{exp.company}</h3>
                  <p className="tl-role">{exp.role}</p>
                  <p className="tl-period">{exp.period} &nbsp;&middot;&nbsp; {exp.location}</p>
                  <ul className="tl-points">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
