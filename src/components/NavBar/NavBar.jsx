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
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NavBar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { toggleTheme } = useThemeContext();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (route) => {
    setAnchorEl(null);
    if (route) {
      navigate(route);
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: `${240}px` },
        borderLeft: "none",
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

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            flexGrow: 1,
            textAlign: "start",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          noWrap
        >
          Hospital Management System
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Theme Switch visible only on larger screens */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" } }} // Hide on small screens
            onClick={toggleTheme}
          >
            <Switch />
          </IconButton>

          {/* User Avatar and Dropdown */}
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt="User Name" src="/path/to/user/image.jpg" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem onClick={() => handleMenuClose("/dashBoard/account")}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose("/dashBoard/settings")}>
              Settings
            </MenuItem>
            {/* Theme Switch inside Dropdown for Small Screens */}
            <MenuItem>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Toggle Theme</Typography>
                <Switch onChange={toggleTheme} />
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
