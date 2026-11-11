import React from "react";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import Layout from "../hoc/LandingPage_Layout";
import Profile from "../assets/Profile.jpg";
import ResumePreview from "../assets/ResumePreview.png";
import "./Home.css";

const services = [
  {
    number: "01", icon: CodeIcon, title: "Interfaces built for people.",
    description: "Responsive web applications with thoughtful interfaces and a reliable foundation for your next idea.",
    technologies: ["React.js", "Next.js", "TypeScript"], className: "interface-card",
  },
  {
    number: "02", icon: StorageIcon, title: "The engine behind the experience.",
    description: "RESTful APIs, JWT authentication, and payment integrations with Stripe and Razorpay webhooks.",
    technologies: ["Node.js", "Express.js", "NestJS"], className: "backend-card",
  },
  {
    number: "03", icon: DashboardIcon, title: "From data to production.",
    description: "Useful dashboards, MongoDB aggregation, Redis caching, and dependable deployments on AWS and VPS servers.",
    technologies: ["MongoDB", "MySQL", "Redis", "AWS"], className: "data-card",
  },
];

const Home = () => (
  <Layout>
    <main className="developer-home">
      <section className="home-intro" aria-labelledby="home-heading">
        <div className="intro-copy">
          <span className="home-eyebrow">DEVELOPER / PROBLEM SOLVER</span>
          <h1 id="home-heading">Hey !, I'm Chandra Sekhar,</h1>
          <p className="intro-headline">Ideas into interfaces.<br /><span>Code into experiences.</span></p>
          <p className="intro-description">MERN Stack Developer with 3+ years of hands-on experience building and deploying web applications. From React and Next.js to Node.js and NestJS, I connect the details that make a product work.</p>
          <div className="intro-actions">
            <Link className="home-button primary-button" to="/contact">Let's work together <ArrowForwardIcon fontSize="small" /></Link>
            <Link className="home-text-link" to="/work">Explore my work <ArrowForwardIcon fontSize="small" /></Link>
          </div>
        </div>
        <div className="developer-profile">
          <div className="profile-image-frame"><img src={Profile} alt="Chandra Sekhar" width="360" height="360" /></div>
          <div className="profile-caption"><span className="profile-dot" /> MERN Stack Developer <span className="profile-location">Based in India</span></div>
          <div className="experience-note"><strong>3+</strong><span>years of building<br />for the web</span></div>
        </div>
      </section>

      <section className="home-capabilities" aria-labelledby="capabilities-heading">
        <div className="capabilities-heading">
          <div><span className="home-eyebrow">WHAT I BRING TO THE TABLE</span><h2 id="capabilities-heading">Built across the stack.</h2></div>
          <p>Frontend finesse. Backend thinking.<br />One connected experience.</p>
        </div>
        <div className="developer-card-grid">
          {services.map(({ number, icon: Icon, title, description, technologies, className }) => (
            <article className={`developer-service-card ${className}`} key={number}>
              <div className="service-card-top"><span className="service-icon"><Icon /></span><span className="service-number">/{number}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="technology-tags" aria-label={`${title} technologies`}>{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
            </article>
          ))}
          <article className="developer-resume-card">
            <div className="resume-card-heading"><span className="resume-icon"><DescriptionIcon /></span><span>THE PERSON BEHIND THE CODE</span></div>
            <div className="resume-card-content">
              <Link className="resume-preview-link" to="/resume" aria-label="View resume">
                <img src={ResumePreview} alt="First page of Chandra Sekhar's updated MERN Stack Developer resume" width="894" height="1264" loading="lazy" />
                <span>View resume <ArrowForwardIcon fontSize="small" /></span>
              </Link>
              <div className="resume-card-summary">
                <h3>My developer journey.</h3>
                <p>Chandra Sekhar Resume<br /><span>MERN Stack Developer / 3+ years</span></p>
                <a className="home-button resume-download" href="/Resume.pdf" download="Chandra_Sekhar_Mern_Stack_Resume.pdf"><DownloadIcon fontSize="small" /> Download resume</a>
              </div>
            </div>
          </article>
        </div>
        <div className="home-toolkit">
          <span className="home-eyebrow">MY EVERYDAY TOOLKIT</span>
          <ul className="technology-tags" aria-label="Developer toolkit">{["React", "Next.js", "Node.js", "NestJS", "MongoDB", "TypeScript", "Git", "AWS"].map(technology => <li key={technology}>{technology}</li>)}</ul>
        </div>
      </section>
    </main>
  </Layout>
);

export default Home;
