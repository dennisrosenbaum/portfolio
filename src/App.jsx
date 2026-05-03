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
      <a href="/" className="brand">Dennis Rosenbaum, CPA</a>

      <nav className="nav-links">
        <a href="/">home</a>
        <a href="/resume">resume</a>
        <a href="/personal">personal</a>
        <a href="/projects">projects</a>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section className="about-section">
      <p className="eyebrow">finance • strategy • analytics</p>
      <h1>builder → translator → operator</h1>
      <p className="about-copy">
        I operate at the intersection of finance, sales strategy, and analytics—designing
        performance frameworks that connect activity, pipeline, and pricing decisions directly
        to revenue and margin outcomes. I architect the systems, models, and operating cadences
        that drive it, enabling leadership to make better and faster decisions. The result is
        measurable impact across complex, cross-functional environments.
      </p>
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
  return (
    <section className="section-block">
      <div className="section-heading">
        <p>selected work</p>
        <h2>Projects</h2>
      </div>

      <div className="project-carousel">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section">
      <p>Feel free to reach out.</p>

      <div className="contact-links">
        <a href="mailto:dennis@example.com">dennis@example.com</a>
        <a
          href="https://www.linkedin.com/in/dennis-rosenbaum-a07137150/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
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
      <Contact />
    </main>
  );
}
