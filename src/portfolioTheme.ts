import { theme } from "@chakra-ui/core";

const portfolioTheme = {
  ...theme,
  colors: {
    ...theme.colors,

    Background: "#eff0f3",
    Headline: "#0d0d0d",
    Paragraph: "#2a2a2a",
    Button: "#ff8e3c",
    ButtonText: "#0d0d0d",

    Stroke: "#0d0d0d",
    Main: "#eff0f3",
    Highlight: "#ff8e3c",
    Secondary: "#fffffe",
    Tertiary: "#d9376e",

    DarkBackground: "#232946",
    DarkHeadline: "#fffffe",
    DarkParagraph: "#b8c1ec",
    DarkButton: "#eebbc3",
    DarkButtonText: "#232946",

    DarkStroke: "#121629",
    DarkMain: "#b8c1ec",
    DarkHighlight: "#eebbc3",
    DarkSecondary: "#fffffe",
    DarkTertiary: "#eebbc3",
  },
};

export default portfolioTheme;
