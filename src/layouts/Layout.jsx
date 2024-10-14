import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import Aside from "../components/Aside/Aside";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Layout = ({ toggleTheme, isDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* NavBar */}
      <NavBar
        handleDrawerToggle={handleDrawerToggle}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      {/* Aside / Sidebar */}
      <Aside
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        sx={{ flexShrink: 0 }}
      />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
