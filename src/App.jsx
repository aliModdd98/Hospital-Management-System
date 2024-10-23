import { CssBaseline } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeStore } from "./theme";
import Navigation from "./router/Navigation";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <ThemeStore>
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <Navigation />
        </Router>
      </Provider>
    </ThemeStore>
  );
};

export default App;
