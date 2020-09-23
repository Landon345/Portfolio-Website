import React, { useEffect } from "react";
import { TopExtensionsPost } from "src/blog/PostData";
import {
  PostContainer,
  Header,
  SubHeader,
  Para,
  LongImage,
} from "src/blog/posts/Styles";

type TopExtensionsProps = {};

const TopExtensions: React.FC<TopExtensionsProps> = () => {
  const { title, headers, paragraphs, photos } = TopExtensionsPost;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PostContainer>
      <Header>{title}</Header>
      <SubHeader>{headers.why}</SubHeader>
      <Para>{paragraphs.why}</Para>
      <SubHeader>{headers.general}</SubHeader>
      <Para>{paragraphs.general}</Para>
      <SubHeader>{headers.prettier}</SubHeader>
      <LongImage src={photos.prettier} alt="" loading="lazy" />
      <Para>{paragraphs.prettier}</Para>
      <SubHeader>{headers.bracket}</SubHeader>
      <LongImage src={photos.bracket} alt="" loading="lazy" />
      <Para>{paragraphs.bracket}</Para>
      <SubHeader>{headers.liveServer}</SubHeader>
      <LongImage src={photos.liveServer} alt="" loading="lazy" />
      <Para>{paragraphs.liveServer}</Para>
      <SubHeader>{headers.liveShare}</SubHeader>
      <LongImage src={photos.liveShare} alt="" loading="lazy" />
      <Para>{paragraphs.liveShare}</Para>
      <SubHeader>{headers.colorHighlight}</SubHeader>
      <LongImage src={photos.colorHighlight} alt="" loading="lazy" />
      <Para>{paragraphs.colorHighlight}</Para>

      <SubHeader>{headers.specific}</SubHeader>
      <Para>{paragraphs.specific}</Para>

      <SubHeader>{headers.eslint}</SubHeader>
      <LongImage src={photos.eslint} alt="" loading="lazy" />
      <Para>{paragraphs.eslint}</Para>
      <SubHeader>{headers.reactSnippets}</SubHeader>
      <LongImage src={photos.reactSnippets} alt="" loading="lazy" />
      <Para>{paragraphs.reactSnippets}</Para>
      <SubHeader>{headers.vetur}</SubHeader>
      <LongImage src={photos.vetur} alt="" loading="lazy" />
      <Para>{paragraphs.vetur}</Para>
      <SubHeader>{headers.phpintel}</SubHeader>
      <LongImage src={photos.phpintel} alt="" loading="lazy" />
      <Para>{paragraphs.phpintel}</Para>
      <SubHeader>{headers.jsSnippets}</SubHeader>
      <LongImage src={photos.jsSnippets} alt="" loading="lazy" />
      <Para>{paragraphs.jsSnippets}</Para>

      <SubHeader>{headers.conclusion}</SubHeader>
      <Para>{paragraphs.conclusion}</Para>
    </PostContainer>
  );
};

export default TopExtensions;
