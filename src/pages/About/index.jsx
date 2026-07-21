import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Layout from "../../hoc/LandingPage_Layout";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaMobile } from "react-icons/fa";

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
          <Typography variant="h4">Based in India.</Typography>

          <Typography variant="h6" color={"orange"}>
            Work Experience :{" "}
          </Typography>
          <List>
           
            <ListItem>
              <ListItemText>Experienced MERN Stack Developer with 3+ years of hands-on expertise</ListItemText>
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
                MERN Stack: MongoDB, Express.js, React.js, Node.js
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Databases: MongoDB, MySQL</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                JavaScript, TypeScript, HTML/CSS
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>AWS (S3, EC2), Firebase</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Tailwind CSS, Material UI</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            border: 2,
            width: "65%",
            borderColor: "#3498db",
            minWidth:350,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "black",
            gap: 4,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            color: "white",
            padding:2
          }}
        >
          <Box>
            <Typography
              component="a"
              href="mailto:chandrasekhar8120@gmail.com"
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {" "}
              <FcGoogle /> <>chandrasekhar8120@gmail.com</>
            </Typography>
          </Box>
          <Box>
            <Typography
              component="a"
              href="https://github.com/chandra8120"
              target="_blank"
              rel="noopener noreferrer"
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <FaGithub /> chandra8120
            </Typography>
          </Box>
          <Box>
            <Typography
              component="a"
              href="tel:+918332001832"
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <FaMobile />
              Mobile No : 8332001832
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
