import React from "react";

import { Box } from "@chakra-ui/core";
import * as photos from "src/assets/pictures";
import { CreatorList } from "src/aboutme/Styles";
import { Image, Button } from "src/styled/StyledComponents";
import { css } from "emotion";
import YouTuber from "src/aboutme/YouTuber";
import StatsBar from "src/aboutme/StatsBar";

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
        className={css`
          @media only screen and (max-width: 660px) {
            font-size: 35px;
          }
          @media only screen and (max-width: 460px) {
            font-size: 30px;
          }
        `}
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
        while jamming out to epic music{" "}
        <span role="img" aria-label="Guitar">
          🎸
        </span>
        . My favorite framework right now is React, but I also enjoy Laravel and
        NodeJs for backend. I have done projects with Angular and Django, and of
        course, I used SQL or ORM's (object-relational mappers) to communicate
        with my databases. Basketball
        <span role="img" aria-label="basketball">
          🏀
        </span>{" "}
        is my favorite sport and Minecraft is my favorite video game{" "}
        <span role="img" aria-label="computer">
          👨‍💻
        </span>
        . Thank you for checking out my website and make sure to checkout my{" "}
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

      <Box
        d="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(650px, 1fr))"
        gridGap={6}
        justifyItems="center"
        mt="60px"
        className={css`
          @media only screen and (max-width: 660px) {
            display: inline-block;
          }
        `}
      >
        <Box width="100%">
          <Box
            d="flex"
            fontSize="2.75rem"
            color="Headline"
            py="30px"
            justifyContent="center"
            fontFamily="Montserrat"
            className={css`
              @media only screen and (max-width: 660px) {
                font-size: 2rem;
              }
            `}
          >
            Creators I follow
          </Box>
          <CreatorList>
            <YouTuber
              name="Leigh Halliday"
              photo={photos.LeighHalliday}
              link="https://www.youtube.com/channel/UCWPY8W-FAZ2HdDiJp2RC_sQ"
            />
            <YouTuber
              name="Traversy Media"
              photo={photos.TraversyMedia}
              link="https://www.youtube.com/user/TechGuyWeb"
            />
            <YouTuber
              name="Design Course"
              photo={photos.DesignCourse}
              link="https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow"
            />
            <YouTuber
              name="Hussein Nasser"
              photo={photos.HusseinNasser}
              link="https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg"
            />
            <YouTuber
              name="Web Dev Simplified"
              photo={photos.WebDevSimplified}
              link="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw"
            />
            <YouTuber
              name="Clever Programmer"
              photo={photos.CleverProgrammer}
              link="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
            />
            <YouTuber
              name="Andrew Kirby"
              photo={photos.AndrewKirby}
              link="https://www.youtube.com/channel/UC8JNIm02zw8h_3NBrP_zsZA"
            />
            <YouTuber
              name="Coder's Tape"
              photo={photos.CodersTape}
              link="https://www.youtube.com/channel/UCQI-Ym2rLZx52vEoqlPQMdg"
            />
            <YouTuber
              name="Ben Awad"
              photo={photos.BenAwad}
              link="https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw"
            />
            <YouTuber
              name="House of Highlights"
              photo={photos.HouseOfHighlights}
              link="https://www.youtube.com/channel/UCqQo7ewe87aYAe7ub5UqXMw"
            />
          </CreatorList>
        </Box>
        <Box width="100%">
          <Box
            d="flex"
            justifyContent="center"
            fontSize="2.75rem"
            color="Headline"
            py="30px"
            fontFamily="Montserrat"
            className={css`
              @media only screen and (max-width: 660px) {
                font-size: 2rem;
              }
            `}
          >
            Experience
          </Box>
          <Box d="flex" mx="8%" mt="10px">
            <Box d="flex" flex="0.3">
              <a
                href="https://bushelpowered.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={photos.BushelLogo}
                  alt="bushel"
                  height="60px"
                  className={css`
                    @media only screen and (max-width: 660px) {
                      height: 40px;
                    }
                  `}
                />
              </a>
            </Box>
            <Box d="flex" flex="2" flexDir="column" textAlign="left" pl="3%">
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
      </Box>

      <Box
        d="flex"
        justifyContent="center"
        fontSize="2.75rem"
        color="Headline"
        pt="60px"
        pb="30px"
        fontFamily="Montserrat"
        className={css`
          @media only screen and (max-width: 660px) {
            font-size: 2rem;
          }
        `}
      >
        Quick Overview of Skills
      </Box>
      <Box mb="40px">
        <StatsBar label="React" stat={95} />
        <StatsBar label="Laravel" stat={90} />
        <StatsBar label="SQL" stat={85} />
        <StatsBar label="NodeJs/Express" stat={85} />
        <StatsBar label="Angular" stat={85} />
        <StatsBar label="Django" stat={80} />
      </Box>

      <Box
        d="flex"
        justifyContent="center"
        fontSize="2.75rem"
        color="Headline"
        pt="60px"
        pb="30px"
        fontFamily="Montserrat"
        className={css`
          @media only screen and (max-width: 660px) {
            font-size: 2rem;
          }
        `}
      >
        Business
      </Box>
      <Box
        color="Paragraph"
        fontFamily="Cardo"
        fontSize="22px"
        mx="10%"
        lineHeight="35px"
      >
        I have recently started to youtube a little bit, and I would also love
        to teach web development to anyone interested! If you are interested in
        web development, don't hesitate to call or email me. I can do zoom calls
        and we can go through anything I have listed on this website. You can
        find my email and phone number in the footer of the page. I am also
        happy to take a look at any job offers that come my way. (last updated
        Sep. 2020)
      </Box>
      <Box mx="10%" mt="30px">
        <Box color="Paragraph" fontSize="29px">
          My Channel
        </Box>
        <Box>
          <YouTuber
            name="Landon Schlangen"
            photo={photos.profilepic}
            link="https://www.youtube.com/channel/UC4oRFTHw71_CBSHAcCRmV6w"
          />
        </Box>
      </Box>

      <Box justifyContent="center" d="flex" mt="80px">
        <a
          href="https://docs.google.com/document/d/16lTZe7zoUcdg-e7vh3wiy1q6JUGV7RB64FacUqSgRrQ/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>My Resume</Button>
        </a>
      </Box>
    </div>
  );
}

export default AboutMe;
