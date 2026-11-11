import {
  AppBar,
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
  const navigateTo = (path) => {
    setAnchorEl(null);
    navigate(path);
  };
  return (
    <Box
      sx={{
        minWidth: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <AppBar component="nav" position="static">
          <Toolbar
            sx={{ background: "linear-gradient(to right, #2c3e50, #3498db)" }}
          >
            <IconButton aria-label="Go to home" edge="start" onClick={() => navigateTo("/")}>
              <Box component="img" src={MyLogo} alt="Chandrasekhar CS logo" width={48} height={48} sx={{ display: "block", borderRadius: "12px" }} />
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
                  <Button color="inherit" onClick={() => navigateTo("/")}>Home</Button>
                  <Button color="inherit" onClick={() => navigateTo("/work")}>Work</Button>
                  <Button color="inherit" onClick={() => navigateTo("/about")}>About</Button>
                  <Button color="inherit" onClick={() => navigateTo("/contact")}>Contact</Button>
                  <Button color="inherit" onClick={() => navigateTo("/resume")}>Resume</Button>
                </>
              ) : (
                <>
                  <IconButton
                    color="inherit"
                    id="navigation-menu-button"
                    aria-label="Open navigation menu"
                    aria-haspopup="menu"
                    aria-expanded={open}
                    aria-controls={open ? "basic-menu" : undefined}
                    onClick={(event) => {
                      setAnchorEl(event.currentTarget);
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    MenuListProps={{ "aria-labelledby": "navigation-menu-button" }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem onClick={() => navigateTo("/")}>Home</MenuItem>
                    <MenuItem onClick={() => navigateTo("/work")}>Work</MenuItem>
                    <MenuItem onClick={() => navigateTo("/about")}>About</MenuItem>
                    <MenuItem onClick={() => navigateTo("/contact")}>Contact</MenuItem>
                    <MenuItem onClick={() => navigateTo("/resume")}>Resume</MenuItem>
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
