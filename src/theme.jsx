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

  // Create a theme with attractive accent colors (blue/teal) for both light and dark modes
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#00bcd4" : "#00796b", // Teal Blue for Dark Mode, Dark Green for Light Mode
      },
      secondary: {
        main: isDarkMode ? "#ff4081" : "#f50057", // Bright Pink for Dark Mode, Deep Pink for Light Mode
      },
      background: {
        default: isDarkMode ? "#121212" : "#ffffff", // Very Dark Gray for Dark Mode, White for Light Mode
        paper: isDarkMode ? "#1e1e1e" : "#f5f5f5", // Dark Gray for Dark Mode, Light Gray for Light Mode
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#333333", // White for Dark Mode, Dark Gray for Light Mode
        secondary: isDarkMode ? "#bbbbbb" : "#666666", // Light Gray for Dark Mode, Medium Gray for Light Mode
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            width: "100%",
            textTransform: "none",
            borderRadius: 8,
            backgroundColor: isDarkMode ? "#00796b" : "#00bcd4", // Dark Teal for Dark Mode, Light Teal for Light Mode
            color: isDarkMode ? "#ffffff" : "#333333",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5", // Dark Gray for Dark Mode, Light Gray for Light Mode
            color: isDarkMode ? "#ffffff" : "#333333", // White for Dark Mode, Dark Text for Light Mode
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? "#00796b" : "#00bcd4", // Button color matches primary color
            "&:hover": {
              backgroundColor: isDarkMode ? "#004d40" : "#0097a7", // Darker shade on hover
              color: "#ffffff",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDarkMode ? "#ffffff" : "#333333", // Text color matches the current mode
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
