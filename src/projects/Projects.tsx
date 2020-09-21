import React from "react";
import Project from "src/projects/Project";
import { Box } from "@chakra-ui/core";
import { css } from "emotion";
import { ProjectsGrid } from "src/projects/Styles";

import * as photos from "src/assets/pictures";

interface Props {}

const Projects: React.FC = (props: Props) => {
  return (
    <>
      <Box mx="5%" mb="40px">
        {/* Featured */}
        <Box d="flex" justifyContent="space-between" flexWrap="wrap">
          <Box fontSize="40px" color="Headline" mt="60px">
            Featured
          </Box>
          <Box
            fontSize="20px"
            color="LightParagraph"
            mt="60px"
            alignSelf="flex-end"
          >
            Click on an arrow to see more photos. Some projects have a video.
          </Box>
        </Box>
        <ProjectsGrid>
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
            video="https://youtu.be/rcZEEVQ20rA"
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
            video="https://youtu.be/Ly9c_APCj5U"
          />
          <Project
            description="I am starting to get into graphql and nextjs. I followed a Leigh Halliday tutorial for this one."
            images={[photos.GraphQLResumeCover, photos.GraphqlResume]}
            title="GraphQl Resume"
            github="https://github.com/Landon345/next-js-graphql-resume"
            hosted="https://next-js-graphql-resume.vercel.app/"
          />
          <Project
            description="Trading practice is built with React, Nodejs, and Postgresql. It was a group project for CSCI 366 (database systems)"
            images={[photos.TradingPractice]}
            title="Trading Practice"
            github="https://github.com/Landon345/Landon345-TradingPractice"
            video="https://drive.google.com/file/d/1w0nsRuOq1uYGyq_UrIHI6YC2jQG2MPTb/view?usp=sharing"
          />
        </ProjectsGrid>

        <Box
          fontSize="40px"
          color="Headline"
          mt="60px"
          className={css`
            @media only screen and (max-width: 460px) {
              font-size: 30px;
            }
          `}
        >
          Progression in React
        </Box>
        <ProjectsGrid>
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
            video="https://youtu.be/h_Tt3isjhWk"
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
            video="https://youtu.be/aCBv8yStt44"
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
            video="https://youtu.be/rcZEEVQ20rA"
          />
        </ProjectsGrid>

        <Box
          fontSize="40px"
          color="Headline"
          mt="60px"
          className={css`
            @media only screen and (max-width: 460px) {
              font-size: 30px;
            }
          `}
        >
          CleverProgrammer Projects
        </Box>
        <ProjectsGrid>
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
        </ProjectsGrid>

        <Box
          fontSize="40px"
          color="Headline"
          mt="60px"
          className={css`
            @media only screen and (max-width: 460px) {
              font-size: 30px;
            }
          `}
        >
          Angular / Django Projects
        </Box>
        <ProjectsGrid>
          <Project
            description="The idea of this project is that a user can say what ingredients they have, and the app will find recipes that have those ingredients. To make it actually useful, it needs a ton of recipes in the database."
            images={[
              photos.whatCanICook,
              photos.WhatCanICookRecipes,
              photos.WhatCanICookHome,
            ]}
            title="What Can I Cook"
            github="https://github.com/Landon345/WhatCanICook"
          />
          <Project
            description="This project was made with Angular and Django Rest Framework. It hashes passwords and includes a ton of crud functionality."
            images={[
              photos.homeRemodelContracting,
              photos.ContractingHome,
              photos.ContractingSearch1,
              photos.ContractingSearch2,
              photos.ContractingLogin,
              photos.ContractingRegister,
            ]}
            title="Home Remodel Contracting"
            github="https://github.com/Landon345/HomeRemodelContracting"
          />
        </ProjectsGrid>
      </Box>
    </>
  );
};

export default Projects;
