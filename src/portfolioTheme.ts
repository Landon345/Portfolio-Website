import { theme } from "@chakra-ui/core";

export const portfolioTheme = {
  ...theme,
  colors: {
    ...theme.colors,

    Background: "#eff0f3",
    BackgroundHover: "#dee1e3f0",
    Headline: "#0d0d0d",
    Paragraph: "#2a2a2a",
    LightParagraph: "#4a4a4a",
    Button: "#ff8e3c",
    ButtonHover: "#ff7211",
    ButtonText: "#0d0d0d",
    Hr: "#eee8e1",

    Stroke: "#0d0d0d",
    Main: "#eff0f3",
    Highlight: "#ff8e3c",
    Secondary: "#fffffe",
    Tertiary: "#d9376e",
  },
};

export const darkPortfolioTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    Background: "#232946",
    BackgroundHover: "#232967f0",
    Headline: "#fffffe",
    Paragraph: "#b8c1ec",
    LightParagraph: "#435695",
    Button: "#eebbc3",
    ButtonHover: "#ddaab2",
    ButtonText: "#232946",
    Hr: "#131946",

    Stroke: "#121629",
    Main: "#b8c1ec",
    Highlight: "#eebbc3",
    Secondary: "#fffffe",
    Tertiary: "#eebbc3",
  },
};

//export default portfolioTheme;
