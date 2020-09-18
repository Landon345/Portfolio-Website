type Post = {
  slug: string;
  title: string;
  description: string;
  hashTags: Array<string>;
};

type PostsArray = {
  Posts: Array<Post>;
};

export const PostData: PostsArray = {
  Posts: [
    {
      slug: "set-up-react-project-with-typescript",
      title: "How to set up a React Project with typescript",
      description: "Typescript with React isn't as scary as you think.",
      hashTags: ["How to", "React"],
    },
    {
      slug: "host-a-website",
      title: "How to host a website.",
      description: "It is super duper simple to host a website on Netlify.",
      hashTags: ["How to", "Web Dev"],
    },
    {
      slug: "increase-motivation",
      title: "How to increase motivation",
      description:
        "Motivation comes in many forms. I will try to explain what causes motivation.",
      hashTags: ["How to", "life"],
    },
  ],
};

type singlePost = {
  title: string;
  description: string;
  headers: any;
  paragraphs: any;
  photos: any;
  links: any;
  hashTags: Array<string>;
};
export const ReactWithTypescriptPost: singlePost = {
  title: "How to set up a React Project with typescript",
  description: "Typescript with React isn't as scary as you think.",
  headers: {
    main: "How to set up React with Typescript",
    second: "Why TypeScript with React should not be feared",
    third: "Advantages",
  },
  paragraphs: {
    main:
      "I love using TypeScript with React, but I was a little bit scared of it at first. In this article, I will explain why TypeScript with React should not be feared, but instead be used after doing just one project. ",
    second:
      "As we know, TypeScript is just a superset of JavaScript. This means that even if we don’t really know TypeScript very well, our React project will still run great whether we use or don’t use the features of TypeScript. We don’t even need to install another compiler to have our project run flawlessly. My advice would be to always set up our React projects to use TypeScript. ",
    third:
      "So there we have it, it is pretty simple to do. In the future, I expect React to default to using TypeScript just like Angular. A couple great advantages that using TypeScript brings is the ability to use absolute routes to import our different components. This is done by going to the tsconfig file and adding in a rule of BaseUrl: “.”. This way, instead of doing “../components/button”, we can do “src/components/button”. As our component tree gets larger and larger, it becomes way better to use the second option (absolute routes). Also, TypeScript provides us with the tools needed to add great type checking and intellisense to our project, so that ultimately, we make fewer mistakes and minimize our debug time when writing code.",
  },
  photos: {},
  links: {},
  hashTags: ["How to", "React"],
};
export const HostWebsitePost = {
  title: "How to host a website.",
  description: "It is super duper simple to host a website on Netlify.",
  headers: { main: "" },
  paragraphs: { main: "" },
  photos: {},
  links: {},
  hashTags: ["How to", "Web Dev"],
};
export const MotivationPost = {
  title: "How to increase motivation",
  description:
    "Motivation comes in many forms. I will try to explain what causes motivation.",
  headers: { main: "" },
  paragraphs: { main: "" },
  photos: {},
  links: {},
  hashTags: ["How to", "life"],
};
