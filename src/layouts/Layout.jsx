import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import Aside from "../components/Aside/Aside";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Layout = ({ toggleTheme, isDarkMode }) => {
  // Accept props
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* NavBar */}
      <NavBar
        handleDrawerToggle={handleDrawerToggle}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />{" "}
      {/* Pass down the props */}
      {/* Aside / Sidebar */}
      <Aside mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowY: "auto",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
