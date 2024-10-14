import { createContext, useState, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeStore = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Create a theme with accent colors for both light and dark modes
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#008080",
      },
      secondary: {
        main: "#005f5f",
      },
      background: {
        default: isDarkMode ? "#1e1e1e" : "#ffffff", // Dark for Dark Mode, White for Light Mode
        paper: isDarkMode ? "#1e1e1e" : "#f5f5f5", // Paper background
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#333333", // White text for Dark Mode, dark gray for Light Mode
        secondary: isDarkMode ? "#bbbbbb" : "#666666", // Light gray for Dark Mode, medium gray for Light Mode
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? "#00796b" : "#00bcd4", // Teal shades for both modes
            color: isDarkMode ? "#ffffff" : "#333333", // White text for Dark Mode, dark text for Light Mode
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5", // Drawer background colors
            color: isDarkMode ? "#ffffff" : "#333333", // White text for Dark Mode, dark text for Light Mode
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? "#00796b" : "#00bcd4", // Button primary color
            "&:hover": {
              backgroundColor: isDarkMode ? "#004d40" : "#0097a7", // Darker shade on hover
              color: "#ffffff", // White text on hover
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDarkMode ? "#ffffff" : "#333333", // Text color
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
