import styled from "src/styled/styled";

type statbarProps = {
  width: number;
};

export const CreatorList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 6%;
  @media only screen and (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

export const Creator = styled.a`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 30px;
  font-family: Cardo;
  font-size: 22px;
`;

export const SingleStatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  text-align: left;
  margin: 5px 5% 5px 100px;
  padding: 15px 3px;
  font-size: 30px;
  @media only screen and (max-width: 558px) {
    font-size: 22px;
    padding: 8px 3px;
  }
  @media only screen and (max-width: 1500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    margin: 5px 5% 5px 5%;
  }
`;

/**Set the width and background color of the Statbar by using props passed into it: maxStat, typeColor, and stat */
export const StatBar = styled.div<statbarProps>`
  background-color: ${({ theme }) => theme.colors.Tertiary};
  color: ${({ theme }) => theme.colors.Stroke};
  width: ${(props) => props.width + "%"};
`;
/**Set the container for the statBar with a good background color using the typeColor prop */
export const StatBarWhole = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundHover};
  border: 1px solid ${({ theme }) => theme.colors.Tertiary};
  /* box-shadow: 1px 1px 2px 1px #978792f0; */
  border-radius: 30px;
`;
