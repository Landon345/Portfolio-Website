import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { Hr } from "src/styled/StyledComponents";
import AboutMe from "src/aboutme/AboutMe";
import {
  lightTheme1,
  lightTheme2,
  darkTheme1,
  darkTheme2,
  darkPine,
} from "src/styled/portfolioTheme";
import Navbar from "src/navbar/Navbar";
import Footer from "src/footer/Footer";
import Projects from "src/projects/Projects";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [chosenTheme, setChosenTheme] = useState(
    localStorage.getItem("theme") || "light1"
  );

  useEffect(() => {
    localStorage.setItem("theme", chosenTheme);
  }, [chosenTheme]);

  const portfolioTheme = () => {
    if (chosenTheme === "light1") {
      return lightTheme1;
    } else if (chosenTheme === "light2") {
      return lightTheme2;
    } else if (chosenTheme === "dark1") {
      return darkTheme1;
    } else if (chosenTheme === "dark2") {
      return darkTheme2;
    } else if (chosenTheme === "darkPine") {
      return darkPine;
    } else {
      return lightTheme1;
    }
  };

  return (
    <Router>
      <ThemeProvider theme={portfolioTheme()}>
        <Box bg="Background" minH="100vh">
          <Navbar
            sidebar={sidebar}
            setSidebar={setSidebar}
            setChosenTheme={setChosenTheme}
            chosenTheme={chosenTheme}
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
