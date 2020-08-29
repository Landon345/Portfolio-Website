import React from "react";
import { Button } from "src/StyledComponents";
import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/core";
//import Resume from "src/assets/githubIcon.png";

function AboutMe() {
  return (
    <div>
      <Box
        d="flex"
        justifyContent="center"
        mt="10vh"
        fontSize="3.5rem"
        color="Headline"
      >
        Young Full Stack Developer
      </Box>

      <Flex justifyContent="space-around" w="95%" mt="10vh">
        <Flex justifyContent="center" w="100%">
          <Box fontSize="2.5rem">Skills</Box>
        </Flex>
        <Flex justifyContent="center" w="100%">
          <Box fontSize="2.5rem">Experience</Box>
        </Flex>
      </Flex>

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
