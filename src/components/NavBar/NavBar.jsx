import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Switch,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeContext } from "../../theme";

const NavBar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { toggleTheme } = useThemeContext();
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        width: { sm: `calc(100% - 240px)` }, // Adjust width to fill the remaining space
        ml: { sm: `${240}px` }, // Move the NavBar to the right by the width of Aside
        borderLeft: "none", // Hide the left border
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" sx={{ fontWeight: "bold" }} noWrap>
          Hospital Management System
        </Typography>

        <Box>
          <IconButton color="inherit" onClick={toggleTheme}>
            <Switch />
          </IconButton>
          {/* User Avatar and Dropdown */}
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt="User Name" src="/path/to/user/image.jpg" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            // Adjust the dropdown to open directly below the Avatar icon
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
