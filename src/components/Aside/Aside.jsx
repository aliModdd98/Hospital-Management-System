import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import menuItems from "../../const/MenuItems";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../theme";

const drawerWidth = 240;

const Aside = ({ mobileOpen, handleDrawerToggle }) => {
  const { isDarkMode } = useThemeContext();

  const getActiveStyles = (isActive) => ({
    backgroundColor: isActive
      ? isDarkMode
        ? "#444444" // Light Gray for Dark Mode
        : "#000000" // Black for Light Mode
      : "transparent", // Default style when inactive
    color: isActive
      ? isDarkMode
        ? "#ffffff" // White text in Dark Mode
        : "#ffffff" // White text in Light Mode
      : isDarkMode
      ? "#ffffff" // Default white text in Dark Mode
      : "#333333", // Default dark text in Light Mode
    transition: "background-color 0.3s ease, color 0.3s ease",
  });

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
      }}
    >
      {/* Logo section */}
      <Box sx={{ textAlign: "center", padding: "16px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Qwitcher Grypen', cursive",
            fontWeight: 700,
          }}
        >
          A&M Care
        </Typography>
        <Typography variant="h6">Where Every Life Matters</Typography>
      </Box>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={NavLink}
              to={item.route}
              style={({ isActive }) => getActiveStyles(isActive)}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        height: "100vh",
      }}
      aria-label="management sections"
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "100vh",
            backgroundColor: "background.paper",
            color: "text.primary",
            justifyContent: "space-evenly",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "100vh",
            backgroundColor: "background.paper",
            color: "text.primary",
            justifyContent: "center",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Aside;
