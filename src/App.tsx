import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { Hr } from "src/StyledComponents";
import AboutMe from "src/AboutMe";
import { darkPortfolioTheme, portfolioTheme } from "src/portfolioTheme";
import Navbar from "src/Navbar";
import Footer from "src/Footer";
import Projects from "src/Projects";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("dark") || "null");

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);
  return (
    <Router>
      <ThemeProvider
        theme={dark === "true" ? darkPortfolioTheme : portfolioTheme}
      >
        <Box bg="Background" minH="100vh">
          <Navbar
            sidebar={sidebar}
            setSidebar={setSidebar}
            setDark={setDark}
            dark={dark}
          />
          <Hr />
          <Switch>
            <Route path="/" exact>
              <Box onClick={() => setSidebar(false)} minH="85vh">
                <AboutMe />
              </Box>
            </Route>
            <Route path="/projects" exact>
              <Box onClick={() => setSidebar(false)} minH="85vh">
                <Projects />
              </Box>
            </Route>
          </Switch>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
