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
            Click on an arrow to see more photos
          </Box>
        </Box>
        <Grid
          templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
          gap={3}
          justifyItems="center"
          mt="30px"
        >
          <Project
            description="This is my finalized Bushel challenge project. It was built with many cool frontend libraries, and it allows users to save their captured pokemon."
            images={[
              photos.FullStackPokemonCover,
              photos.FullStackPokemon,
              photos.FullStackPokemonCaptured,
              photos.FullStackPokemonDetail,
            ]}
            title="Full Stack Pokedex"
            github="https://github.com/Landon345/FullStack-Pokemon"
          />
          <Project
            description="I wanted to make a tab system for my family's campground."
            images={[
              photos.tabsystemCover,
              photos.tabsystem,
              photos.tabsystemTabs,
              photos.tabsystemMyTabs,
            ]}
            title="Tab System"
            github="https://github.com/Landon345/Tabsystem"
          />
          <Project
            description="Trading practice is built with React, Nodejs, and Postgress. It was a group project for CSCI 366 (database systems)"
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
            description="This is my first ever project I built with React. Building this project really helped me with the React basics."
            images={[photos.dealornodealCover, photos.dealornodeal]}
            title="Deal or No Deal?"
            github="https://github.com/Landon345/Deal-or-no-deal-game"
            hosted="https://landon345.github.io/Deal-or-no-deal-game/"
          />
          <Project
            description="Believe it or not, but this project helped me land my first internship at Bushel. It was what I came up with initally for their challenge."
            images={[
              photos.FirstPokemonCover,
              photos.FirstPokemon,
              photos.FirstPokemonDetail,
            ]}
            title="First Pokemon"
            github="https://github.com/Landon345/Pokemon-FrontEndWebProject"
          />
          <Project
            description="When I had spare time over Christmas break, I went ham on React and built a cookie clicker clone for my third project with React."
            images={[photos.CookieClickerCover, photos.cookieclicker]}
            title="Cookie Clicker Game"
            github="https://github.com/Landon345/CookieClickerGame"
            hosted="https://landon345.github.io/CookieClickerGame/"
          />
          <Project
            description="After recieving tons of feedback from the guys at Bushel, I redesigned my Pokemon project with a better UI and way cleaner code."
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
            description="At Bushel, they had the interns do both a backend and frontend challenge. Then we put them together, and this is the result."
            images={[
              photos.FullStackPokemonCover,
              photos.FullStackPokemon,
              photos.FullStackPokemonCaptured,
              photos.FullStackPokemonDetail,
            ]}
            title="Full Stack Pokedex"
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
            description="This project is full stack using firebase. I added a way to delete comments and posts when signed in."
            images={[photos.instagramCover, photos.instagram]}
            title="Instagram clone"
            github="https://github.com/Landon345/instagram-clone"
            hosted="https://instagram-clone-3b95e.web.app/"
          />
          <Project
            description="Used a movies api for the data."
            images={[photos.netflixCover, photos.netflix]}
            title="Netflix clone"
            github="https://github.com/Landon345/netflix-clone"
            hosted="https://netflix-clone-78d6c.web.app/"
          />
          <Project
            description="This project uses React Context API for state management."
            images={[photos.amazonCover, photos.amazon]}
            title="Amazon clone"
            github="https://github.com/Landon345/amazon-clone"
            hosted="https://clone-f7d52.web.app"
          />
          <Project
            description="I added a smooth scroll to bottom of the chats page."
            images={[photos.tinderCover, photos.tinder]}
            title="Tinder clone"
            github="https://github.com/Landon345/tinder-clone"
            hosted="https://tinder-clone-7a91a.web.app"
          />
          <Project
            description="Just a good looking clone that utilizes Material-ui"
            images={[photos.youTubeCover, photos.youTube]}
            title="YouTube clone"
            github="https://github.com/Landon345/youtube-clone"
            hosted="https://clone-f3f9e.web.app"
          />
          <Project
            description="Used a cool leaflet npm package to render the map. Also uses data from disease.sh"
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
            description=""
            images={[photos.whatCanICook]}
            title="What Can I Cook"
            github="https://github.com/Landon345/WhatCanICook"
          />
          <Project
            description=""
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
