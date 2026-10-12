import { ArrowRight, ArrowUpRight, Github, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

const heroNodes = [
  { label: "Sources", detail: "APIs · DBs · files", tone: "node-blue" },
  { label: "Pipelines", detail: "batch + streaming", tone: "node-cyan" },
  { label: "Data platform", detail: "lakehouse · warehouse", tone: "node-violet" },
  { label: "Consumers", detail: "analytics · ML", tone: "node-green" },
];

export function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> DATA ENGINEERING · UNITED STATES</div>
        <h1 id="hero-title">
          Building data systems
          <span> people can trust.</span>
        </h1>
        <p className="hero-role">{portfolio.headline}</p>
        <p className="hero-intro">{portfolio.intro}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore projects <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-meta">
          <a href={`mailto:${portfolio.email}`}><Mail size={15} aria-hidden="true" /> Contact me</a>
          <span className="meta-divider" aria-hidden="true" />
          <a href={portfolio.github} target="_blank" rel="noreferrer">
            <Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" />
          </a>
          <span className="hero-location">{portfolio.location}</span>
        </div>
        <p className="target-note">Open to {portfolio.targetRoles.join(" · ")} opportunities</p>
      </div>

      <div className="hero-visual-wrap">
        <div className="visual-label"><span>PLATFORM OVERVIEW</span><span>ILLUSTRATIVE</span></div>
        <div className="hero-visual" role="img" aria-label="Illustrative data platform flow from sources through pipelines and a data platform to analytics and machine learning consumers">
          <div className="visual-grid" />
          <div className="diagram-topline"><span className="live-indicator" /> DATA FLOW <span className="line-fill" /> 01 — 04</div>
          <div className="pipeline">
            {heroNodes.map((node, index) => (
              <div className="pipeline-step" key={node.label}>
                <div className={`pipeline-node ${node.tone}`}>
                  <span className="node-index">0{index + 1}</span>
                  <strong>{node.label}</strong>
                  <span>{node.detail}</span>
                </div>
                {index !== heroNodes.length - 1 && <span className="pipeline-connector" aria-hidden="true"><i /></span>}
              </div>
            ))}
          </div>
          <div className="visual-foot">
            <span><i className="legend-batch" /> Batch processing</span>
            <span><i className="legend-stream" /> Near-real-time</span>
          </div>
        </div>
        <div className="visual-caption">
          <span>Systems thinking, from source to signal.</span>
          <span className="caption-dot" />
        </div>
      </div>
    </section>
  );
}
