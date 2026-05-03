import { useRef } from "react";
import "./App.css";

const projects = [
  {
    title: "BI Request & Ticketing System",
    description: "A lightweight intake and prioritization system for analytics requests.",
    tags: ["Operations", "Analytics", "Workflow"],
  },
  {
    title: "Sales KPI Framework",
    description: "A seller performance model connecting activity, pipeline, and outcomes.",
    tags: ["Finance", "Sales Strategy", "Power BI"],
  },
  {
    title: "Customer Business Dashboard",
    description: "A customer-facing reporting portal for orders, invoices, and spend visibility.",
    tags: ["Customer Experience", "Reporting", "Strategy"],
  },
  {
    title: "Portfolio Finance Dashboard",
    description: "A personal financial database and dashboard for monthly tracking.",
    tags: ["Finance", "Python", "Data"],
  },
];

function TopRibbon() {
  return (
    <header className="top-ribbon">
      <div className="brand-block">
        <a href="/" className="brand">Dennis Rosenbaum, CPA</a>
        <div className="sub-brand">builder → translator → operator</div>
      </div>

      <nav className="nav-links">
        <a href="/resume">resume</a>
        <a href="/personal">personal</a>
        <a href="/projects">projects</a>
        <a
          href="https://www.linkedin.com/in/dennis-rosenbaum-a07137150/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section className="section-block about-section">
      <div className="section-heading">
        <h2>Welcome 👋</h2>
      </div>

      <div className="about-box">
        <p>
          This site was built entirely using ChatGPT as part of my effort to deepen my understanding of AI and expand my technical skill set. While I’m not a traditional programmer, I’m a data-driven finance professional who enjoys building, learning, and solving complex business problems.
          
          This portfolio was created to give you a sense of who I am—both professionally and personally. It reflects how I think, how I approach problems, and how I turn ideas into execution.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <button className="go-button" aria-label={`Go to ${project.title}`}>
        →
      </button>
    </article>
  );
}

function Projects() {
  const carouselRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-block projects-section">
      <div className="section-heading project-heading-row">
        <h2>Projects</h2>

        <div className="carousel-controls">
          <button onClick={() => scrollProjects("left")} aria-label="Scroll projects left">
            ←
          </button>
          <button onClick={() => scrollProjects("right")} aria-label="Scroll projects right">
            →
          </button>
        </div>
      </div>

      <div className="project-carousel" ref={carouselRef}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <TopRibbon />
      <About />
      <Projects />
    </main>
  );
}
