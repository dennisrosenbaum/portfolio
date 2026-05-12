import { useRef } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CustomerDashboardProject from "./CustomerDashboardProject";

const projects = [
  {
    title: "Customer Business Dashboard",
    description: "A customer-facing reporting portal for orders, invoices, and spend visibility.",
    color: "#f59e0b", // amber
    tags: ["Customer Experience", "Reporting", "Strategy"],
    link: "/projects/customer-dashboard"
  },
  {
    title: "Coming Soon",
    description: "A placeholder for another sample project that is coming soon.",
    color: "#3b82f6", // blue
    tags: ["Operations", "Analytics", "Workflow"],
  },
  {
    title: "Coming Soon",
    description: "A placeholder for another sample project that is coming soon.",
    color: "#10b981", // green
    tags: ["Finance", "Sales Strategy", "Power BI"],
    link: "/projects/kpi-framework",
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
        <h2>Welcome</h2>
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

         <div className="about-divider" />

        <p>
          Thanks for visiting - I appreciate your time.
        </p>
         <img 
          src="/images/signature.png" 
          alt="Dennis Rosenbaum signature" 
          className="signature"
        />
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className="project-card"
      style={{ "--accent": project.color }}
    >
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <button
  className="go-button"
  onClick={() => window.location.href = project.link}
>
  →
</button>
    </article>
  );
}
function Projects() {
  return (
    <section className="section-block projects-section">
      <div className="projects-inner">
        <div className="section-heading project-heading-row">
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Resume() {
  useEffect(() => {
  document.title = "Resume | Dennis Rosenbaum";
}, []);
  return (
    <section className="section-block resume-section">
      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
  Executive Profile
</h2>
</div>

        <div className="resume-card">
          <div className="resume-section-block">
            <p>
              Finance and operations leader with experience driving analytics, performance management, 
              and finance transformation initiatives within a complex B2B operating environment. 
              Progressive background spanning accounting, corporate finance, analytics, and operational 
              strategy, with a track record of partnering cross-functionally to improve forecasting, 
              profitability, KPI governance, and executive decision-making. 
            </p>
            <p>
              Recognized for translating financial and operational data into scalable planning 
              frameworks, process improvements, and technology-enabled business solutions that 
              support revenue growth and margin optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
  Education & Certification
</h2>
</div>

        <div className="resume-card">
          <div className="resume-section-block">
           <div className="resume-education">
  <p>Certified Public Accountant (CPA) — State of Florida</p>
  <p>B.S. Finance — University of Central Florida</p>
</div>
          </div>
        </div>
      </div>

      <div className="resume-section-group">
        <div className="section-heading">
  <h2 className="section-title">
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
                  <li>KPI Governance</li>
                  <li>Forecasting & Budgeting</li>
                  <li>Strategic Planning </li>
                  <li>Scenario Modeling</li>
                  <li>Enterprise Reporting</li>
                  <li>Territory & Capacity Planning</li>
                </ul>
              </div>

              <div>
                <h4>Analytics & Technology</h4>
                <ul className="resume-list">
                  <li>Advanced Excel</li>
                  <li>Power BI & Report Builder</li>
                  <li>SQL / DAX / Snowflake Data Modeling</li>
                  <li>Salesforce</li>
                  <li>Power Query & Power Automate</li>
                  <li>Oracle & Essbase</li>
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
                "•  Lead and develop a team of 3 analysts responsible for sales analytics, KPI reporting, operational reporting, and strategic initiatives supporting Finance, Sales, and Operations leadership",
                "•  Partner with Sales and Finance leadership on forecasting, revenue planning, pipeline analysis, and performance management, translating financial and operational trends into actionable business insights and recommendations",
                "•  Direct enterprise rollout strategy for a customer-facing Power BI reporting platform designed to improve operational transparency, strengthen customer engagement, reduce manual service dependency, and enhance the company’s value proposition as a technology-enabled strategic partner",
                "•  Develop KPI frameworks and executive reporting used to evaluate sales productivity, customer engagement, pipeline sufficiency, revenue performance, and operational effectiveness across multiple commercial teams",
                "•  Design and optimize sales territory and capacity models, aligning account coverage with revenue opportunity and market potential to support resource allocation and headcount planning decisions",
                "•  Led territory planning strategy for a newly formed national business development organization (10 sellers), leveraging macroeconomic indicators, whitespace analysis, and market opportunity modeling to improve geographic alignment and pipeline generation efficiency",
                "•  Drive cross-functional process improvement initiatives focused on reporting automation, data governance, and decision support, improving visibility into financial and operational performance drivers",
              ]}
            />

            <ResumeRole
              title="Margin Manager"
              dates="Apr 2021 – Oct 2024"
              bullets={[
                "•  Led enterprise transition from top-line growth focus to EBITDA-driven performance management, contributing to more than $1M in margin recovery through targeted profitability and pricing initiatives over a two-year period",
                "•  Developed customer-level profitability reporting and P&L visibility across thousands of accounts, identifying margin leakage, cost-to-serve inefficiencies, and previously untracked operational cost drivers",
                "•  Designed and operationalized account-level remediation strategy with Sales, improving pricing discipline and profitability across underperforming segments",
                "•  Supported executive decision-making through financial analysis and scenario evaluation, quantifying trade-offs between revenue growth, margin compression, customer retention, and operating cost structure",
              ]}
            />

            <ResumeRole
              title="Project Manager"
              dates="Apr 2017 – Mar 2021"
              bullets={[
                "•  Built the organization’s first centralized data and analytics ecosystem, integrating 4+ systems into a governed, scalable architecture.",
                "•  Developed foundational data pipelines, models, and semantic layers, standardizing KPI definitions and enabling consistent reporting across the enterprise.",
                "•  Automated reporting workflows, eliminating ~70% of manual reporting effort and significantly improving data timeliness and accuracy.",
                "•  Drive shift toward self-service analytics, reducing dependency on ad hoc reporting and accelerating decision-making cycles",
                "•  Established a single source of truth for sales and financial performance, enabling leadership to make faster, data-backed decisions.",
              ]}
            />

            <ResumeRole
              title="Accountant I & II"
              dates="Sept 2011 – Mar 2017"
              bullets={[
                "•  Managed financial reporting, close processes, and variance analysis supporting accurate and timely financial statements.",
                "•  Oversaw $1M+ receivables portfolio, improving collections performance by ~10% through enhanced tracking and follow-up processes.",
                "•  Partnered with auditors, delivering required documentation and resolving audit inquiries to ensure compliance.",
                "•  Built early reporting and forecasting tools that evolved into broader analytics capabilities.",
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
        <div className="resume-role-dates">{dates}</div>

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
  useEffect(() => {
  document.title = "Dennis Rosenbaum | Finance & Strategy";
}, []);
  return (
    <>
      <About />
      <Projects />
    </>
  );
}

function KPIFrameworkProject() {
  useEffect(() => {
    document.title = "KPI Framework | Dennis Rosenbaum";
  }, []);
  return (
    <section className="section-block project-detail-section">
      <div className="section-heading">
        <h2>Sales KPI Framework 📊</h2>
      </div>

      <div className="project-detail-card">
        <p className="project-detail-intro">
          Designed a seller performance framework connecting activity, pipeline,
          revenue growth, margin, and share of wallet into a single operating
          model for sales leadership.
        </p>
      </div>

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <h3>Problem</h3>
          <p>
            Sales performance was being evaluated through disconnected metrics,
            making it difficult to understand whether outcomes were driven by
            activity, pipeline quality, account coverage, or broader market
            conditions.
          </p>
        </div>

        <div className="project-detail-card">
          <h3>Approach</h3>
          <p>
            Built a driver-based KPI model that translated seller behaviors into
            measurable business indicators. The framework connected leading
            indicators, like first appointments and account touches, to lagging
            outcomes like sales growth, margin, and share of wallet.
          </p>
        </div>

        <div className="project-detail-card">
          <h3>Solution</h3>
          <ul>
            <li>Power BI dashboard for seller, manager, and leadership views</li>
            <li>Team-average benchmarking for performance context</li>
            <li>Threshold logic for minimum acceptable performance</li>
            <li>Pipeline sufficiency and sales activity visibility</li>
            <li>Executive-ready KPI summaries by period and year-to-date</li>
          </ul>
        </div>

        <div className="project-detail-card">
          <h3>Impact</h3>
          <ul>
            <li>Created a consistent performance management language</li>
            <li>Improved visibility into coaching opportunities</li>
            <li>Reduced dependence on ad hoc reporting</li>
            <li>Enabled leadership to connect behavior, pipeline, and results</li>
          </ul>
        </div>
      </div>

      <div className="project-detail-card">
        <h3>Tools & Skills Demonstrated</h3>
        <div className="resume-tags">
          <span>Power BI</span>
          <span>DAX</span>
          <span>SQL</span>
          <span>Salesforce Analytics</span>
          <span>KPI Design</span>
          <span>Sales Strategy</span>
          <span>Executive Reporting</span>
        </div>
      </div>
    </section>
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
          <Route path="/projects/kpi-framework" element={<KPIFrameworkProject />} />
          <Route path="/projects/customer-dashboard" element={<CustomerDashboardProject />} />
        </Routes>

      </main>
    </BrowserRouter>
  );
}


