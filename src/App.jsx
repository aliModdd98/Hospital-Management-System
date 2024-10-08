import { CssBaseline } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeStore } from "./theme";
import Navigation from "./router/Navigation";

const App = () => {
  return (
    <ThemeStore>
      <Router>
        <CssBaseline />
        <Navigation />
      </Router>
    </ThemeStore>
  );
};

export default App;
