import React, { useEffect } from "react";
import { HostWebsitePost } from "src/blog/PostData";
import {
  PostContainer,
  Header,
  SubHeader,
  Para,
  Terminal,
  PostImage,
} from "src/blog/posts/Styles";

type HostWebsiteProps = {};

const HostWebsite: React.FC<HostWebsiteProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PostContainer>
      <Header>{HostWebsitePost.title}</Header>
      <SubHeader>{HostWebsitePost.headers.confused}</SubHeader>
      <Para>{HostWebsitePost.paragraphs.confused}</Para>
      <SubHeader>{HostWebsitePost.headers.platforms}</SubHeader>
      <Para>{HostWebsitePost.paragraphs.platforms}</Para>
      <SubHeader>{HostWebsitePost.headers.netlifyFirebase}</SubHeader>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase1}</Para>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase2}</Para>
      <PostImage src={HostWebsitePost.photos.firebaseAdd} alt="" />
      <PostImage src={HostWebsitePost.photos.firebaseWeb} alt="" />
      <PostImage src={HostWebsitePost.photos.firebaseHosting} alt="" />
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase3}</Para>
      <Terminal>npm install -g firebase-tools</Terminal>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase4}</Para>
      <Terminal>sudo npm install -g firebase-tools</Terminal>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase5}</Para>
      <Terminal>firebase login</Terminal>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase6}</Para>
      <Terminal>firebase init</Terminal>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase7}</Para>
      <Terminal>npm run build</Terminal>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase8}</Para>
      <Terminal>firebase deploy</Terminal>
      <Para>{HostWebsitePost.paragraphs.netlifyFirebase9}</Para>
      <SubHeader>{HostWebsitePost.headers.domain}</SubHeader>
      <Para>{HostWebsitePost.paragraphs.domain}</Para>
      <SubHeader>{HostWebsitePost.headers.https}</SubHeader>
      <Para>{HostWebsitePost.paragraphs.https}</Para>
      <SubHeader>{HostWebsitePost.headers.conclusion}</SubHeader>
      <Para>{HostWebsitePost.paragraphs.conclusion}</Para>
    </PostContainer>
  );
};

export default HostWebsite;
