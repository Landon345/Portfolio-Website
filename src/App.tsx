import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Box } from "@chakra-ui/core";
import AboutMe from "src/AboutMe";
import portfolioTheme from "src/portfolioTheme";
import Navbar from "src/Navbar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={portfolioTheme}>
        <Box bg="Background" minH="100vh">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <hr />
          <Switch>
            <Route path="/" exact>
              <Box onClick={() => setSidebar(false)} minH="85vh">
                <AboutMe />
              </Box>
            </Route>
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
