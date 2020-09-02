import React, { useState } from "react";
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
  images: string[];
  github?: string;
  hosted?: string;
  video?: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  images,
  github,
  hosted,
  video,
}) => {
  const [myImages, setMyImages] = useState(images);

  const rotateImage = () => {
    let newArray = [...myImages];
    const image1 = newArray.shift();
    image1 && newArray.push(image1);
    setMyImages(() => newArray);
  };

  return (
    <div>
      <Box>
        <OverlayContainer>
          <OverlayImage className="overlay-image" src={myImages[0]} alt={""} />
          <OverlayHover className="overlay-hover" onClick={rotateImage}>
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
