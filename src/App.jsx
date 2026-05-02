import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projectIdeas = [
  {
    title: "Analytics Intake & Prioritization Engine",
    category: "Operations / Analytics Intake",
    summary:
      "A lightweight intake and queue tool for dashboard, reporting, Salesforce, and analysis requests.",
    value:
      "Designed to standardize requests, create visibility into live work, and improve how analytics teams prioritize business demand.",
  },
  {
    title: "Seller KPI Scorecard",
    category: "Revenue Strategy",
    summary:
      "A dashboard concept for seller activity, pipeline sufficiency, account touches, and performance attainment.",
    value:
      "Demonstrates how sales activity, pipeline health, and performance data can be translated into operating rhythms for leadership.",
  },
  {
    title: "Customer Profitability Lens",
    category: "Strategic Finance",
    summary:
      "A customer-level P&L concept that identifies margin leakage, low-profit accounts, and expansion opportunities.",
    value:
      "Shows how financial analytics can move beyond reporting and directly support margin expansion and commercial decisions.",
  },
  {
    title: "Territory Potential Planner",
    category: "Go-to-Market Strategy",
    summary:
      "A planning framework that compares revenue, customer concentration, GDP, and seller coverage.",
    value:
      "Demonstrates strategic territory design, capacity planning, and data-informed sales coverage decisions.",
  },
  {
    title: "Executive Business Review Template",
    category: "Leadership Communication",
    summary:
      "A structured business review format that combines performance trends, risks, opportunities, and recommended actions.",
    value:
      "Shows the ability to convert complex analysis into executive-ready narratives and decisions.",
  },
];

const requestTypes = [
  "Power BI Dashboard",
  "Ad Hoc Report",
  "Modify Existing Dashboard",
  "Salesforce Request",
];

const statuses = ["Open", "In Progress", "Completed"];
const categories = ["Unassigned", "Complex Project", "Minor Project", "Ad Hoc Analysis"];

function App() {
  const [activePage, setActivePage] = useState("home");

  const [tickets, setTickets] = useState([
    {
      id: "TCK-1001",
      type: "Power BI Dashboard",
      description: "Create a margin trend dashboard by customer and seller.",
      dueDate: "2026-05-15",
      category: "Complex Project",
      status: "In Progress",
      fileName: "requirements.xlsx",
    },
    {
      id: "TCK-1002",
      type: "Ad Hoc Report",
      description: "Pull QTD sales by customer parent account.",
      dueDate: "2026-05-08",
      category: "Ad Hoc Analysis",
      status: "Open",
      fileName: "",
    },
  ]);

  const [form, setForm] = useState({
    type: "Power BI Dashboard",
    description: "",
    dueDate: "",
    fileName: "",
  });

  const [search, setSearch] = useState("");

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) =>
      `${ticket.id} ${ticket.type} ${ticket.description} ${ticket.category} ${ticket.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [tickets, search]);

  function createTicket(e) {
    e.preventDefault();

    if (!form.description.trim() || !form.dueDate) {
      alert("Please enter a description and requested completion date.");
      return;
    }

    const nextTicket = {
      id: `TCK-${1000 + tickets.length + 1}`,
      type: form.type,
      description: form.description,
      dueDate: form.dueDate,
      category: "Unassigned",
      status: "Open",
      fileName: form.fileName,
    };

    setTickets([nextTicket, ...tickets]);

    setForm({
      type: "Power BI Dashboard",
      description: "",
      dueDate: "",
      fileName: "",
    });
  }

  function updateTicket(id, field, value) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, [field]: value } : ticket
      )
    );
  }

  return (
    <main className="site">
      <nav className="nav">
        <button className="brand" onClick={() => setActivePage("home")}>
          Dennis Rosenbaum
        </button>

        <div className="navLinks">
          <button onClick={() => setActivePage("projects")}>Projects</button>
          <button onClick={() => setActivePage("ticketing")}>Ticketing Demo</button>
          <button onClick={() => setActivePage("about")}>About</button>
          <button onClick={() => setActivePage("contact")}>Contact</button>
        </div>
      </nav>

      {activePage === "home" && (
        <section className="hero">
          <p className="eyebrow">Strategic Finance • Analytics • Revenue Strategy</p>

          <h1>
            I build data-driven systems that improve revenue performance and
            decision-making.
          </h1>

          <p className="heroText">
            Strategic Finance leader focused on FP&A, business intelligence, and
            sales strategy. This site showcases lightweight tools and frameworks
            designed to solve real business problems.
          </p>

          <div className="heroActions">
            <button onClick={() => setActivePage("projects")}>View Projects</button>
            <button onClick={() => setActivePage("ticketing")}>
              Open Ticketing Demo
            </button>
          </div>
        </section>
      )}

      {activePage === "projects" && (
        <section className="section">
          <h2>Projects</h2>

          <p className="sectionIntro">
            Each project is intentionally lightweight, but designed to demonstrate
            strategic thinking, technical fluency, and practical business judgment.
          </p>

          <div className="projectsList">
            {projectIdeas.map((project, index) => (
              <article className="project" key={project.title}>
                <p className="projectCategory">{project.category}</p>

                <h3>
                  {String(index + 1).padStart(2, "0")} — {project.title}
                </h3>

                <p>{project.summary}</p>
                <p>{project.value}</p>

                <button
                  className="textButton"
                  onClick={() =>
                    project.title.includes("Analytics Intake")
                      ? setActivePage("ticketing")
                      : null
                  }
                >
                  → View Project
                </button>
              </article>
            ))}
          </div>
        </section>
      )}

      {activePage === "ticketing" && (
        <section className="section">
          <h2>Analytics Intake & Prioritization Engine</h2>

          <p className="sectionIntro">
            A simple operating system for capturing analytics requests,
            categorizing work, and tracking live demand.
          </p>

          <div className="ticketLayout">
            <form className="panel" onSubmit={createTicket}>
              <h3>Create Ticket</h3>

              <label>Request Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                {requestTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>

              <label>Description</label>
              <textarea
                placeholder="Briefly describe the business request..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <label>Requested Completion Date</label>
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              />

              <label>Attachment Name Optional</label>
              <input
                placeholder="example: request-details.xlsx"
                value={form.fileName}
                onChange={(e) => setForm({ ...form, fileName: e.target.value })}
              />

              <button type="submit">Submit Ticket</button>
            </form>

            <div className="panel queue">
              <div className="queueHeader">
                <div>
                  <h3>Live Ticket Queue</h3>
                  <p>{tickets.length} active tickets</p>
                </div>

                <input
                  className="searchInput"
                  placeholder="Search tickets..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Due</th>
                      <th>Category</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredTickets.map((ticket) => (
                      <tr key={ticket.id}>
                        <td>{ticket.id}</td>
                        <td>{ticket.type}</td>
                        <td>
                          {ticket.description}
                          {ticket.fileName && (
                            <span className="file">
                              Attachment: {ticket.fileName}
                            </span>
                          )}
                        </td>
                        <td>{ticket.dueDate}</td>
                        <td>
                          <select
                            value={ticket.category}
                            onChange={(e) =>
                              updateTicket(ticket.id, "category", e.target.value)
                            }
                          >
                            {categories.map((category) => (
                              <option key={category}>{category}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select
                            value={ticket.status}
                            onChange={(e) =>
                              updateTicket(ticket.id, "status", e.target.value)
                            }
                          >
                            {statuses.map((status) => (
                              <option key={status}>{status}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === "about" && (
        <section className="section">
          <h2>About</h2>

          <p className="sectionIntro">
            I am a finance and strategy leader operating at the intersection of
            FP&A, revenue analytics, sales strategy, and business intelligence.
          </p>

          <p>
            My work focuses on translating ambiguous business problems into
            scalable analytics ecosystems, executive-ready decision frameworks,
            and practical operating tools. I am especially interested in roles
            where finance, commercial strategy, and data-driven execution meet.
          </p>
        </section>
      )}

      {activePage === "contact" && (
        <section className="section">
          <h2>Contact</h2>

          <p className="sectionIntro">
            Interested in discussing Strategic Finance, FP&A, Revenue Strategy,
            or analytics leadership opportunities?
          </p>

          <p>
            Add your email address, LinkedIn profile, and resume link here.
          </p>
        </section>
      )}
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
