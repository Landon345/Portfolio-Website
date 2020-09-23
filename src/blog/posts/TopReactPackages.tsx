import React, { useEffect } from "react";
import { TopReactPackagesPost } from "src/blog/PostData";
import {
  PostContainer,
  Header,
  SubHeader,
  Para,
  Terminal,
} from "src/blog/posts/Styles";

type TopReactPackagesProps = {};

const TopReactPackages: React.FC<TopReactPackagesProps> = () => {
  const { title, headers, paragraphs, links, terminal } = TopReactPackagesPost;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PostContainer>
      <Header>{title}</Header>
      <SubHeader>{headers.top}</SubHeader>
      <Para>{paragraphs.top}</Para>
      <SubHeader>
        <a href={links.emotion} target="_blank" rel="noopener noreferrer">
          {headers.emotion}
        </a>
      </SubHeader>
      <Terminal>{terminal.emotion}</Terminal>
      <Para>{paragraphs.emotion}</Para>
      <SubHeader>
        <a href={links.chakra} target="_blank" rel="noopener noreferrer">
          {headers.chakra}
        </a>
      </SubHeader>
      <Terminal>{terminal.chakra}</Terminal>
      <Para>{paragraphs.chakra}</Para>
      <SubHeader>
        <a href={links.router} target="_blank" rel="noopener noreferrer">
          {headers.router}
        </a>
      </SubHeader>
      <Terminal>{terminal.router}</Terminal>
      <Para>{paragraphs.router}</Para>
      <SubHeader>
        <a href={links.momentOrDay} target="_blank" rel="noopener noreferrer">
          {headers.momentOrDay}
        </a>
      </SubHeader>
      <Terminal>{terminal.moment}</Terminal>
      <Terminal>{terminal.day}</Terminal>
      <Para>{paragraphs.momentOrDay}</Para>
      <SubHeader>
        <a href={links.framerMotion} target="_blank" rel="noopener noreferrer">
          {headers.framerMotion}
        </a>
      </SubHeader>
      <Terminal>{terminal.framerMotion}</Terminal>
      <Para>{paragraphs.framerMotion}</Para>
      <SubHeader>
        <a href={links.ghpages} target="_blank" rel="noopener noreferrer">
          {headers.ghpages}
        </a>
      </SubHeader>
      <Terminal>{terminal.ghpages}</Terminal>
      <Para>{paragraphs.ghpages}</Para>
      <SubHeader>
        <a href={links.reactQuery} target="_blank" rel="noopener noreferrer">
          {headers.reactQuery}
        </a>
      </SubHeader>
      <Terminal>{terminal.reactQuery}</Terminal>
      <Para>{paragraphs.reactQuery}</Para>
      <SubHeader>{headers.conclusion}</SubHeader>
      <Para>{paragraphs.conclusion}</Para>
    </PostContainer>
  );
};

export default TopReactPackages;
