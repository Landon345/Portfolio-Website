import React from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Box } from "@chakra-ui/core";
import Home from "src/Home";
import portfolioTheme from "src/portfolioTheme";
import Navbar from "src/Navbar";

function App() {
  return (
    <Router>
      <ThemeProvider theme={portfolioTheme}>
        <Box bg="Background" minH="100vh">
          <Navbar />
          <hr />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
