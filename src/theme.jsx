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

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#000" : "#fff", // Light Blue for Dark Mode, Blue for Light Mode
      },
      secondary: {
        main: isDarkMode ? "#bbbbbb" : "#333333", // Light Pink for Dark Mode, Pink for Light Mode
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
            backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
            color: isDarkMode ? "#ffffff" : "#333333",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
            color: isDarkMode ? "#ffffff" : "#333333",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#0d0f0fc9",
              color: "#ffffff",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDarkMode ? "#ffffff" : "#333333",
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
