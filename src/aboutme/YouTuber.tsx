import React from "react";
import { Creator } from "src/aboutme/Styles";
import { RoundImage } from "src/styled/StyledComponents";
import { Box } from "@chakra-ui/core";

type YouTuberProps = {
  name: string;
  photo: string;
  link: string;
};

const YouTuber: React.FC<YouTuberProps> = ({ name, photo, link }) => {
  return (
    <Creator href={link} target="_blank" rel="noopener noreferrer">
      <RoundImage src={photo} alt="" height="50px" />{" "}
      <Box color="Paragraph" ml="25px">
        {name}
      </Box>
    </Creator>
  );
};

export default YouTuber;
