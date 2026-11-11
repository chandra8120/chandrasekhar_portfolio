import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Layout from "../hoc/LandingPage_Layout";
import works from "../Constants/WorksConstants";
import "./Work.css";

const Work = () => (
  <Layout>
    <main className="work-page">
      <header className="work-hero">
        <div className="work-hero-copy">
          <span className="work-eyebrow">THE PORTFOLIO / CHANDRA SEKHAR</span>
          <h1>Ideas explored.<br /><span>Experiences built.</span></h1>
          <p>A look at the interfaces, products, and digital experiences in my portfolio. Different ideas, connected by a thoughtful approach to building for the web.</p>
          <div className="work-hero-actions">
            <a className="work-primary-link" href="#project-gallery">Explore the work <ArrowForwardIcon fontSize="small" /></a>
            <a className="work-github-link" href="https://github.com/chandra8120" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="small" /> Explore my GitHub <span className="work-new-tab">(new tab)</span></a>
          </div>
        </div>
        <aside className="work-developer-note" aria-label="Developer focus">
          <div className="work-note-top"><CodeIcon /><span>FROM INTERFACE TO INFRASTRUCTURE</span></div>
          <p>Thinking in systems.<br />Building for people.</p>
          <div className="work-note-rule" />
          <dl><div><dt>Experience</dt><dd>3+ years</dd></div><div><dt>Focus</dt><dd>Full-stack development</dd></div><div><dt>Based in</dt><dd>India</dd></div></dl>
        </aside>
      </header>

      <section className="work-gallery-section" id="project-gallery" aria-labelledby="work-gallery-heading">
        <div className="work-section-heading"><div><span className="work-eyebrow">A CLOSER LOOK</span><h2 id="work-gallery-heading">Selected work<span>.</span></h2></div><span className="work-project-count">{String(works.length).padStart(2, "0")} / PROJECT SHOWCASE</span></div>
        <div className="work-project-grid">
          {works.map((project, index) => (
            <article className={`work-project-card work-project-${project.id}`} key={project.id} aria-labelledby={`project-title-${project.id}`}>
              <div className="work-project-visual">
                <img src={project.image} alt={project.alt} width={1920} height={1080} loading="lazy" />
                <span className="work-project-category">{project.category}</span>
              </div>
              <div className="work-project-body">
                <div className="work-project-title"><h3 id={`project-title-${project.id}`}>{project.PName}</h3><span className="work-project-number">/{String(index + 1).padStart(2, "0")}</span></div>
                <p>{project.description}</p>
                <ul className="work-project-tags" aria-label={`${project.PName} themes`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-stack" aria-labelledby="work-stack-heading"><div><span className="work-eyebrow">BEHIND THE WORK</span><h2 id="work-stack-heading">My development toolkit.</h2></div><ul>{["React.js", "Next.js", "Node.js", "Express.js", "NestJS", "MongoDB", "MySQL", "Redis", "AWS"].map(tool => <li key={tool}>{tool}</li>)}</ul></section>
      <section className="work-contact" aria-labelledby="work-contact-heading"><div><span className="work-eyebrow">YOUR NEXT IDEA</span><h2 id="work-contact-heading">Let's build something<br />worth putting out there.</h2><p>Have a project in mind? I'd love to hear about it.</p></div><Link to="/contact">Start a conversation <ArrowForwardIcon fontSize="small" /></Link></section>
    </main>
  </Layout>
);

export default Work;
