import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "../../hoc/LandingPage_Layout";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          width: "99.8%",
          height:"100%",
          display: "flex",
          flexWrap:"wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Typography variant="h3">I'm Chandra Sekhar,</Typography>
          <Typography variant="h4">MERN Stack Developer based in India.</Typography>
          <Typography sx={{ marginY: 2 }}>
            I am a MERN Stack Developer with 3+ years of hands-on experience
            building and deploying web applications using React.js, Node.js,
            Express.js, MongoDB, and MySQL. I also work with Next.js and NestJS
            to build user-friendly interfaces and maintainable backend services.
          </Typography>

          <Typography variant="h6" color={"orange"}>
            Work Experience :{" "}
          </Typography>
          <List>
           
            <ListItem>
              <ListItemText>
                3+ years of experience delivering full-stack web applications,
                from frontend development and API design to deployment.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Designed RESTful APIs and implemented JWT authentication for
                secure application access.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Integrated Stripe and Razorpay payment gateways with webhooks
                to handle payment events.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Worked with Redis caching and MongoDB aggregation pipelines,
                and deployed applications on AWS and VPS servers.
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" color={"orange"}>
            Education :{" "}
          </Typography>
          <List>
           
            <ListItem>
              <ListItemText>
                2015-2018 : B.Sc ( Computer Science ){" "}
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h6" color={"orange"}>
            Skills :{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                Frontend: React.js, Next.js, HTML/CSS, Tailwind CSS, Material UI
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Backend: Node.js, Express.js, NestJS, RESTful APIs, JWT authentication</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Languages: JavaScript, TypeScript
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Data and caching: MongoDB, MySQL, Redis, MongoDB aggregation pipelines</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Payments: Stripe, Razorpay, webhooks</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Deployment: AWS (S3, EC2), VPS servers, Firebase</ListItemText>
            </ListItem>
          </List>
        </Box>
        <footer className="about-contact-footer" aria-labelledby="contact-footer-heading">
          <div className="contact-footer-intro">
            <div>
              <span className="contact-footer-eyebrow">LET'S CONNECT</span>
              <h2 id="contact-footer-heading">Good work starts with a conversation.</h2>
            </div>
            <p>Have a project in mind?<br />Find me here.</p>
          </div>
          <div className="contact-footer-links">
            <a className="contact-footer-link" href="mailto:chandrasekhar8120@gmail.com">
              <span className="contact-footer-icon email-icon"><FaEnvelope aria-hidden="true" /></span>
              <span className="contact-footer-details"><span className="contact-footer-label">Email</span><span className="contact-footer-value">chandrasekhar8120@gmail.com</span></span>
              <FaArrowUp className="contact-footer-arrow" aria-hidden="true" />
            </a>
            <a className="contact-footer-link" href="tel:+918332001832">
              <span className="contact-footer-icon phone-icon"><FaPhoneAlt aria-hidden="true" /></span>
              <span className="contact-footer-details"><span className="contact-footer-label">Call me</span><span className="contact-footer-value">+91 8332001832</span></span>
              <FaArrowUp className="contact-footer-arrow" aria-hidden="true" />
            </a>
            <a className="contact-footer-link" href="https://github.com/chandra8120" target="_blank" rel="noopener noreferrer">
              <span className="contact-footer-icon github-icon"><FaGithub aria-hidden="true" /></span>
              <span className="contact-footer-details"><span className="contact-footer-label">GitHub</span><span className="contact-footer-value">chandra8120</span></span>
              <FaArrowUp className="contact-footer-arrow" aria-hidden="true" />
            </a>
            <a className="contact-footer-link" href="https://www.linkedin.com/in/chandra-sekhar-2310bb263/" target="_blank" rel="noopener noreferrer">
              <span className="contact-footer-icon linkedin-icon"><FaLinkedin aria-hidden="true" /></span>
              <span className="contact-footer-details"><span className="contact-footer-label">LinkedIn</span><span className="contact-footer-value">Chandra Sekhar</span></span>
              <FaArrowUp className="contact-footer-arrow" aria-hidden="true" />
            </a>
          </div>
          <div className="contact-footer-signature"><span>Chandra Sekhar</span><span>MERN Stack Developer &middot; India</span></div>
        </footer>
      </Box>
    </Layout>
  );
};

export default About;
