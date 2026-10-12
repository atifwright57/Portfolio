import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Braces,
  Check,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { portfolio, type ProjectEntry } from "../data/portfolio";

const aboutPrinciples = [
  { icon: ShieldCheck, title: "Secure by design", copy: "Governance, access controls, and sensitive-data handling are part of the platform—not an afterthought." },
  { icon: Activity, title: "Observable in production", copy: "Quality, freshness, reconciliation, and failure signals make operational health visible." },
  { icon: Layers3, title: "Built to evolve", copy: "Reusable patterns and maintainable models help data systems scale with changing needs." },
];

const skillIcons = [Braces, Boxes, Cloud, Database, Radio, GitBranch, ShieldCheck, Workflow];

export function AboutSection() {
  return (
    <section className="section-wrap content-section" id="about" aria-labelledby="about-title">
      <SectionHeading number="01" kicker="ABOUT" title="Engineering for the long run." id="about-title" />
      <div className="about-layout">
        <div className="about-copy">
          <p className="about-lead">{portfolio.summary}</p>
          <p>{portfolio.philosophy}</p>
          <p className="resume-evidence"><span className="evidence-mark">●</span> Profile grounded in the supplied resume</p>
        </div>
        <div className="principles">
          {aboutPrinciples.map(({ icon: Icon, title, copy }, index) => (
            <article className="principle-card" key={title}>
              <span className="principle-index">0{index + 1}</span>
              <span className="principle-icon"><Icon size={18} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section-wrap content-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading number="02" kicker="TECHNICAL TOOLKIT" title="Practical depth across the stack." id="skills-title" />
      <div className="skills-grid">
        {portfolio.skills.map((group, index) => {
          const Icon = skillIcons[index] ?? Boxes;
          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-icon"><Icon size={17} aria-hidden="true" /></span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section-wrap content-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading number="03" kicker="CAREER" title="Experience across data-intensive domains." id="experience-title" />
      <div className="experience-list">
        {portfolio.experience.map((role, index) => (
          <article className="experience-item" key={role.company}>
            <div className="experience-marker" aria-hidden="true">
              <span className={role.current ? "marker-current" : ""} />
              {index !== portfolio.experience.length - 1 && <i />}
            </div>
            <div className="experience-card">
              <div className="experience-topline">
                <div>
                  <div className="experience-company-row">
                    <h3>{role.company}</h3>
                    {role.current && <span className="current-badge">CURRENT</span>}
                  </div>
                  <p className="experience-title">{role.title}</p>
                </div>
                <span className="experience-dates">{role.dates}</span>
              </div>
              <p className="experience-domain">{role.summary}</p>
              <ul className="experience-points">
                {role.highlights.map((point) => <li key={point}><Check size={14} aria-hidden="true" /> <span>{point}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <article className="project-card">
      <div className="project-head">
        <span className="project-number">0{index + 1} / CASE STUDY</span>
        <span className="project-type">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-problem">{project.problem}</p>
      <div className="project-flow" role="img" aria-label={`Illustrative flow: ${project.flow.join(" to ")}`}>
        {project.flow.map((step, stepIndex) => (
          <span className="flow-item" key={step}>
            <span className="flow-node">{step}</span>
            {stepIndex < project.flow.length - 1 && <ArrowRight size={13} aria-hidden="true" />}
          </span>
        ))}
      </div>
      <div className="project-detail">
        <span className="detail-label">Architecture</span>
        <p>{project.architecture}</p>
      </div>
      <div className="project-detail">
        <span className="detail-label">Resume-described contribution</span>
        <p>{project.contribution}</p>
      </div>
      <div className="project-detail">
        <span className="detail-label">Engineering considerations</span>
        <ul className="challenge-list">
          {project.challenges.map((challenge) => <li key={challenge}><ArrowDownRight size={13} aria-hidden="true" />{challenge}</li>)}
        </ul>
      </div>
      <div className="project-tech">
        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      <p className="project-disclaimer">Illustrative architecture · employer / personal-project attribution not specified in resume</p>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="section-wrap content-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading number="04" kicker="SELECTED PROJECT AREAS" title="Problems worth engineering well." id="projects-title" />
      <p className="section-intro">
        Four project areas named in the resume. These are presented as evidence-based case studies—not attributed to a specific employer or labeled as personal work.
      </p>
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
    </section>
  );
}

const architectureLayers = [
  {
    label: "01 / INGEST",
    title: "Connect",
    detail: "APIs · databases · files",
    icon: Cloud,
    tone: "arch-blue",
  },
  {
    label: "02 / PROCESS",
    title: "Compute",
    detail: "Batch · streaming",
    icon: Workflow,
    tone: "arch-cyan",
  },
  {
    label: "03 / QUALITY",
    title: "Validate",
    detail: "Tests · reconciliation",
    icon: Check,
    tone: "arch-violet",
  },
  {
    label: "04 / STORE",
    title: "Curate",
    detail: "Lakehouse · warehouse",
    icon: Database,
    tone: "arch-green",
  },
  {
    label: "05 / OPERATE",
    title: "Orchestrate",
    detail: "Airflow · monitoring",
    icon: Activity,
    tone: "arch-orange",
  },
  {
    label: "06 / CONSUME",
    title: "Deliver",
    detail: "Analytics · ML",
    icon: Boxes,
    tone: "arch-blue",
  },
];

export function ArchitectureSection() {
  return (
    <section className="architecture-band" aria-labelledby="architecture-title">
      <div className="section-wrap architecture-inner">
        <div className="architecture-heading">
          <div>
            <div className="section-kicker"><span>05</span> ARCHITECTURE SHOWCASE</div>
            <h2 id="architecture-title">A dependable path from raw data to decisions.</h2>
          </div>
          <p>Illustrative reference architecture based on the capabilities described in the resume. This is not a diagram of a verified employer production system.</p>
        </div>
        <div className="architecture-canvas" role="img" aria-label="Illustrative data architecture: connect source systems, process batch and streaming data, validate quality, curate in a lakehouse or warehouse, orchestrate and monitor, then serve analytics and machine learning">
          <div className="architecture-rail"><span>DATA LIFECYCLE</span><i /></div>
          <div className="architecture-flow">
            {architectureLayers.map(({ label, title, detail, icon: Icon, tone }, index) => (
              <div className="architecture-step" key={title}>
                <div className={`architecture-node ${tone}`}>
                  <span className="architecture-node-icon"><Icon size={17} aria-hidden="true" /></span>
                  <span className="architecture-label">{label}</span>
                  <strong>{title}</strong>
                  <span className="architecture-detail">{detail}</span>
                </div>
                {index !== architectureLayers.length - 1 && <ArrowRight className="architecture-arrow" size={17} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="architecture-foundation">
            <span><LockKeyhole size={14} aria-hidden="true" /> Governance & access controls</span>
            <span><Activity size={14} aria-hidden="true" /> Observability & reliability</span>
            <span><GitBranch size={14} aria-hidden="true" /> Infrastructure & delivery automation</span>
          </div>
        </div>
        <div className="architecture-caption"><span><span className="caption-dot" /> EXAMPLE ONLY</span><span>Patterns, not a claim about a specific production implementation</span></div>
      </div>
    </section>
  );
}

export function SectionHeading({ number, kicker, title, id }: { number: string; kicker: string; title: string; id: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span> {kicker}</div>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function FooterLink() {
  return <a className="footer-top" href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>;
}
