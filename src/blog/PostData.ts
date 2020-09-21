import * as blogPhotos from "src/assets/blogPhotos/pictures";

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
export const HostWebsitePost: singlePost = {
  title: "How to Host a Website.",
  description: "It is super duper simple to host a custom website on Netlify.",
  headers: {
    confused: "Confused at first",
    platforms: "There are many different Platforms",
    netlifyFirebase: "Try using Netlify or Firebase",
    domain: "Grabbing a unique and interesting domain name",
    https: "Making sure our site is HTTPS",
    conclusion: "Conclusion",
  },
  paragraphs: {
    confused:
      "When trying to figure out how to host my website or a website in general, I was very confused at first. I thought it was a complicated process of jumping through hoops and making sure everything was exactly where it needed to be. The process of me becoming less confused started with making a website with Wix. With wix, it was just one click, and my website was hosted. My site didn’t have the domain name that I wanted, but at least anyone in the US could see it if they typed in the correct URL.",
    platforms:
      "Making and hosting a website with Wix was super easy, and there are many other website building platforms out there. For the general public who want a simple, elegant website, these platforms offer great solutions. Some of these platforms include SquareSpace, GoDaddy, Weebly, Shopify, and WordPress. We know that it is super easy to host a website with one of these platforms, but how in the world are we supposed to host our website that we built with React or basic HTML and CSS?",
    netlifyFirebase1:
      "Netlify is a platform for hosting custom websites. They give us the option of uploading our build folder or they can connect directly to our GitHub account and do the build process for us. When we give Netlify access to our GitHub account, all we have to do is specify which projects we want Netlify to host. If we make changes to our project and push those changes to GitHub, Netlify will automatically rebuild the hosted site with those changes in mind.",
    netlifyFirebase2:
      "Firebase on the other hand, is just a little bit more complicated. First, we need to go to firebase.google.com and Login using our google account. Then we need to select “Add Project”. We name our project, and then we can set up firebase hosting on that project. Go to the web part of the project and register the app with firebase hosting.",
    netlifyFirebase3:
      "We don’t need the SDK, but we do need the firebase cli (command line interface). Run:",
    netlifyFirebase4:
      "If we are on mac, we need to do put “sudo” before “npm” like this:",
    netlifyFirebase5:
      "Once we have our firebase cli installed, we can go to our project on our local computer and run ",
    netlifyFirebase6: "Then",
    netlifyFirebase7:
      "Make sure to grab the correct project that we want it to be deployed to and specify that we want to host the build folder. Before doing firebase deploy, we need to build our project. This can be done with",
    netlifyFirebase8: "Then we can run",
    netlifyFirebase9:
      "Now our web app should be deployed with the correct build. If we make changes to our site, we need to do npm run build and firebase deploy again.	In my opinion, Netlify is way easier and better than Firebase in order to host a custom built website.",
    domain:
      "I am sure that pretty much all hosting sites (Wix, Netlify, etc.) offer some sort of option to get a unique and interesting domain name. Unfortunately, we have to pay for this customizability. In my case, it costs me about $14 per year on Netlify for a custom domain name. ",
    https:
      "The way we make a website HTTPS is by getting a SSL certificate. When I was browsing for SSL certificates, some costed as much as $120 per year! There was no way I was paying that much just so that I could have HTTPS. Thankfully, making our website HTTPS instead of just HTTP is very simple when using Netlify. In fact, it automatically adds it in for us for free! There are other sites that do this as well such as HostGator and Firebase. What a relief it was to find out that Netlify secures my sites for free. ",
    conclusion:
      "There are some steps involved in hosting a website, but these steps are easy after doing just a little bit of research. I would say that any website builder will give us the results we want when we want a simple, yet elegant website, but for more complicated, custom websites, I would choose Netlify all the way.",
  },
  photos: {
    firebaseHosting: blogPhotos.firebaseHosting,
    firebaseWeb: blogPhotos.firebaseWeb,
    firebaseAdd: blogPhotos.firebaseAdd,
  },
  links: {},
  hashTags: ["How to", "Web Dev"],
};
