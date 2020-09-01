import styled from "src/styled/styled";

type buttonProps = {
  bg: string;
  color: string;
  bgHover: string;
  theme?: object;
};

export const Button = styled.button<buttonProps>`
  background-color: ${({ theme }) => theme.colors.Background};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.Headline};
  padding: 10px 30px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.ButtonText};
  border-radius: 30px;
  @media only screen and (max-width: 768px) {
    padding: 5px 15px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.ButtonHover};

    transition: background-color 0.25s ease-in-out;
    transition: color 0.15s ease-in-out;
  }
`;

export const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Hr};
`;

export const Image = styled.img`
  object-fit: contain;
  height: ${({ height }) => height};
`;
