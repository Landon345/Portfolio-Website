import React from "react";
import { Box } from "@chakra-ui/core";
import {
  OverlayContainer,
  OverlayImage,
  OverlayHover,
  OverlayDescription,
  OverlayButton,
  OverlayA,
} from "src/projects/Styles";
import { css } from "emotion";

type ProjectProps = {
  title: string;
  image: string;
  github?: string;
  hosted?: string;
  video?: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  image,
  github,
  hosted,
  video,
}) => {
  return (
    <div>
      <Box>
        <OverlayContainer>
          <OverlayImage className="overlay-image" src={image} alt={""} />
          <OverlayHover className="overlay-hover">
            <OverlayDescription>
              <strong>{title}</strong>
              <Box d="flex" justifyContent="center">
                {github && (
                  <OverlayA href={github} target="_blank">
                    <OverlayButton>Gitub</OverlayButton>
                  </OverlayA>
                )}
                {video && (
                  <OverlayA href={video} target="_blank">
                    <OverlayButton>Video</OverlayButton>
                  </OverlayA>
                )}
                {hosted && (
                  <OverlayA href={hosted} target="_blank">
                    <OverlayButton>Website</OverlayButton>
                  </OverlayA>
                )}
              </Box>
            </OverlayDescription>
          </OverlayHover>
        </OverlayContainer>
      </Box>
    </div>
  );
};

export default Project;
