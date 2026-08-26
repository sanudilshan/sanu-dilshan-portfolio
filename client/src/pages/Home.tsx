/**
 * Terminal Atlas design philosophy: a field-note-like portfolio using asymmetry, proof-oriented
 * content, midnight surfaces, and Atlas Lime only for the actions and evidence that matter.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    title: "KUBO",
    kind: "Task management platform",
    evidence: "FASTAPI → REACT",
    system: "WORKFLOW / AUTH / DATA",
    image: "/manus-storage/sanu-kubo-project_14f8b74a.png",
    description:
      "A full stack task manager built around a FastAPI service layer and a focused React workspace.",
    detail:
      "Designed for clear task flow, durable data, and a low-friction collaboration experience.",
    stack: ["FastAPI", "React", "PostgreSQL", "Supabase"],
    accent: "lime",
  },
  {
    id: "02",
    title: "Expense Tracker API",
    kind: "Secure backend service",
    evidence: "JWT ↔ SQL SERVER",
    system: "ENDPOINTS / ROLES / REPORTS",
    image: "/manus-storage/sanu-expense-project_52e4dca1.png",
    description:
      "A JWT-protected .NET 8 REST API for income and expense tracking with role-aware access.",
    detail:
      "Includes 5+ endpoints, Admin/User roles, Swagger documentation, and monthly aggregation reports.",
    stack: ["ASP.NET Core 8", "C#", "SQL Server", "JWT", "Swagger"],
    accent: "blue",
  },
  {
    id: "03",
    title: "Commerce Operations",
    kind: "Full stack web application",
    evidence: "MVC → EF CORE",
    system: "CATALOG / CART / ORDERS",
    image: "/manus-storage/sanu-commerce-project_caedd7ec.png",
    description:
      "A commerce web app that connects customer-facing flows with product, cart, order, and admin operations.",
    detail:
      "Built with secure authentication, complete CRUD workflows, and a practical dashboard for operations.",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "EF Core"],
    accent: "orange",
  },
];

const experience = [
  {
    date: "JAN 2026 — JUN 2026",
    role: "ASP.NET Core Developer Intern",
    company: "Luminar Technolab · Kochi",
    copy: "Built RESTful APIs for authentication, authorization, and core operations. Implemented JWT and role-based access control, while designing and optimizing SQL Server structures, migrations, and LINQ queries.",
    tags: ["ASP.NET Core", "C#", "SQL Server", "JWT", "LINQ"],
  },
  {
    date: "FEB 2025 — MAY 2025",
    role: "AIML Intern",
    company: "Edubyheart India Pvt Ltd · Kochi",
    copy: "Built machine learning models and preprocessing workflows using Scikit-learn and TensorFlow. Automated data preparation steps, reducing manual handling effort by 20%.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Data Pipelines"],
  },
  {
    date: "OCT 2024 — DEC 2024",
    role: "Data Engineering Intern",
    company: "National Skill Development Corporation · New Delhi",
    copy: "Cleaned and transformed large datasets with SQL and contributed to ETL pipelines that combined data from multiple source systems.",
    tags: ["SQL", "ETL", "Data Transformation"],
  },
  {
    date: "OCT 2023 — NOV 2023",
    role: "Full Stack Developer Intern",
    company: "Inventeron Technologies · Bengaluru",
    copy: "Built responsive React components and integrated REST APIs using Node.js and MongoDB to support real-time data flow.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
];

const skillColumns = [
  {
    label: "API & backend",
    items: ["ASP.NET Core", "FastAPI", "REST APIs", "JWT / RBAC", "EF Core", "Swagger / OpenAPI"],
  },
  {
    label: "Interface layer",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI", "MVC"],
  },
  {
    label: "Data & workflow",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Git / GitHub", "Postman", "SOLID / Clean Code"],
  },
];

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

function AtlasMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`atlas-mark ${compact ? "atlas-mark--compact" : ""}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      const candidates = ["work", "experience", "stack", "contact"];
      const current = candidates.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight * 0.56;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />

      <header className="mobile-header">
        <a className="mobile-brand" href="#top" aria-label="Sanu Dilshan home" onClick={closeMenu}>
          <AtlasMark compact />
          <span>SANU<br />DILSHAN</span>
        </a>
        <button
          type="button"
          className="menu-trigger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </header>

      <aside className="identity-rail">
        <a className="brand-lockup" href="#top" aria-label="Sanu Dilshan home">
          <AtlasMark />
          <span className="brand-type">SANU<br />DILSHAN</span>
        </a>

        <div className="rail-atlas-id" aria-label="Terminal Atlas identity">
          <div className="rail-id-line"><span>ATLAS_INDEX</span><b>SD / 01</b></div>
          <p>SANU<br />DILSHAN</p>
          <div className="rail-coordinates"><span>08.5241° N</span><span>76.9366° E</span></div>
        </div>

        <div className="rail-role">
          <span className="eyebrow">FULL STACK DEVELOPER</span>
          <span className="rail-location">Kozhikode, Kerala, India</span>
        </div>

        <nav className="rail-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a className={activeSection === item.href.slice(1) ? "is-active" : ""} key={item.href} href={item.href}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="rail-bottom">
          <div className="availability">
            <span className="status-dot" />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href="https://github.com/SanuDilshan" target="_blank" rel="noreferrer" aria-label="Sanu’s GitHub"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/sanudilshan" target="_blank" rel="noreferrer" aria-label="Sanu’s LinkedIn"><Linkedin size={17} /></a>
            <a href="mailto:sanudilshan36@gmail.com" aria-label="Email Sanu"><Mail size={17} /></a>
          </div>
        </div>
      </aside>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
          </a>
        ))}
        <a className="mobile-menu-contact" href="mailto:sanudilshan36@gmail.com" onClick={closeMenu}>Start a conversation <ArrowUpRight size={17} /></a>
      </div>

      <div className="content-canvas" id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true" />
          <img className="hero-art" src="/manus-storage/sanu-atlas-hero_55d60693.png" alt="Abstract secure software architecture visualization" />
          <div className="hero-scrim" aria-hidden="true" />

          <div className="hero-topline intro-animate intro-delay-1">
            <span><b>SYS_01</b> / PORTFOLIO</span>
            <span>SCROLL TO EXPLORE <ArrowDownRight size={15} /></span>
          </div>

          <div className="hero-content">
            <p className="hero-kicker intro-animate intro-delay-2"><span /> I BUILD RELIABLE DIGITAL PRODUCTS</p>
            <h1 id="hero-heading" className="intro-animate intro-delay-3">Secure systems.<br /><em>Tangible</em> outcomes.</h1>
            <p className="hero-summary intro-animate intro-delay-4">
              Full stack developer working across <strong>.NET, Python, and React</strong> to build secure APIs, useful interfaces, and production-ready software.
            </p>
            <div className="hero-actions intro-animate intro-delay-5">
              <a className="button button--primary" href="#work">View selected work <ArrowDownRight size={18} /></a>
              <a className="button button--text" href="mailto:sanudilshan36@gmail.com">Let’s talk <ArrowUpRight size={17} /></a>
            </div>
          </div>

          <div className="proof-ledger intro-animate intro-delay-6">
            <span className="ledger-label">ENGINEERING FOCUS</span>
            <div className="ledger-row"><span>API security</span><b>JWT / RBAC</b></div>
            <div className="ledger-row"><span>Full stack</span><b>.NET · Python · React</b></div>
            <div className="ledger-row"><span>Data</span><b>SQL · NoSQL · ETL</b></div>
          </div>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-heading">
          <div className="section-label-row">
            <div className="section-label"><span>00</span><p>THE PRACTICE</p></div>
            <span className="field-code">FIELD_NOTE / 01 · ENGINEERING PRINCIPLES</span>
          </div>
          <div className="manifesto-body">
            <h2 id="manifesto-heading">Backend discipline.<br />Front-end <em>clarity.</em></h2>
            <div className="manifesto-copy">
              <p>I build from the contract outward: clear API design, security at the boundary, deliberate data models, and interfaces that make the work feel obvious.</p>
              <p>My experience spans <b>ASP.NET Core, FastAPI, React, SQL systems, machine learning, and data engineering</b>—a practical toolkit for turning product requirements into dependable software.</p>
            </div>
          </div>
          <div className="proof-strip" aria-label="Professional highlights">
            <div><small>PROOF_01</small><b>04</b><span>Relevant internships</span></div>
            <div><small>PROOF_02</small><b>05+</b><span>API endpoints in expense service</span></div>
            <div><small>PROOF_03</small><b>20%</b><span>Less manual data processing</span></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-heading">
          <div className="section-head">
            <div className="section-label"><span>01</span><p>SELECTED WORK</p></div>
            <p className="section-aside">A selection of systems built to solve real workflow, security, and data needs.</p>
          </div>
          <h2 id="work-heading" className="section-title">Build records<br /><em>worth opening.</em></h2>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card project-card--${project.accent}`} key={project.id}>
                <div className="project-meta">
                  <span>{project.id}</span>
                  <span>{project.kind}</span>
                </div>
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.title} conceptual project artwork`} />
                  <div className="image-evidence"><span>BUILD_RECORD</span><b>{project.evidence}</b></div>
                  <div className="image-system"><span>{project.system}</span><i /></div>
                  <div className="project-index">0{index + 1}</div>
                </div>
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-detail">
                    <p>{project.detail}</p>
                    <span className="project-link">PROJECT BRIEF <ArrowUpRight size={15} /></span>
                  </div>
                </div>
                <div className="tag-row">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-heading">
          <div className="experience-sticky">
            <div className="section-label"><span>02</span><p>EXPERIENCE</p></div>
            <h2 id="experience-heading">Learning by<br /><em>shipping.</em></h2>
            <p>Each role strengthened a different piece of my product engineering practice—from API foundations to data transformations and responsive application interfaces.</p>
            <a className="inline-link" href="/manus-storage/Sanu_Dilshan_Resume_3d97be21.pdf" target="_blank" rel="noreferrer">Open full résumé <Download size={15} /></a>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-entry" key={item.role}>
                <div className="timeline-date"><span>{String(index + 1).padStart(2, "0")}</span>{item.date}</div>
                <div className="timeline-detail">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.copy}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section section-pad" id="stack" aria-labelledby="stack-heading">
          <div className="section-label-row">
            <div className="section-label"><span>03</span><p>TOOLS / METHODS</p></div>
            <span className="field-code">CAPABILITY_MAP / VERIFIED TOOLKIT</span>
          </div>
          <div className="stack-heading">
            <h2 id="stack-heading">A practical<br /><em>working stack.</em></h2>
            <div className="stack-motto"><ShieldCheck size={21} /><span>Secure by design.<br />Clean by default.</span></div>
          </div>
          <div className="skills-grid">
            {skillColumns.map((column, index) => (
              <div className="skill-column" key={column.label}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{column.label}</h3>
                <ul>
                  {column.items.map((skill) => <li key={skill}><Check size={15} />{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="education-row">
            <Braces size={21} />
            <p><b>B.E. Computer Science & Engineering</b><span>Yenepoya Institute of Technology (VTU), Mangalore · 2021—2025 · CGPA 7.3 / 10.0</span></p>
            <span className="education-label">FOUNDATION</span>
          </div>
          <div className="stack-ledger"><span>METHOD</span><b>THINK IN CONTRACTS → BUILD IN LAYERS → SHIP WITH CLARITY</b><span>STATUS / ACTIVE</span></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-grid" aria-hidden="true" />
          <div className="section-label"><span>04</span><p>OPEN CHANNEL</p></div>
          <div className="contact-main">
            <h2 id="contact-heading">Build something<br /><em>dependable.</em></h2>
            <p>Hiring for a full stack or backend role where API discipline and calm execution matter? Let’s talk about the system your team needs next.</p>
            <a className="contact-mail" href="mailto:sanudilshan36@gmail.com">sanudilshan36@gmail.com <ArrowUpRight size={23} /></a>
          </div>
          <div className="contact-details">
            <a href="tel:+917025661621"><Phone size={16} />+91 70256 61621</a>
            <a href="https://www.linkedin.com/in/sanudilshan" target="_blank" rel="noreferrer"><Linkedin size={16} />linkedin.com/in/sanudilshan</a>
            <a href="https://github.com/SanuDilshan" target="_blank" rel="noreferrer"><Github size={16} />github.com/SanuDilshan</a>
          </div>
          <div className="contact-ledger"><span>SIGNAL / READY</span><b>FULL STACK · BACKEND · INDIA / REMOTE</b><span>CONNECT_04</span></div>
          <div className="contact-footer"><span>© {new Date().getFullYear()} SANU DILSHAN</span><span>BUILT WITH INTENT <AtlasMark compact /></span></div>
        </section>
      </div>
    </main>
  );
}
