import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { css } from "emotion";
import { Box, Flex } from "@chakra-ui/core";
import {
  GitHubIcon,
  GitHubIcon3,
  linkedinIcon,
  menuIcon,
  menuIcon2,
} from "src/assets/pictures";
import { NavbarLink, SidebarLink, SidebarContainer } from "src/navbar/Styles";
import { Icon, Switch } from "@chakra-ui/core";
import { motion } from "framer-motion";
import { useMedia } from "react-media";

type NavbarProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
  dark: string;
  setDark: (dark: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  sidebar,
  setSidebar,
  dark,
  setDark,
}) => {
  const MEDIA_QUERIES = {
    small: "(max-width: 860px)",
    large: "(min-width: 861px)",
  };
  const matches = useMedia({ queries: MEDIA_QUERIES });

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        py="10px"
        mx="3%"
        overflowX="hidden"
      >
        <Box w="20%" d="flex" alignItems="center" justifyContent="center">
          <Box color="Headline" mr="10px">
            Dark{" "}
          </Box>

          <Switch
            size="sm"
            isChecked={dark == "true"}
            onChange={() => setDark(dark === "true" ? "null" : "true")}
          />
        </Box>
        <Box w="50%" d="flex" alignItems="center">
          <Link to="/">
            <Box
              color="Highlight"
              fontSize="45px"
              fontWeight="bold"
              fontFamily="TimesNewRoman"
              className={css`
                @media only screen and (max-width: 860px) {
                  font-size: 40px;
                }
              `}
            >
              Landon Schlangen
            </Box>
          </Link>
        </Box>
        {matches.large && (
          <>
            <Box
              w="30%"
              d="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Link to="/">
                <NavbarLink>About Me</NavbarLink>
              </Link>
              <Link to="/projects">
                <NavbarLink>Projects</NavbarLink>
              </Link>
            </Box>

            <Box d="flex">
              <Box marginRight="10px">
                <a
                  href="https://github.com/Landon345"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dark === "true" ? (
                    <img src={GitHubIcon3} alt="Github" height="30px" />
                  ) : (
                    <img src={GitHubIcon} alt="Github" height="30px" />
                  )}
                </a>
              </Box>
              <Box>
                <a
                  href="https://www.linkedin.com/in/landon-schlangen-a3989a16b/"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" height="30px" />
                </a>
              </Box>
            </Box>
          </>
        )}

        {matches.small && (
          <Box
            onClick={() => setSidebar(!sidebar)}
            position="absolute"
            top="6"
            right="40px"
          >
            {sidebar ? (
              <Box cursor="pointer">
                <Icon name="close" size="30px" color="Headline" />
              </Box>
            ) : (
              <>
                {dark === "true" ? (
                  <Box cursor="pointer">
                    <img src={menuIcon2} alt="menu" height="30px" />
                  </Box>
                ) : (
                  <Box cursor="pointer">
                    <img src={menuIcon} alt="menu" height="30px" />
                  </Box>
                )}
              </>
            )}
          </Box>
        )}

        {matches.small && (
          <>
            <SidebarContainer open={sidebar}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box>
                  <Link to="/">
                    <SidebarLink>About Me</SidebarLink>
                  </Link>
                </Box>
                <Box>
                  <Link to="/projects">
                    <SidebarLink>Projects</SidebarLink>
                  </Link>
                </Box>

                <Box>
                  <a
                    href="https://github.com/Landon345"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SidebarLink>
                      <Box mr="10px">GitHub</Box>
                      {dark === "true" ? (
                        <img src={GitHubIcon3} alt="Github" height="30px" />
                      ) : (
                        <img src={GitHubIcon} alt="Github" height="30px" />
                      )}
                    </SidebarLink>
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.linkedin.com/in/landon-schlangen-a3989a16b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SidebarLink>
                      <Box mr="10px">LinkedIn</Box>
                      <img src={linkedinIcon} alt="LinkedIn" height="30px" />
                    </SidebarLink>
                  </a>
                </Box>
              </motion.div>
            </SidebarContainer>
          </>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
