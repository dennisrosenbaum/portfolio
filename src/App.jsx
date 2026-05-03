import {
  User,
  GraduationCap,
  Briefcase,
  BarChart3
} from "lucide-react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
        <Link to="/" className="brand">Dennis Rosenbaum, CPA</Link>
        <div className="sub-brand">builder → translator → operator</div>
      </div>

      <nav className="nav-links">
        <Link to="/">home</Link>
        <Link to="/resume">resume</Link>
        <Link to="/personal">personal</Link>
        <Link to="/projects">projects</Link>
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
      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
    <User className="section-icon" />
    Executive Profile
  </h2>
</div>

        <div className="resume-card">
          <div className="resume-section-block">
            <p>
              Built career within a lean, high-growth business unit, advancing through
              progressive roles spanning accounting, finance, analytics, and operations
              while partnering directly with senior leadership to drive end-to-end
              visibility into commercial strategy, execution, and performance drivers.
            </p>
            <p>
              Recognized for architecting scalable analytics ecosystems and converting
              complex data into enterprise-grade business tools, influencing
              cross-functional stakeholders without direct authority, and shaping
              data-driven strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
    <GraduationCap className="section-icon" />
    Education & Certification
  </h2>
</div>

        <div className="resume-card">
          <div className="resume-section-block">
            <ul className="resume-list">
              <li>Certified Public Accountant (CPA) — State of Florida</li>
              <li>B.S. Finance — University of Central Florida</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
    <BarChart3 className="section-icon" />
    Core Capabilities
  </h2>
</div>

        <div className="resume-card">
          <div className="resume-section-block">
            <div className="resume-capabilities">
              <div>
                <h4>Strategic & Financial Leadership</h4>
                <ul className="resume-list">
                  <li>Revenue & Margin Strategy</li>
                  <li>KPI Architecture & Performance Management</li>
                  <li>Customer-Level Profitability (P&amp;L)</li>
                  <li>Pipeline Health & Sales Effectiveness</li>
                  <li>EBITDA Optimization Initiatives</li>
                  <li>Territory & Capacity Planning</li>
                  <li>Market Segmentation & Coverage Strategy</li>
                </ul>
              </div>

              <div>
                <h4>Analytics & Technology</h4>
                <ul className="resume-list">
                  <li>Power BI — Enterprise Reporting, DAX</li>
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
        </div>
      </div>

      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
    <Briefcase className="section-icon" />
    Professional Experience
  </h2>
</div>

        <div className="resume-card">
          <div className="resume-section-block">
            <div className="resume-company">Staples Technology Solutions</div>
            <div className="resume-company-subtitle">Staples, Inc.</div>

            <ResumeRole
              title="Manager, Finance Operations Strategy"
              dates="Nov 2024 – Present"
              bullets={[
                "Lead enterprise strategy for sales performance, pipeline analytics, and KPI frameworks across 25+ sellers, influencing behavior and revenue outcomes through data-driven insights.",
                "Architect driver-based financial models linking pipeline, sales activity, and operational levers to revenue and margin forecasts, improving forecast accuracy and planning precision.",
                "Built and scaled executive-level Power BI dashboards providing real-time visibility into pipeline health, attainment, and productivity, adopted across Sales and Leadership teams.",
                "Serve as a cross-functional strategic partner to Sales, Finance, and Operations leadership, aligning on performance targets, accountability frameworks, and growth strategy.",
                "Drive shift toward self-service analytics, reducing dependency on ad hoc reporting and accelerating decision-making cycles.",
                "Designed and optimized sales territory and capacity models, aligning account coverage with revenue potential and identifying whitespace opportunities to inform headcount planning and resource allocation decisions.",
                "Led territory planning strategy for a new business development team, using macroeconomic indicators to define balanced geographic coverage and maximize pipeline generation efficiency.",
              ]}
            />

            <ResumeRole
              title="Margin Manager"
              dates="Apr 2021 – Oct 2024"
              bullets={[
                "Led enterprise pivot from top-line growth to EBITDA-focused performance, delivering $1M+ in margin recovery through targeted profitability initiatives over a 2-year period.",
                "Developed customer-level P&L visibility across thousands of accounts, uncovering previously untracked cost drivers and systemic margin leakage.",
                "Designed and operationalized account-level remediation strategy with Sales, improving pricing discipline and profitability across underperforming segments.",
                "Influenced executive decision-making by quantifying trade-offs between revenue growth, margin compression, and cost structure.",
              ]}
            />

            <ResumeRole
              title="Project Manager"
              dates="Apr 2017 – Mar 2021"
              bullets={[
                "Built the organization’s first centralized data and analytics ecosystem, integrating 4+ systems into a governed, scalable architecture.",
                "Developed foundational data pipelines, models, and semantic layers, standardizing KPI definitions and enabling consistent reporting across the enterprise.",
                "Automated reporting workflows, eliminating ~70% of manual reporting effort and significantly improving data timeliness and accuracy.",
                "Established a single source of truth for sales and financial performance, enabling leadership to make faster, data-backed decisions.",
              ]}
            />

            <ResumeRole
              title="Accountant I & II"
              dates="Sept 2011 – Mar 2017"
              bullets={[
                "Managed financial reporting, close processes, and variance analysis supporting accurate and timely financial statements.",
                "Oversaw $1M+ receivables portfolio, improving collections performance by ~10% through enhanced tracking and follow-up processes.",
                "Partnered with auditors, delivering required documentation and resolving audit inquiries to ensure compliance.",
                "Built early reporting and forecasting tools that evolved into broader analytics capabilities.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeRole({ title, dates, bullets }) {
  return (
    <div className="resume-role">
      <div className="resume-role-grid">
        
        {/* LEFT COLUMN (DATES) */}
        <div className="resume-role-dates">
          {dates}
        </div>

        {/* RIGHT COLUMN (CONTENT) */}
        <div className="resume-role-content">
          <h4>{title}</h4>

          <ul className="resume-list">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <About />
      <Projects />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <TopRibbon />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </main>
    </BrowserRouter>
  );
}
