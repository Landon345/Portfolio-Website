import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  colors: {
    Background: string;
    BackgroundHover: string;
    Headline: string;
    Paragraph: string;
    Button: string;
    ButtonHover: string;
    ButtonText: string;

    Stroke: string;
    Main: string;
    Highlight: string;
    Secondary: string;
    Tertiary: string;
  };
};

export default styled as CreateStyled<Theme>;
