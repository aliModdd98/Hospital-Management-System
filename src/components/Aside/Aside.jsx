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
import PropTypes from "prop-types";

const drawerWidth = 240;

const Aside = ({ mobileOpen, handleDrawerToggle }) => {
  // Function to apply active styles based on dark/light mode
  const getActiveStyles = (isActive) => ({
    backgroundColor: isActive ? "#008080" : "transparent",
    color: isActive ? "#ffffff" : "#333333",
    fontWeight: isActive ? "bold" : 400,
    boxShadow: isActive ? "0px 4px 10px rgba(0, 128, 128, 0.6)" : "none",
    transform: isActive ? "scale(1.05)" : "scale(1)",
    borderRadius: "20px",
    transition: "all 0.3s ease-in-out",
    padding: "10px 15px",
    margin: "5px 0",
    width: "100%",
    display: "flex", // Ensure flex display for row alignment
    alignItems: "center", // Center items vertically
  });

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "flex-start",
        overflow: "hidden",
      }}
    >
      {/* Logo Section */}
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
      <Box sx={{ overflow: "hidden", height: "100%" }}>
        <List sx={{ width: "100%" }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button="true"
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
            marginTop: "3rem",
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
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
Aside.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default Aside;
