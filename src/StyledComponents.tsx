import styled from "src/styled";
import { ThemeProps } from "styled-components";

type sidebarProps = {
  open: boolean;
};

type statbarProps = {
  width: number;
};

export const NavbarLink = styled.div`
  text-decoration: none;
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  display: inline-block;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 12px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  position: relative;
  white-space: nowrap;
  border-radius: 20px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.Headline};
  &:hover {
    background-color: ${({ theme }) => theme.colors.BackgroundHover};
  }
`;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px 20px 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Headline};
  &:hover {
    font-weight: bolder;
    background-color: ${({ theme }) => theme.colors.Button};
  }
`;

export const SidebarContainer = styled("div")<sidebarProps>`
  position: absolute;
  height: 65vh;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 300px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.BackgroundHover};
  top: 73px;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 1s ease-in-out;
`;

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

export const SingleStatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  text-align: left;
  margin: 5px 5% 5px 100px;
  @media only screen and (max-width: 558px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    margin: 5px 5% 5px 5%;
  }
`;

/**Set the width and background color of the Statbar by using props passed into it: maxStat, typeColor, and stat */
export const StatBar = styled.div<statbarProps>`
  background-color: ${({ theme }) => theme.colors.Highlight};
  color: ${({ theme }) => theme.colors.Stroke};
  width: ${(props) => props.width + "%"};
`;
/**Set the container for the statBar with a good background color using the typeColor prop */
export const StatBarWhole = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundHover};
`;
