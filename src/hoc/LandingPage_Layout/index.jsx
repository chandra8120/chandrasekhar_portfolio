import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import MyLogo from "../../assets/Logo-C.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShadowCursor from "../../ShadowCursor";

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        minWidth: 350,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ minHeight: 55 }}>
        <AppBar component="nav">
          <Toolbar
            sx={{ background: "linear-gradient(to right, #2c3e50, #3498db)" }}
          >
            <IconButton edge="start" onClick={() => navigate("/")}>
              <Avatar src={MyLogo} sx={{ width: 56, height: 56 }} />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              {!isSmallScreen ? (
                <>
                  <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                  <Button color="inherit" onClick={() => navigate("/work")}>Work</Button>
                  <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
                  <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
                  <Button color="inherit" onClick={() => navigate("/resume")}>Resume</Button>
                </>
              ) : (
                <>
                  <IconButton
                    color="inherit"
                    aria-controls="basic-menu"
                    onClick={(event) => {
                      setAnchorEl(event.currentTarget);
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                    <MenuItem onClick={() => navigate("/work")}>Work</MenuItem>
                    <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
                    <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
                    <MenuItem onClick={() => navigate("/resume")}>Resume</MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="sectionContainer">{children}</Box>
      <ShadowCursor />
    </Box>
    
  );
};

export default Layout;
