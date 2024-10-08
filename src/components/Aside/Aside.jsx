import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Toolbar,
} from "@mui/material";
import menuItems from "../../const/MenuItems";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../theme";
const drawerWidth = 240;

const Aside = ({ mobileOpen, handleDrawerToggle }) => {
  const { isDarkMode } = useThemeContext();

  const activeStyle = {
    backgroundColor: isDarkMode ? "#ffffff" : "#000000",
    color: isDarkMode ? "#000000" : "#ffffff",
    transition: "background-color 0.3s ease",
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              component={NavLink}
              to={item.route}
              key={index}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
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
            justifyContent: "center",
          },
        }}
      >
        {drawer}
      </Drawer>

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
