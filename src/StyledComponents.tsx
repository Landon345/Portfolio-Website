import styled from "@emotion/styled";
//import PokeTheme from ../../PokeTheme;

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

export const SidebarContainer = styled.div`
  position: absolute;
  height: 65vh;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 300px;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  top: 73px;
`;
