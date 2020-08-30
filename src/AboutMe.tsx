import React from "react";

import { motion } from "framer-motion";
import { Box, Flex, Grid } from "@chakra-ui/core";
import BushelLogo from "src/assets/BushelLogo.png";
import { Image } from "src/StyledComponents";
import StatsBar from "src/StatsBar";
//import Resume from "src/assets/githubIcon.png";

function AboutMe() {
  return (
    <div>
      <Box
        d="flex"
        justifyContent="center"
        py="50px"
        fontSize="3.5rem"
        color="Headline"
        fontFamily="Montserrat"
        fontWeight="bold"
      >
        Full Stack Developer
      </Box>

      <Box
        color="Paragraph"
        fontFamily="Cardo"
        fontSize="22px"
        mx="10%"
        lineHeight="35px"
      >
        Hello! My Name is Landon Schlangen, and I am striving to become the best
        full-stack web developer I can be. I love to immerse myself in code
        while jamming out to epic music 🎸. My favorite framework right now is
        React, but I also enjoy Laravel and NodeJs for backend. I have done
        projects with Angular and Django, and of course, I used SQL or ORM's
        (object-relational mappers) to communicate with my databases. Basketball
        🏀 is my favorite sport and Minecraft is my favorite video game 👨‍💻.
        Thank you for checking out my website and make sure to checkout my{" "}
        <a className="paragraphLink" href="https://github.com/Landon345">
          GitHub
        </a>{" "}
        and{" "}
        <a
          className="paragraphLink"
          href="https://www.linkedin.com/in/landon-schlangen-a3989a16b/"
        >
          LinkedIn
        </a>{" "}
        while you're at it.
      </Box>

      <Grid
        templateColumns="repeat(auto-fit, minmax(650px, 1fr))"
        gap={6}
        justifyItems="center"
        mt="60px"
      >
        <Box textAlign="center" width="100%">
          <Box fontSize="2.75rem" color="Headline" py="30px">
            Skills
          </Box>
          <StatsBar label="React" stat={99} />
          <StatsBar label="Laravel" stat={90} />
          <StatsBar label="NodeJs" stat={80} />
          <StatsBar label="Angular" stat={75} />
          <StatsBar label="Django" stat={75} />
          <StatsBar label="SQL" stat={85} />
        </Box>
        <Box textAlign="center" width="100%">
          <Box fontSize="2.75rem" color="Headline" py="30px">
            Experience
          </Box>
          <Box d="flex" mx="10%" mt="10px">
            <Box d="flex" mr="30px">
              <Image src={BushelLogo} alt="bushel" height="60px" />
            </Box>
            <Box d="flex" flexDir="column" textAlign="left">
              <Box color="Paragraph" fontSize="20px" fontWeight="800">
                Software Engineer Intern
              </Box>
              <Box color="Paragraph" fontSize="18px" fontWeight="600">
                Bushel · Internship
              </Box>
              <Box color="LightParagraph" fontSize="18px" fontWeight="350">
                May 2020 - Aug 2020 · 4 mos
              </Box>
              <Box color="LightParagraph" fontSize="18px" fontWeight="350">
                Fargo, North Dakota, United States
              </Box>
              <Box color="Paragraph" fontSize="18px" mt="20px">
                I worked and collaborated with amazing people and learned the
                ins and outs of React, Laravel, git, and clean code.
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Box justifyContent="center" d="flex">
        {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://ndusbpos-my.sharepoint.com/:w:/r/personal/landon_schlangen_ndus_edu/_layouts/15/Doc.aspx?sourcedoc=%7Bdb58a83f-2171-44f7-9659-4c92814fe567%7D&action=view&wdAccPdf=0"
            target="_blank"
          >
            <Button>My Resume</Button>
          </a>
        </motion.div> */}
      </Box>
    </div>
  );
}

export default AboutMe;
