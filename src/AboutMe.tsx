import React from "react";

import { motion } from "framer-motion";
import { Box, Flex, Grid } from "@chakra-ui/core";
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
      >
        Young Full Stack Developer
      </Box>

      <Grid
        templateColumns="repeat(auto-fit, minmax(650px, 1fr))"
        gap={6}
        justifyItems="center"
      >
        <Box textAlign="center" width="100%">
          <Box fontSize="2.5rem" color="Headline" py="30px">
            Skills
          </Box>
          <StatsBar label="React" stat={95} />
          <StatsBar label="React" stat={55} />
          <StatsBar label="React" stat={25} />
          <StatsBar label="React" stat={85} />
          <StatsBar label="React" stat={65} />
        </Box>
        <Box>
          <Box fontSize="2.5rem" color="Headline">
            Experience
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
