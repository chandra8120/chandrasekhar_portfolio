import { Box, Typography } from "@mui/material";
import React from "react";
import Layout from "../hoc/LandingPage_Layout";
import works from "../Constants/WorksConstants";
const Work = () => {
  const ProjectTemplate = ({ title, image, description, width, height }) => {
    return (
      <Box sx={{ width: width || "100%", height: height || "100%",minWidth:350 }}>
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "80%",
          }}
        ></Box>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
      </Box>
    );
  };
  return (
    <Layout>
      <Box
        sx={{
          height: "98.8%",      
          width: "99.7%",
          display: "flex",
          flex: 5,
          flexDirection: "column",
          alignItems: "flex-end",
          paddingTop:5,
          overflow:"auto"
        }}
      >
        <Box
          sx={{
            width: "94%",
            flex: 4.8,
            display: "flex",
            flexDirection: "column",
            gap:6
          }}
        >
          <Typography variant="h3" sx={{ flex: 0.2, width: "52%"}}>
            A look at what I've done while I continue to imagine the things I
            can do.
          </Typography>

          <Box
            sx={{
              flex: 4.6,
              height:"40%",
              width:"99.8%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            {works.map((item, i) => {
              return (
                <ProjectTemplate
                  key={i}
                  title={item?.PName}
                  image={item?.image}
                  description={item?.description}
                  width={650}
                  height={650}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Work;
