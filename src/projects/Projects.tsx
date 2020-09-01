import React from "react";
import Project from "src/projects/Project";
import { Grid, Box } from "@chakra-ui/core";

import * as photos from "src/assets/pictures";

interface Props {}

const Projects: React.FC = (props: Props) => {
  return (
    <>
      <Box mx="5%">
        {/* <img src={photos.FirstPokemon} alt="" height="400px" />
      <img src={photos.FirstPokemonDetail} alt="" height="400px" />
      <img src={photos.FrontendPokemon} alt="" height="400px" />
      <img src={photos.FrontendPokemonDetail} alt="" height="400px" />
      <img src={photos.FrontendPokemonSearch} alt="" height="400px" />
      <img src={photos.FullStackPokemon} alt="" height="400px" />
      <img src={photos.FullStackPokemonCaptured} alt="" height="400px" />
      <img src={photos.FullStackPokemonDetail} alt="" height="400px" />
      <img src={photos.dealornodeal} alt="" height="400px" />
      <img src={photos.covidTracker} alt="" height="400px" />
      <img src={photos.cookieclicker} alt="" height="400px" />
      <img src={photos.youTube} alt="" height="400px" />
      <img src={photos.tinder} alt="" height="400px" />
      <img src={photos.tabsystem} alt="" height="400px" />
      <img src={photos.tabsystemTabs} alt="" height="400px" />
      <img src={photos.tabsystemMyTabs} alt="" height="400px" />
      <img src={photos.netflix} alt="" height="400px" />
      <img src={photos.instagram} alt="" height="400px" />
      <img src={photos.amazon} alt="" height="400px" />
    <img src={photos.GraphqlResume} alt="" height="400px" /> */}

        {/* Featured */}
        <Box fontSize="40px" color="Headline" mt="60px">
          Featured
        </Box>
        <Grid
          templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gap={3}
          justifyItems="center"
          mt="30px"
        >
          <Project
            image={photos.FullStackPokemon}
            title="Full Stack Pokemon"
            github="https://github.com/Landon345/FullStack-Pokemon"
          />
          <Project
            image={photos.tabsystem}
            title="tab system"
            github="https://github.com/Landon345/Tabsystem"
          />
          <Project
            image={photos.TradingPractice}
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
            image={photos.dealornodeal}
            title="deal-or-no-deal"
            github="https://github.com/Landon345/Deal-or-no-deal-game"
            hosted="https://landon345.github.io/Deal-or-no-deal-game/"
          />
          <Project
            image={photos.FirstPokemon}
            title="First Pokemon"
            github="https://github.com/Landon345/Pokemon-FrontEndWebProject"
          />
          <Project
            image={photos.cookieclicker}
            title="cookie clicker game"
            github="https://github.com/Landon345/CookieClickerGame"
            hosted="https://landon345.github.io/CookieClickerGame/"
          />
          <Project
            image={photos.FrontendPokemon}
            title="Frontend Pokemon"
            github="https://github.com/Landon345/Frontend-Pokemon"
          />
          <Project
            image={photos.FullStackPokemon}
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
            image={photos.instagram}
            title="Instagram clone"
            github="https://github.com/Landon345/instagram-clone"
            hosted="https://instagram-clone-3b95e.web.app/"
          />
          <Project
            image={photos.netflix}
            title="Netflix clone"
            github="https://github.com/Landon345/netflix-clone"
            hosted="https://netflix-clone-78d6c.web.app/"
          />
          <Project
            image={photos.amazon}
            title="Amazon clone"
            github="https://github.com/Landon345/amazon-clone"
            hosted="https://clone-f7d52.web.app"
          />
          <Project
            image={photos.tinder}
            title="Tinder clone"
            github="https://github.com/Landon345/tinder-clone"
            hosted="https://tinder-clone-7a91a.web.app"
          />
          <Project
            image={photos.youTube}
            title="YouTube clone"
            github="https://github.com/Landon345/youtube-clone"
            hosted="https://clone-f3f9e.web.app"
          />
        </Grid>
        {/* instagram-clone */}
        {/* netflix-clone */}
        {/* amazon-clone */}
        {/* tinder-clone */}
        {/* covid tracker */}
        {/* youTube-clone */}
      </Box>
    </>
  );
};

export default Projects;
