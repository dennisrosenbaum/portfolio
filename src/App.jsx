import "./App.css";

const projects = [
  {
    title: "BI Ticketing & Project Intake System",
    description:
      "A lightweight internal request system for dashboard, reporting, Salesforce, and analytics project intake.",
    tags: ["Analytics", "Operations", "Frontend"],
  },
  {
    title: "Customer Reporting Portal",
    description:
      "A Power BI-powered customer portal concept for orders, invoices, inventory, usage, and spend insights.",
    tags: ["Power BI", "Customer Experience", "Strategy"],
  },
  {
    title: "Seller KPI Framework",
    description:
      "A performance management framework connecting seller activity, pipeline health, and revenue outcomes.",
    tags: ["Finance", "Sales Strategy", "KPIs"],
  },
];

const experience = [
  {
    role: "Manager, Finance Operations Strategy",
    company: "Staples Technology Solutions",
    dates: "Current",
    bullets: [
      "Lead analytics, KPI design, and strategic reporting across Sales, Finance, and Operations.",
      "Build scalable decision tools that connect financial outcomes to operational behavior.",
    ],
  },
  {
    role: "Finance, Analytics & Operations",
    company: "Progressive Roles",
    dates: "Prior",
    bullets: [
      "Developed reporting ecosystems, business reviews, and data models supporting commercial strategy.",
    ],
  },
];

const writing = [
  {
    title: "How Better Data Changes Seller Behavior",
    preview:
      "A short perspective on moving from reporting activity to influencing execution.",
  },
  {
    title: "Building Decision Frameworks, Not Dashboards",
    preview:
      "Why the best analytics tools help leaders make clearer choices faster.",
  },
];

function Hero() {
  return (
    <header className="hero">
      <p className="eyebrow">Personal Portfolio</p>
      <h1>Dennis Rosenbaum, CPA</h1>
      <p className="subtitle">builder → translator → operator</p>
      <p className="hero-copy">
        Connecting financial outcomes to operational behavior through analytics,
        strategy, and scalable business tools.
      </p>
    </header>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#writing">Writing</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ProjectItem({ title, description, tags }) {
  return (
    <article className="item">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

function ExperienceItem({ role, company, dates, bullets }) {
  return (
    <article className="item">
      <div className="item-topline">
        <div>
          <h3>{role}</h3>
          <p className="muted">{company}</p>
        </div>
        <span className="date">{dates}</span>
      </div>

      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function WritingItem({ title, preview }) {
  return (
    <article className="writing-item">
      <h3>{title}</h3>
      <p>{preview}</p>
    </article>
  );
}

export default function App() {
  return (
    <main className="page">
      <Hero />
      <Nav />

      <Section id="about" title="About">
        <p className="about-text">
          I work at the intersection of finance, analytics, sales strategy, and
          operations. My focus is building practical tools that help leaders see
          the business clearly, understand what is driving performance, and make
          better decisions. I’m especially interested in translating complex data
          into simple frameworks that improve execution.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <div className="stack">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="stack">
          {experience.map((job) => (
            <ExperienceItem key={job.role} {...job} />
          ))}
        </div>
      </Section>

      <Section id="writing" title="Writing">
        <div className="stack">
          {writing.map((post) => (
            <WritingItem key={post.title} {...post} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="contact-copy">Feel free to reach out.</p>
        <div className="contact-links">
          <a href="mailto:your-email@example.com">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf">Resume</a>
        </div>
      </Section>
    </main>
  );
}
