import React from "react";
import {Avatar,Box,Button,Card,CardContent,CardHeader,Typography,} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StarsIcon from "@mui/icons-material/Stars";
import developer from "../assets/developer.svg";
import Profile from "../assets/Profile.jpg";
import Layout from "../hoc/LandingPage_Layout";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import lopic from "../assets/network-mesh-wire-digital-technology-background_1017-27428.avif";
import "@fontsource/poiret-one";
import "@fontsource/dosis";

import Resum from '../assets/ResumePreview.png'
const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box
        sx={{
          height: "96%",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flex: 10,
          overflowX: "auto",
          overflowY: "auto",
          marginTop: "10px",
          paddingBottom: 4,
          backgroundColor: "#F0F8FF",
          gap: 2,
        }}
      >
        <Box
          className="child1"
          sx={{
            minWidth: 400,
            width: "40%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              height: "100%",
              flex: 2.6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{ width: "50%", fontFamily: "Poiret one",fontWeight:700 }}
            >
              Hey !, I'm Chandra Sekhar,
            </Typography>
            <Typography
              variant="h3"
              sx={{ width: "50%", fontFamily: "Poiret one",fontWeight:700 }}
            >
               MERN Stack Developer.
            </Typography>

            <Typography
              sx={{ width: "50%", fontFamily: "Poiret one", fontWeight: 600 }}
            >
              I'm a young web developer with around one year of experience, but
              a huge motivation to create something user friendly and beautiful.
            </Typography>

            <Box
              sx={{
                width: "21%",
                borderRight: 8,
                borderRadius: 25,
                borderColor: "#3498db",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "170px",
                  borderRadius: 15,
                  background: "linear-gradient(to right, #2c3e50, #3498db)",
                }}
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact me
              </Button>
            </Box>
            <Typography component="p">
              <StarsIcon color="primary" fontSize={"10"} /> MERN Stack Developer
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            minWidth: 400,
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            overflowY: "hidden",
            backgroundImage: `url(${lopic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Avatar src={Profile} sx={{ width: 450, height: 450 }} />
        </Box>

        <Box
          sx={{
            minWidth: 420,
            width: "85%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            background: "#F0F8FF",
            gap: 2,
            padding: 2,
          }}
        >
          <Card
            sx={{
              width: "20%",
              minWidth: 350,
              minHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              backgroundColor: "#fefdfe",
            }}
          >
            <CardHeader
              sx={{ display: "flex" }}
              avatar={
                <Avatar sx={{ bgcolor: "white" }}>
                  <DesignServicesIcon color="primary" fontSize="large" />
                </Avatar>
              }
              title={
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Dosis, sans-serif" }}
                >
                  My Services
                </Typography>
              }
            />
          </Card>
          <Card className="card-border">
            <CardHeader
              sx={{
                height: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              avatar={
                <Avatar sx={{ bgcolor: "white" }}>
                  <PhonelinkIcon color="success" fontSize="medium" />
                </Avatar>
              }
              title={
                <Typography className="titleC" variant="h6" color="primary">
                  {/* Responsive web design */}
                  Chandra Sekhar Resume
                </Typography>
              }
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
               
                <img onClick={()=>{navigate("/resume")}} style={{cursor:"pointer"}} src={Resum} alt="resume" width="320px" height='400px' />
                
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-border">
            <CardHeader
              sx={{
                height: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              avatar={
                <Avatar sx={{ bgcolor: "white" }}>
                  <AppRegistrationIcon color="secondary" fontSize="medium" />
                </Avatar>
              }
              title={
                <Typography className="titleC" variant="h6" color="primary">
                  Mobile app development{" "}
                </Typography>
              }
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Through my expertise and passion for app development, I have
                successfully crafted innovative and user-centric mobile
                applications that have transformed businesses and delighted
                users. With a meticulous approach to design, seamless
                functionality and a deep understanding of the latest technology
                trends.
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-border">
            <CardHeader
              sx={{
                height: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              avatar={
                <Avatar sx={{ bgcolor: "white" }}>
                  <DashboardIcon color="error" fontSize="medium" />
                </Avatar>
              }
              title={
                <Typography className="titleC" variant="h6" color="primary">
                  Dashboard Design
                </Typography>
              }
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Catering to the specific requirements of a dashboard design is
                one of my specialties in app development. Understanding the
                Importance of data visualization and intuitive user interfaces,
                I create responsive dashboards that provide a seamless
                experience across different devices.
              </Typography>
            </CardContent>
          </Card>

          
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
