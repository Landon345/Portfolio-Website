import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";
import GitHubIcon from "src/assets/githubIcon.png";
import linkedinIcon from "src/assets/linkedinIcon.png";

function Navbar() {
  return (
    <Flex justifyContent="center" alignItems="center" py="10px">
      <Box w="50%" d="flex" justifyContent="center">
        <Link to="/">
          <Box
            color="Highlight"
            fontSize="45px"
            fontWeight="bold"
            fontFamily="TimesNewRoman"
          >
            Landon Schlangen
          </Box>
        </Link>
      </Box>

      <Box w="50%" d="flex" justifyContent="space-around" alignItems="center">
        <Link to="/">
          <Box color="ButtonText" fontSize="20px" fontWeight="bolder">
            Home
          </Box>
        </Link>
        <Link to="/projects">
          <Box color="ButtonText" fontSize="20px" fontWeight="bolder">
            Projects
          </Box>
        </Link>
      </Box>

      <Box d="flex" marginRight="40px">
        <a href="https://github.com/Landon345" target="_blank">
          <img src={GitHubIcon} alt="Github" height="30px" />
        </a>
        <a href="https://www.linkedin.com/in/landon-schlangen-a3989a16b/">
          <img src={linkedinIcon} alt="LinkedIn" height="30px" />
        </a>
      </Box>
    </Flex>
  );
}

export default withRouter(Navbar);
