import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #7d828a;
`;

const StyledContentWrapper = styled.div`
  max-width: 1500px;
  height: 400px;
  padding: 0 100px;
  display: flex;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 1300px;
  height: 256.5px;
  background: pink;
  display: flex;
`;

const StyledLogo = styled.img`
  width: 86px;
`;

const StyledRefer = styled.div`
  height: 256.5px;
  width: 269px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 56px 0 0;
  background: purple;
`;

const StyledReferChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 196.5px;
  width: 269px;
  margin: 0 56px 0 0;
  background: violet;
`;

const StyledReferMess = styled.p`
  width: 241px;
  height: 57px;
  margin: 0 28px 24px 0;
  background: pink;
`;

const StyledLink = styled.a`
  color: orange;
  font-weight: bold;
  background: yellow;
`;

const StyledAbout = styled.div`
  height: 256.5px;
  width: 101.5px;
  background: lime;
`;
const StyledTrending = styled.div`
  width: 506px;
  height: 256.5;
  margin: 0 0 0 42px;
  background: sandybrown;
`;
const StyledSocial = styled.div`
  width: 325px;
  height: 256.5px;
  background: lightblue;
`;

const Footer = (props) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledContent>
          <StyledRefer>
            <StyledLogo
              id="logoBottom"
              src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"
              alt="Humble"
            />
            <StyledReferChild>
              content<StyledReferMess>Message for you</StyledReferMess>
              <StyledLink>Here is a link</StyledLink>
            </StyledReferChild>
          </StyledRefer>
          <StyledAbout></StyledAbout>
          <StyledTrending></StyledTrending>
          <StyledSocial></StyledSocial>
        </StyledContent>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};
export default Footer;
