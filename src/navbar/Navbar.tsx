import React from "react";
import { Link } from "react-router-dom";
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
import { Icon, Select } from "@chakra-ui/core";
import { useMedia } from "react-media";

type NavbarProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
  chosenTheme: string;
  setChosenTheme: (dark: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  sidebar,
  setSidebar,
  chosenTheme,
  setChosenTheme,
}) => {
  const MEDIA_QUERIES = {
    // xs: '(max-width: 470px)',
    small: "(max-width: 920px)",
    large: "(min-width: 921px)",
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
        <Box
          d="flex"
          justifyContent="space-around"
          w="70%"
          className={css`
            @media only screen and (max-width: 760px) {
              margin-right: 15%;
              flex-wrap: wrap;
            }
          `}
        >
          <Box d="flex" alignItems="center" justifyContent="center" mr="20px">
            <Box color="Headline" pr="32px" fontSize="15px">
              Theme
            </Box>

            <Select
              variant="outline"
              value={chosenTheme}
              onChange={(e) => setChosenTheme(e.target.value)}
              color="Headline"
              bg="Background"
              size="sm"
            >
              <option value="light1">office</option>
              <option value="light2">sky</option>
              <option value="dark2">night</option>
              <option value="dark1">disco</option>
              <option value="darkPine">pine</option>
            </Select>
          </Box>
          <Box d="flex" alignItems="center">
            <Link to="/">
              <Box
                color="Highlight"
                fontSize="45px"
                fontWeight="bold"
                fontFamily="TimesNewRoman"
                className={css`
                  @media only screen and (max-width: 920px) {
                    font-size: 40px;
                  }
                  @media only screen and (max-width: 600px) {
                    font-size: 30px;
                  }
                `}
              >
                Landon Schlangen
              </Box>
            </Link>
          </Box>
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
                  {chosenTheme.match(/dark/i) ? (
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
                <Icon
                  name="close"
                  size="30px"
                  color="Headline"
                  className={css`
                    @media only screen and (max-width: 460px) {
                      height: 25px;
                    }
                  `}
                />
              </Box>
            ) : (
              <>
                {chosenTheme.match(/dark/i) ? (
                  <Box cursor="pointer">
                    <img
                      src={menuIcon2}
                      alt="menu"
                      height="30px"
                      className={css`
                        @media only screen and (max-width: 460px) {
                          height: 25px;
                        }
                      `}
                    />
                  </Box>
                ) : (
                  <Box cursor="pointer">
                    <img
                      src={menuIcon}
                      alt="menu"
                      height="30px"
                      className={css`
                        @media only screen and (max-width: 460px) {
                          height: 25px;
                        }
                      `}
                    />
                  </Box>
                )}
              </>
            )}
          </Box>
        )}

        {matches.small && (
          <>
            <SidebarContainer open={sidebar}>
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
                    {chosenTheme.match(/dark/i) ? (
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
            </SidebarContainer>
          </>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
