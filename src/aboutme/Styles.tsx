import styled from "src/styled/styled";

type statbarProps = {
  width: number;
};

export const CreatorList = styled.div``;

export const Creator = styled.div``;

export const SingleStatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  text-align: left;
  margin: 5px 5% 5px 100px;
  padding: 20px 0px;
  font-size: 30px;
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
  border-radius: 30px;
`;
