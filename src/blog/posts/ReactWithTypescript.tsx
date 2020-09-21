import React from "react";
import { ReactWithTypescriptPost } from "src/blog/PostData";
import {
  PostContainer,
  Header,
  SubHeader,
  Para,
  Terminal,
} from "src/blog/posts/Styles";

type ReactWithTypescriptProps = {};

const ReactWithTypescript: React.FC<ReactWithTypescriptProps> = () => {
  return (
    <PostContainer>
      <Header>{ReactWithTypescriptPost.headers.main}</Header>
      <SubHeader>{ReactWithTypescriptPost.description}</SubHeader>
      <Para>{ReactWithTypescriptPost.paragraphs.main}</Para>
      <SubHeader>{ReactWithTypescriptPost.headers.second}</SubHeader>
      <Para>{ReactWithTypescriptPost.paragraphs.second}</Para>
      <Para>To set up our app with TypeScript - Run: </Para>
      <Terminal>npx create-react-app my-app --template typescript </Terminal>
      <Para>Or</Para>
      <Terminal>yarn create react-app --template typescript</Terminal>
      <Para>
        If we have a React project that doesn’t use TypeScript right now, we can
        add TypeScript support by running:
      </Para>
      <Terminal>
        npm install --save typescript @types/node @types/react @types/react-dom
        @types/jest
      </Terminal>
      <Para>Or</Para>
      <Terminal>
        yarn add typescript @types/node @types/react @types/react-dom
        @types/jest
      </Terminal>
      <SubHeader>{ReactWithTypescriptPost.headers.third}</SubHeader>
      <Para>{ReactWithTypescriptPost.paragraphs.third}</Para>
    </PostContainer>
  );
};

export default ReactWithTypescript;
