import React from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { Hr } from "src/styled/StyledComponents";

interface Props {}

const Footer: React.FC = (props: Props) => {
  return (
    <Box mt="40px">
      <Hr />
      <Box
        d="flex"
        height="20vh"
        bg="Background"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        width="100vw"
      >
        <Link to="/">
          <Box color="Paragraph">About Me</Box>
        </Link>
        <Box color="Paragraph">Landon Schlangen © 2020</Box>
        <Link to="/projects">
          <Box color="Paragraph">Projects</Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
