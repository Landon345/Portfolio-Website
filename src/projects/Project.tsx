import React, { useState } from "react";
import { Box, Icon } from "@chakra-ui/core";
import { css } from "emotion";
import {
  OverlayContainer,
  OverlayImage,
  OverlayHover,
  OverlayDescription,
  OverlayButton,
  OverlayA,
} from "src/projects/Styles";

type ProjectProps = {
  title: string;
  images: string[];
  description: string;
  github?: string;
  hosted?: string;
  video?: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  images,
  description,
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
    <Box>
      <Box border="1px solid" borderColor="Headline">
        <OverlayContainer images={myImages.length}>
          <OverlayImage className="overlay-image" src={myImages[0]} alt={""} />
          <OverlayHover className="overlay-hover">
            <OverlayDescription>
              <Box color="Headline" fontWeight="900" fontFamily="Montserrat">
                {title}
              </Box>
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
              <Box
                color="paragraph"
                fontFamily="Cardo"
                fontSize="22px"
                mx="3%"
                className={css`
                  @media only screen and (max-width: 660px) {
                    font-size: 18px;
                    margin: 0px 1%;
                  }
                `}
              >
                {description}
              </Box>
            </OverlayDescription>
          </OverlayHover>
        </OverlayContainer>
      </Box>
      {myImages.length > 1 && (
        <Box d="flex" justifyContent="flex-end" mr="20px">
          <Icon
            name="arrow-forward"
            color="Paragraph"
            size="30px"
            onClick={rotateImage}
            cursor="pointer"
            className={css`
              @media only screen and (max-width: 660px) {
                height: 35px;
                width: 35px;
              }
            `}
          />
        </Box>
      )}
    </Box>
  );
};

export default Project;
