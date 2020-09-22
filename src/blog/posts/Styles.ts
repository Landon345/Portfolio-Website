import styled from "src/styled/styled";

export const PostContainer = styled.div`
  margin: 100px 25%;

  background-color: ${({ theme }) => theme.colors.Background};
  @media (max-width: 1600px) {
    margin: 100px 20%;
  }
  @media (max-width: 1200px) {
    margin: 100px 10%;
  }
  @media (max-width: 600px) {
    margin: 100px 5%;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.Headline};
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 2;
  margin-bottom: 60px;
  font-family: Montserrat;
`;

export const Para = styled.p`
  color: ${({ theme }) => theme.colors.Paragraph};
  font-size: 22px;
  text-align: left;
  line-height: 2.5;
  margin-top: 20px;
  text-indent: 40px;
  font-family: Cardo;
`;

export const Terminal = styled.div`
  background-color: ${({ theme }) => theme.colors.CardBackground};
  color: ${({ theme }) => theme.colors.CardParagraph};
  text-align: left;
  line-height: 2;
  font-size: 18px;
  border-radius: 10px;
  padding: 40px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: Monaco;
`;

export const SubHeader = styled.h3`
  color: ${({ theme }) => theme.colors.Paragraph};
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 2;
  margin-top: 50px;
  font-family: Montserrat;
`;

export const PostImage = styled.img`
  object-fit: contain;
  width: 50%;
  margin: 10px 25%;
  @media (max-width: 800px) {
    width: 80%;
    margin: 10px 10%;
  }
`;
export const LongImage = styled.img`
  object-fit: contain;
  width: 100%;
  margin: 15px 5%;
  @media (max-width: 600px) {
    margin: 10px 0%;
  }
`;
