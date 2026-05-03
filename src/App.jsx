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
        <h2>
          Welcome <span className="wave">👋</span>
        </h2>
      </div>

      <div className="about-box">
        <p>
          This site was built entirely using ChatGPT as part of my effort to
          deepen my understanding of AI and expand my technical skill set. While
          I’m not a traditional programmer, I’m a data-driven finance
          professional who enjoys building, learning, and solving complex
          business problems.
        </p>

        <div className="about-divider" />

        <p>
          This portfolio was created to give you a sense of who I am, both
          professionally and personally. It reflects how I think, how I approach
          problems, and how I turn ideas into execution.
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

function Resume() {
  return (
    <section className="section-block resume-section">
      <div className="section-heading">
        <h2>Resume</h2>
      </div>

      <div className="resume-card">

        {/* HEADER */}
        <div className="resume-header">
          <div>
            <h1>Dennis Rosenbaum, CPA</h1>
          </div>
        </div>

        {/* EXECUTIVE PROFILE */}
        <div className="resume-section-block">
          <h3>Executive Profile</h3>
          <p>
            Built career within a lean, high-growth business unit, advancing through progressive roles spanning accounting, finance, analytics, and operations while partnering directly with senior leadership to drive end-to-end visibility into commercial strategy, execution, and performance drivers.
          </p>
          <p>
            Recognized for architecting scalable analytics ecosystems, converting complex data into enterprise-grade business tools, influencing cross-functional stakeholders without direct authority, and shaping data-driven strategy.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="resume-section-block">
          <h3>Education & Certification</h3>
          <ul className="resume-list">
            <li><strong>Certified Public Accountant (CPA)</strong> – State of Florida</li>
            <li><strong>B.S. Finance</strong> – University of Central Florida</li>
          </ul>
        </div>

        {/* CORE CAPABILITIES */}
        <div className="resume-section-block">
          <h3>Core Capabilities</h3>

          <div className="resume-capabilities">
            <div>
              <h4>Strategic & Financial Leadership</h4>
              <ul className="resume-list">
                <li>Revenue & Margin Strategy</li>
                <li>KPI Architecture & Performance Management</li>
                <li>Customer-Level Profitability (P&L)</li>
                <li>Pipeline Health & Sales Effectiveness</li>
                <li>EBITDA Optimization Initiatives</li>
                <li>Territory & Capacity Planning</li>
                <li>Market Segmentation & Coverage Strategy</li>
              </ul>
            </div>

            <div>
              <h4>Analytics & Technology</h4>
              <ul className="resume-list">
                <li>Power BI (Enterprise Reporting, DAX)</li>
                <li>SQL / Snowflake Data Modeling</li>
                <li>Salesforce Analytics & Data Strategy</li>
                <li>Power Query / Power Automate</li>
                <li>Advanced Excel</li>
                <li>Oracle / Essbase</li>
                <li>Anaplan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="resume-section-block">
          <h3>Professional Experience</h3>

          <div className="resume-company">
            <h4>Staples Technology Solutions (Staples, Inc)</h4>

            {/* ROLE 1 */}
            <div className="resume-role">
              <div className="resume-role-heading">
                <strong>Manager, Finance Operations Strategy</strong>
                <span>Nov 2024 – Present</span>
              </div>
              <ul className="resume-list">
                <li>Lead enterprise strategy for sales performance, pipeline analytics, and KPI frameworks across 25+ sellers</li>
                <li>Architect driver-based financial models linking pipeline, activity, and operational levers to revenue and margin forecasts</li>
                <li>Built executive-level Power BI dashboards providing real-time visibility into pipeline health and attainment</li>
                <li>Serve as strategic partner across Sales, Finance, and Operations leadership</li>
                <li>Drive shift toward self-service analytics and faster decision-making cycles</li>
                <li>Designed territory and capacity models aligning coverage with revenue potential</li>
                <li>Led national territory planning strategy using GDP-based segmentation</li>
              </ul>
            </div>

            {/* ROLE 2 */}
            <div className="resume-role">
              <div className="resume-role-heading">
                <strong>Margin Manager</strong>
                <span>Apr 2021 – Oct 2024</span>
              </div>
              <ul className="resume-list">
                <li>Led enterprise pivot to EBITDA-focused performance, delivering $1M+ in margin recovery</li>
                <li>Built customer-level P&L visibility across thousands of accounts</li>
                <li>Identified cost drivers and systemic margin leakage</li>
                <li>Operationalized account-level profitability strategy with Sales</li>
                <li>Influenced executive decisions on revenue vs. margin trade-offs</li>
              </ul>
            </div>

            {/* ROLE 3 */}
            <div className="resume-role">
              <div className="resume-role-heading">
                <strong>Project Manager</strong>
                <span>Apr 2017 – Mar 2021</span>
              </div>
              <ul className="resume-list">
                <li>Built first centralized analytics ecosystem integrating 4+ systems</li>
                <li>Developed governed data models and standardized KPI definitions</li>
                <li>Automated reporting, eliminating ~70% of manual effort</li>
                <li>Established single source of truth for enterprise performance</li>
              </ul>
            </div>

            {/* ROLE 4 */}
            <div className="resume-role">
              <div className="resume-role-heading">
                <strong>Accountant I & II</strong>
                <span>Sept 2011 – Mar 2017</span>
              </div>
              <ul className="resume-list">
                <li>Managed financial reporting, close processes, and variance analysis</li>
                <li>Oversaw $1M+ receivables portfolio, improving collections ~10%</li>
                <li>Partnered with auditors to ensure compliance</li>
                <li>Built early reporting and forecasting tools</li>
              </ul>
            </div>

          </div>
        </div>

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
