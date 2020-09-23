import * as blogPhotos from "src/assets/blogPhotos/pictures";

type Post = {
  slug: string;
  title: string;
  description: string;
  hashTags: Array<string>;
};

type PostsArray = {
  Posts: Array<Post>;
  allTags: Array<string>;
};

export const PostData: PostsArray = {
  Posts: [
    {
      slug: "set-up-react-project-with-typescript",
      title: "How to set up a React Project with typescript",
      description: "Typescript with React isn't as scary as you think.",
      hashTags: ["How to", "React", "Web Dev"],
    },
    {
      slug: "host-a-website",
      title: "How to host a website.",
      description: "It is super duper simple to host a website on Netlify.",
      hashTags: ["How to", "Web Dev"],
    },
    {
      slug: "top-vs-code-extensions",
      title: "Top VS Code Extensions",
      description:
        "My list of top 10 visual studio code extensions. There are 5 general and 5 specific extensions.",
      hashTags: ["Top", "Web Dev"],
    },
    {
      slug: "top-react-packages",
      title: "Top React NPM Packages",
      description: "My list of top 7 npm packages that I use with React.",
      hashTags: ["Top", "React", "Web Dev"],
    },
  ],
  allTags: ["How to", "React", "Web Dev", "Top"],
};

type singlePost = {
  title: string;
  description: string;
  headers: any;
  paragraphs: any;
  photos: any;
  links: any;
  terminal: any;
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
      "So there we have it, it is pretty simple to do. In the future, I expect React to default to using TypeScript just like Angular. A great advantage that using TypeScript brings is the ability to use absolute routes to import our different components. This is done by going to the tsconfig file and adding in a rule of BaseUrl: “.”. This way, instead of doing “../components/button”, we can do “src/components/button”. As our component tree gets larger and larger, it becomes way better to use the second option (absolute routes). Also, TypeScript provides us with the tools needed to add great type checking and intellisense to our project, so that ultimately, we make fewer mistakes and minimize our debug time when writing code.",
    setup: "To set up our app with TypeScript - Run: ",
    or: "Or",
    add:
      "If we have a React project that doesn’t use TypeScript right now, we can add TypeScript support by running:",
  },
  photos: {},
  links: {},
  terminal: {
    setup1: "npx create-react-app my-app --template typescript",
    setup2: "yarn create react-app --template typescript",
    add1:
      "npm install --save typescript @types/node @types/react @types/react-dom @types/jest",
    add2:
      "yarn add typescript @types/node @types/react @types/react-dom @types/jest",
  },
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
  terminal: {},
  hashTags: ["How to", "Web Dev"],
};

export const TopExtensionsPost: singlePost = {
  title: "Top VS Code Extensions",
  description:
    "My list of top 10 visual studio code extensions. There are 5 general and 5 specific extensions.",
  headers: {
    why: "Why we use vs code extensions",
    general: "Top 5 General Extensions",
    prettier: "1. Prettier",
    bracket: "2. Bracket Pair Colorizer 2",
    liveServer: "3. Live Server",
    liveShare: "4. Live Share",
    colorHighlight: "5. Color Highlight",
    specific: "Top 5 Specific VS Code Extensions",
    eslint: "1. ES Lint",
    reactSnippets: "2. ES7 React/Redux/GraphQL/React-Native snippets",
    vetur: "3. Vetur for Vue",
    phpintel: "4. Php Intelephense",
    jsSnippets: "5. JavaScript (ES6) Code Snippets",
    conclusion: "Conclusion",
  },
  paragraphs: {
    why:
      "Visual Studio Code has got to be the best text editor readily available. It offers thousands of extensions that make our lives as developers easier. These extensions can help with almost every aspect of writing code.",
    general:
      "Here is the list of my top 5 more general vs code extensions that all developers can find useful in one way or another.",
    prettier:
      "We would not pretend to think that this was a vs code extensions article without Prettier would we? Anyway, Prettier is a code formatter that, when configured correctly, will format our code beautifully every time we save our files. This extension is simple, but very effective. It saves so much time because we don’t have to sit around making sure that our code is formatted to be readable. We can just let Prettier handle all of that for us.",
    bracket:
      "Bracket Pair Colorizer is a visual enhancement to vs code. When we write JavaScript, we make so many brackets (“{}”) that we don’t know which ones pair with other ones, and it can sometimes be a mess. With Bracket Pair Colorizer, it changes the colors of the brackets based on pairs. If a couple brackets are a pair, they will be the same color. No more questioning which brackets pair with each other.",
    liveServer:
      "Live Server adds functionality to vs code. It allows us to create any old html file, right click on it, and open it up in a browser. Then, whenever we make changes and save them, the browser automatically refreshes and shows our changes. This extension is super helpful for quick tests and simple projects. It is great for beginners who just want their code to run without any other hassel.",
    liveShare:
      "Live Share adds more functionality to vs code. We all know google docs, right? Well, this extension allows vs code to behave in a similar way to google docs. I’ll explain what I mean. When we share our google doc with someone and allow them to edit. We can see them making changes to our document in real time. This is what Live Share allows vs code to do. We can work with someone, on the same file, in real time, in completely different places from one another. All we have to do is a video chat, and it’s like that person is in the room with us. Live Share has got to be one of the best, if not the best, vs code extension out there. It is unique to vs code and is a programming collaboration miracle.",
    colorHighlight:
      "Color Highlight is a visual enhancement. It highlights our colors to what they are right inside our text editor. If we specified a color #0000ff, then this string of characters would be highlighted with blue. If we specified a color as rgb(255, 0, 0), then this would be highlighted with red. This extension is great for quickly visualizing which colors go where. It makes creating our color scheme easier and faster.",
    specific:
      "Here is the list of my top 5 specific vs code extensions that JavaScript, React, Vue, and Php developers can find useful in one way or another.",
    eslint:
      "ES Lint is a JavaScript linter for vs code. It tells us when we have syntax errors in our code. It will catch these errors without us even having to save. Each error will be underlined with a red squiggly line, and when we hover over it, it will give us a brief explanation of the error. Sometimes however, this extension can get annoying when it gives an error for something that we know will work. Most of these inconveniences can be dealt with by going to the ES Lint settings and turning some features off. For the most part though, ES Lint saves us time and energy when writing code.",
    reactSnippets:
      "Snippets are a great way to save time when writing repeatable code. This is where our ES7 React/Redux snippets come in handy. All we have to do is type 3-7 letters in the correct order, press enter or tab, and boom, we have a React template to jump into. There is no need to write the same import statements, class declarations, or default exports in every file. We can just let our wonderful extension do that for us.",
    vetur:
      "Vetur has a very specific use case. Basically, we only need Vetur if we are using Vue to develop our applications. When I say we need it, I mean it. Trying to develop in Vue without the Vetur extension would be an absolute nightmare. There are many reasons for this, but the most obvious one is that Vetur gives syntax highlighting to Vue. By default there isn’t syntax highlighting for files with the .vue file extension. It also has emmet, snippets, and linting built in.",
    phpintel:
      "If we are writing any kind of php code, it would be great if we had intelesense for which methods we can use. Php Intelephense gives us intelesense and also linting. Intelephense is a lot like ES Lint in the way it lints our php code. Laravel developers are a great beneficiary of this extension. Of course, there are other alternatives to this extension. One of which is PhpStorm, a completely different text editor to VS Code. It is a complete IDE for php. However, it is a tool that needs to be paid for, and I would rather not pay for such a tool. Php Intelephense is our next best option.",
    jsSnippets:
      "Some more snippets. Yes, that’s right, JavaScript snippets. These snippets allow us to write common JavaScript lines extremely fast. Some of these common lines include: import statements, export statements, console logs, function statements, and much more. It would take some time to learn all of the various letter combinations, but once learned, our JavaScript productivity should go through the roof.",
    conclusion:
      "VS code extensions are fantastic. Visual Studio code would not be where it is today if it weren’t for the great programmers who came up with these super useful extensions. Most of the extensions are open source which means that anyone can help make these extensions even better. I hope we all learned a little bit about which vs code extensions are the best, and that we can all appreciate the easier lives we have because of them.",
  },
  photos: {
    prettier: blogPhotos.prettier,
    bracket: blogPhotos.brackets,
    liveServer: blogPhotos.liveServer,
    liveShare: blogPhotos.liveShare,
    colorHighlight: blogPhotos.colorHighlight,

    eslint: blogPhotos.eslint,
    reactSnippets: blogPhotos.reactSnippets,
    vetur: blogPhotos.vetur,
    phpintel: blogPhotos.phpintel,
    jsSnippets: blogPhotos.jsSnippets,
  },
  links: {},
  terminal: {},
  hashTags: ["Top", "Web Dev"],
};

export const TopReactPackagesPost: singlePost = {
  title: "My Top React NPM Packages",
  description: "My list of top 7 npm packages that I use with React.",
  headers: {
    top: "The Top 7 NPM packages that I use",
    emotion: "1. Emotion",
    chakra: "2. Chakra",
    router: "3. React Router",
    momentOrDay: "4. Moment or DayJs",
    framerMotion: "5. Framer Motion",
    ghpages: "6. GitHub Pages",
    reactQuery: "7. React Query",
    conclusion: "Conclusion",
  },
  paragraphs: {
    top:
      "There are so many npm packages out there. Some packages are specific to React while others are just general purpose. Today, I am listing my top 7 npm packages that I use with React.",
    emotion:
      "Emotion is a library that specializes in making it easy to write css styles with JavaScript. The next package, Chakra, makes use of emotion and integrates very well with it. Emotion and Chakra should be all we need to style our webpage.",
    chakra:
      "Similar to Material-ui, Chakra-ui is a great way to style our React components. The reason I like to use it instead of Material-ui is because it is much more flexible with custom styling, and it still brings some awesome out of the box styled components.",
    router:
      "There are a few great ways to handle routing in React, but the best way has got to be with React Router. It provides a clean solution to routing within a React application.",
    momentOrDay:
      "Moment and DayJs have got to be the two most popular date libraries available. They both are super simple to use and help tremendously when working with any kind of dates. They are also eerily similar. If we know how to use one of these date packages, then we certainly know the other one as well. One thing to keep in mind, however, is that DayJs is 515 kB while Moment is 4.19 MB. ",
    framerMotion:
      "Framer Motion is by far my favorite animation library. I love using Framer Motion because it is simple to use and lets us make our own animations easily. All we have to do is wrap a section in our HTML we want to animate with <motion.div></motion.div>, and we are set to start adding animations to that section.",
    ghpages:
      "Github pages allow us to host our project on GitHub. Just follow a few steps, and just like that, we have a project hosted,  ready to be seen by all.",
    reactQuery:
      "Geez, I almost forgot about react-query. This wonderful npm package managed by Tanner Linsley helps us manage our api fetching operations. It provides us with the tools we need to refetch from our api, cache our data, update our data, and have a loading state and error state. This package is one of the most important packages on this list. React Router is the most important.",
    conclusion:
      "Whether we are just getting started with React, or we are seasoned pros, these React packages are sure to help. I cannot even imagine trying to do the things I do in React without the help of these wonderful libraries. Thank you to all the programmers who made these packages a reality!",
  },
  photos: {},
  links: {
    emotion: "https://emotion.sh/docs/introduction",
    chakra: "https://chakra-ui.com/getting-started",
    router: "https://reactrouter.com/web/guides/quick-start",
    momentOrDay: "https://day.js.org/docs/en/display/format",
    framerMotion: "https://www.framer.com/api/motion/",
    ghpages: "https://www.npmjs.com/package/gh-pages",
    reactQuery: "https://react-query.tanstack.com/docs/overview",
  },
  terminal: {
    emotion: "npm i emotion",
    chakra:
      "npm i @chakra-ui/core @emotion/core @emotion/styled emotion-theming",
    router: "npm i react-router-dom",
    moment: "npm i moment",
    day: "npm i dayjs",
    framerMotion: "npm i framer-motion",
    ghpages: "npm i gh-pages",
    reactQuery: "npm i react-query",
  },
  hashTags: ["Top", "React", "Web Dev"],
};
