import React, { useEffect } from "react";
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
  const {
    headers,
    description,
    paragraphs,
    terminal,
  } = ReactWithTypescriptPost;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PostContainer>
      <Header>{headers.main}</Header>
      <SubHeader>{description}</SubHeader>
      <Para>{paragraphs.main}</Para>
      <SubHeader>{headers.second}</SubHeader>
      <Para>{paragraphs.second}</Para>
      <Para>{paragraphs.setup}</Para>
      <Terminal>{terminal.setup1}</Terminal>
      <Para>{paragraphs.or}</Para>
      <Terminal>{terminal.setup2}</Terminal>
      <Para>{paragraphs.add}</Para>
      <Terminal>{terminal.add1}</Terminal>
      <Para>{paragraphs.or}</Para>
      <Terminal>{terminal.add2}</Terminal>
      <SubHeader>{headers.third}</SubHeader>
      <Para>{paragraphs.third}</Para>
    </PostContainer>
  );
};

export default ReactWithTypescript;
