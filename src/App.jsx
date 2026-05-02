import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BarChart3, BriefcaseBusiness, ClipboardList, Mail, Plus, Search, Sparkles } from "lucide-react";
import "./styles.css";

const projectIdeas = [
  {
    title: "BI Request & Ticketing System",
    category: "Operations / Analytics Intake",
    summary: "A lightweight intake and queue tool for dashboard, reporting, Salesforce, and analysis requests.",
    value: "Shows process design, prioritization, stakeholder intake, and analytics operations thinking.",
  },
  {
    title: "Seller KPI Scorecard",
    category: "Revenue Strategy",
    summary: "A dashboard concept for seller activity, pipeline sufficiency, account touches, and performance attainment.",
    value: "Shows FP&A, sales strategy, Power BI, KPI design, and executive reporting judgment.",
  },
  {
    title: "Customer Profitability Lens",
    category: "Strategic Finance",
    summary: "A mock customer-level P&L view that identifies margin leakage, low-profit accounts, and expansion opportunities.",
    value: "Shows commercial finance thinking and ability to connect data to margin expansion.",
  },
  {
    title: "Territory Potential Planner",
    category: "Go-to-Market Strategy",
    summary: "A planning tool that compares revenue, GDP, customer concentration, and seller coverage.",
    value: "Shows strategic planning, territory design, and cross-functional decision support.",
  },
  {
    title: "Executive Business Review Template",
    category: "Leadership Communication",
    summary: "A polished executive-ready business review structure with trend narratives and recommended actions.",
    value: "Shows senior-level communication and ability to translate analytics into decisions.",
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
    if (!form.description.trim() || !form.dueDate) return;

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
    setTickets((current) =>
      current.map((ticket) =>
        ticket.id === id ? { ...ticket, [field]: value } : ticket
      )
    );
  }

  return (
    <main>
      <nav className="nav">
        <div className="brand">Dennis Rosenbaum</div>
        <div className="navLinks">
          {["home", "projects", "ticketing", "about", "contact"].map((page) => (
            <button
              key={page}
              className={activePage === page ? "active" : ""}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </nav>

      {activePage === "home" && (
        <section className="hero">
          <div className="eyebrow"><Sparkles size={16} /> Strategic Finance • Analytics • Revenue Strategy</div>
          <h1>Portfolio of business tools built to turn data into decisions.</h1>
          <p>
            A curated set of lightweight projects demonstrating finance leadership,
            KPI design, business intelligence, sales strategy, and operational execution.
          </p>
          <div className="heroActions">
            <button onClick={() => setActivePage("projects")}>View Projects</button>
            <button className="secondary" onClick={() => setActivePage("ticketing")}>Open Ticketing Demo</button>
          </div>
        </section>
      )}

      {activePage === "projects" && (
        <section className="section">
          <h2>Project Portfolio</h2>
          <p className="sectionIntro">
            Each project is intentionally lightweight but designed to communicate strategic thinking,
            technical fluency, and real business judgment.
          </p>
          <div className="grid">
            {projectIdeas.map((project) => (
              <article className="card" key={project.title}>
                <div className="icon"><BarChart3 size={20} /></div>
                <p className="category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="value">{project.value}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {activePage === "ticketing" && (
        <section className="section">
          <div className="splitHeader">
            <div>
              <h2>BI / Analytics Ticketing System</h2>
              <p className="sectionIntro">
                A simple intake queue for analytics and Salesforce-related requests.
              </p>
            </div>
            <div className="stat">
              <strong>{tickets.length}</strong>
              <span>Live Tickets</span>
            </div>
          </div>

          <div className="ticketLayout">
            <form className="panel" onSubmit={createTicket}>
              <h3><Plus size={18} /> Create Ticket</h3>

              <label>Request Type</label>
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                {requestTypes.map((type) => <option key={type}>{type}</option>)}
              </select>

              <label>Description</label>
              <textarea
                placeholder="Briefly describe the business request..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
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
              <div className="queueTop">
                <h3><ClipboardList size={18} /> Ticket Queue</h3>
                <div className="search">
                  <Search size={16} />
                  <input placeholder="Search tickets..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
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
                          {ticket.fileName && <span className="file">Attachment: {ticket.fileName}</span>}
                        </td>
                        <td>{ticket.dueDate}</td>
                        <td>
                          <select value={ticket.category} onChange={(e) => updateTicket(ticket.id, "category", e.target.value)}>
                            {categories.map((category) => <option key={category}>{category}</option>)}
                          </select>
                        </td>
                        <td>
                          <select value={ticket.status} onChange={(e) => updateTicket(ticket.id, "status", e.target.value)}>
                            {statuses.map((status) => <option key={status}>{status}</option>)}
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
        <section className="section narrow">
          <h2>About</h2>
          <p>
            I am a finance and strategy leader operating at the intersection of FP&A,
            revenue analytics, sales strategy, and business intelligence. This site demonstrates
            how I think about turning messy business problems into scalable tools, executive-ready
            insights, and practical operating systems.
          </p>
          <div className="aboutGrid">
            <div><BriefcaseBusiness /><strong>Business Strategy</strong><span>KPI design, revenue performance, margin expansion.</span></div>
            <div><BarChart3 /><strong>Analytics</strong><span>Power BI, SQL, Salesforce, financial and operational reporting.</span></div>
            <div><ClipboardList /><strong>Execution</strong><span>Stakeholder intake, prioritization, adoption, and process design.</span></div>
          </div>
        </section>
      )}

      {activePage === "contact" && (
        <section className="section narrow">
          <h2>Contact</h2>
          <p>
            Interested in discussing Strategic Finance, FP&A, Revenue Strategy, or analytics leadership opportunities?
          </p>
          <div className="contactCard">
            <Mail />
            <span>Replace this with your preferred email address or LinkedIn profile.</span>
          </div>
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
