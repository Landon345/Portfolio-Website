import React from "react";
import Project from "src/projects/Project";
import { Grid, Box } from "@chakra-ui/core";

import * as photos from "src/assets/pictures";

interface Props {}

const Projects: React.FC = (props: Props) => {
  return (
    <>
      <Box mx="5%">
        {/* Featured */}
        <Box d="flex" justifyContent="space-between">
          <Box fontSize="40px" color="Headline" mt="60px">
            Featured
          </Box>
          <Box
            fontSize="20px"
            color="LightParagraph"
            mt="60px"
            alignSelf="flex-end"
          >
            Click on a photo to see more photos
          </Box>
        </Box>
        <Grid
          templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gap={3}
          justifyItems="center"
          mt="30px"
        >
          <Project
            images={[
              photos.FullStackPokemonCover,
              photos.FullStackPokemon,
              photos.FullStackPokemonCaptured,
              photos.FullStackPokemonDetail,
            ]}
            title="Full Stack Pokemon"
            github="https://github.com/Landon345/FullStack-Pokemon"
          />
          <Project
            images={[
              photos.tabsystemCover,
              photos.tabsystem,
              photos.tabsystemTabs,
              photos.tabsystemMyTabs,
            ]}
            title="tab system"
            github="https://github.com/Landon345/Tabsystem"
          />
          <Project
            images={[photos.TradingPractice]}
            title="Trading Practice"
            github="https://github.com/Landon345/Landon345-TradingPractice"
            video="https://drive.google.com/file/d/1w0nsRuOq1uYGyq_UrIHI6YC2jQG2MPTb/view?usp=sharing"
          />
        </Grid>

        {/* Full stack pokemon */}
        {/* TabSystem */}
        {/* Trading Practice */}

        {/* My Progression in React */}
        <Box fontSize="40px" color="Headline" mt="60px">
          Progression in React
        </Box>
        <Grid
          templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gap={3}
          justifyItems="center"
          mt="30px"
        >
          <Project
            images={[photos.dealornodealCover, photos.dealornodeal]}
            title="deal-or-no-deal"
            github="https://github.com/Landon345/Deal-or-no-deal-game"
            hosted="https://landon345.github.io/Deal-or-no-deal-game/"
          />
          <Project
            images={[
              photos.FirstPokemonCover,
              photos.FirstPokemon,
              photos.FirstPokemonDetail,
            ]}
            title="First Pokemon"
            github="https://github.com/Landon345/Pokemon-FrontEndWebProject"
          />
          <Project
            images={[photos.CookieClickerCover, photos.cookieclicker]}
            title="cookie clicker game"
            github="https://github.com/Landon345/CookieClickerGame"
            hosted="https://landon345.github.io/CookieClickerGame/"
          />
          <Project
            images={[
              photos.FrontendPokemonCover,
              photos.FrontendPokemon,
              photos.FrontendPokemonSearch,
              photos.FrontendPokemonDetail,
            ]}
            title="Frontend Pokemon"
            github="https://github.com/Landon345/Frontend-Pokemon"
          />
          <Project
            images={[
              photos.FullStackPokemonCover,
              photos.FullStackPokemon,
              photos.FullStackPokemonCaptured,
              photos.FullStackPokemonDetail,
            ]}
            title="Full stack pokemon"
            github="https://github.com/Landon345/FullStack-Pokemon"
          />
        </Grid>
        {/* First React Project (deal or no deal) */}
        {/* Then first pokemon */}
        {/* Then cookie clicker */}
        {/* Then second pokemon */}
        {/* Then third pokemon */}

        {/* CleverProgrammer Projects */}
        <Box fontSize="40px" color="Headline" mt="60px">
          CleverProgrammer Projects
        </Box>
        <Grid
          templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gap={3}
          justifyItems="center"
          mt="30px"
        >
          <Project
            images={[photos.instagramCover, photos.instagram]}
            title="Instagram clone"
            github="https://github.com/Landon345/instagram-clone"
            hosted="https://instagram-clone-3b95e.web.app/"
          />
          <Project
            images={[photos.netflixCover, photos.netflix]}
            title="Netflix clone"
            github="https://github.com/Landon345/netflix-clone"
            hosted="https://netflix-clone-78d6c.web.app/"
          />
          <Project
            images={[photos.amazonCover, photos.amazon]}
            title="Amazon clone"
            github="https://github.com/Landon345/amazon-clone"
            hosted="https://clone-f7d52.web.app"
          />
          <Project
            images={[photos.tinderCover, photos.tinder]}
            title="Tinder clone"
            github="https://github.com/Landon345/tinder-clone"
            hosted="https://tinder-clone-7a91a.web.app"
          />
          <Project
            images={[photos.youTubeCover, photos.youTube]}
            title="YouTube clone"
            github="https://github.com/Landon345/youtube-clone"
            hosted="https://clone-f3f9e.web.app"
          />
          <Project
            images={[photos.covidTrackerCover, photos.covidTracker]}
            title="Covid Tracker"
            github="https://github.com/Landon345/covid-19-tracker"
            hosted="https://covid-19-tracker-d88a8.web.app/"
          />
        </Grid>
        {/* instagram-clone */}
        {/* netflix-clone */}
        {/* amazon-clone */}
        {/* tinder-clone */}
        {/* covid tracker */}
        {/* youTube-clone */}

        <Box fontSize="40px" color="Headline" mt="60px">
          Angular / Django Projects
        </Box>
        <Grid
          templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gap={3}
          justifyItems="center"
          mt="30px"
        >
          <Project
            images={[photos.whatCanICook]}
            title="What Can I Cook"
            github="https://github.com/Landon345/WhatCanICook"
          />
          <Project
            images={[photos.homeRemodelContracting]}
            title="Home Remodel Contracting"
            github="https://github.com/Landon345/HomeRemodelContracting"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
