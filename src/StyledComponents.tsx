import styled from "@emotion/styled";
import portfolioTheme from "src/portfolioTheme";

type sidebarProps = {
  open: boolean;
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
  color: #222222;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px 20px 20px;
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bolder;
    background-color: #e9e9e9;
  }
`;

export const SidebarContainer = styled("div")<sidebarProps>`
  position: absolute;
  height: 65vh;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 300px;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  top: 73px;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 1s ease-in-out;
`;

export const Button = styled.button`
  background-color: ${portfolioTheme.colors["Button"]};
  outline: none;
  border: none;
  color: ${portfolioTheme.colors["ButtonText"]};
  padding: 10px 30px;
  cursor: pointer;
  border: 1px solid ${portfolioTheme.colors["ButtonText"]};
  border-radius: 30px;
  @media only screen and (max-width: 768px) {
    padding: 5px 15px;
  }
  &:hover {
    background-color: ${portfolioTheme.colors["ButtonHover"]};

    transition: background-color 0.25s ease-in-out;
    transition: color 0.15s ease-in-out;
  }
`;
