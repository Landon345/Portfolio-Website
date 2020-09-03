import styled from "src/styled/styled";

export const OverlayHover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.35s ease;
  background: ${({ theme }) => theme.colors.ImageHover};
`;

type OverlayContainerProps = {
  images: number;
};
export const OverlayContainer = styled.div<OverlayContainerProps>`
  position: relative;
  width: 100%;
  height: auto;
  cursor: ${({ images }) => images > 1 && "pointer"};
  background-color: white;
  &:hover .overlay-hover {
    opacity: 1;
  }
`;

export const OverlayImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
`;

export const OverlayDescription = styled.div`
  color: ${({ theme }) => theme.colors.Headline};
  font-size: 1.5em;
  position: absolute;
  opacity: 0.9;
  top: 50%;
  left: 50%;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OverlayA = styled.a`
  margin: 5px;
`;

export const OverlayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Button};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.ButtonText};
  padding: 5px 20px;
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
