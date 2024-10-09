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

  // Function to apply active styles based on dark/light mode
  const getActiveStyles = (isActive) => ({
    backgroundColor: isActive ? "#008080" : "transparent", // Teal background for active items
    color: isActive ? "#ffffff" : isDarkMode ? "#ffffff" : "#333333", // White text for active, gray for inactive
    fontWeight: isActive ? 600 : 400, // Bold text for active
    boxShadow: isActive ? "0px 4px 10px rgba(0, 128, 128, 0.6)" : "none", // Subtle shadow for active
    transform: isActive ? "scale(1.05)" : "scale(1)", // Slight scale effect for active
    borderRadius: "8px", // Rounded corners
    transition: "all 0.3s ease-in-out", // Smooth transition
    padding: "10px 15px", // Adjust padding for a more button-like feel
    margin: "5px 5px", // Add margin between items for spacing
  });

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Logo section */}
      <Box sx={{ textAlign: "center", padding: "16px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Qwitcher Grypen', cursive",
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          A&M Care
        </Typography>
        <Typography variant="h6">Where Every Life Matters</Typography>
      </Box>
      <Toolbar />
      <Box sx={{ overflow: "hidden" }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={NavLink}
              to={item.route}
              style={({ isActive }) => getActiveStyles(isActive)} // Apply active styles
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
