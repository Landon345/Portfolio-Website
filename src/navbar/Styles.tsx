import styled from "src/styled/styled";

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
    transition: background-color 0.04s ease, font-weight 0.04s ease;
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
  z-index: 100;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.75s ease-in-out;
`;
