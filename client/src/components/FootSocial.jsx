import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaFacebookF, FaBlog, FaTwitter, FaSortDown } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { TiSocialInstagram } from 'react-icons/ti';
import { IconContext } from 'react-icons';

const StyledSocial = styled.div`
  width: 325px;
  height: 256.5px;
  color: #ecf1fe;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

const StyledP = styled.p`
  margin: 0 0 0 4px;
  font-size: 13.5px;
  color: #fff;
`;

const StyledLangWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const ArrowWrapper = styled.span`
  padding-bottom: 5px;
`;
const SocialContainer = styled.div`
  width: 52%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 22px 0 32px 0;
  text-align: right;
`;

const StyledSpot = styled.div`
  height: 31px;
  width: 31px;
  display: inline-block;
  color: #3b3f48;
  background: #7c828d;
  border-radius: 25px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPNext = styled.p`
  font-size: 13.5px;
  text-align: right;
  margin: 0 0 25px 0;
  font-weight: 300;
  color: #d8dbdf;
  line-height: 20px;
`;
const DotContainer = styled.span`
  margin: 5px 10px 0 8px;
`;

const FinePrintContainer = styled.div`
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const StyledFinePrint = styled.p`
  color: #a1a7b2;
  letter-spacing: 0.4px;
  font-size: 11.5px;
  text-align: right;
  margin: 0;
`;

const FootSocial = (props) => {
  return (
    <StyledSocial>
      <StyledLangWrapper>
        <IconContext.Provider value={{ size: '14px' }}>
          <FaGlobe />
        </IconContext.Provider>
        <StyledP>Language: English</StyledP>
        <IconContext.Provider value={{ size: '14px' }}>
          <ArrowWrapper>
            <FaSortDown />
          </ArrowWrapper>
        </IconContext.Provider>
      </StyledLangWrapper>
      <SocialContainer>
        <StyledSpot>
          <IconContext.Provider value={{ size: '16px' }}>
            <FaFacebookF />
          </IconContext.Provider>
        </StyledSpot>
        <StyledSpot>
          <IconContext.Provider value={{ size: '18px' }}>
            <FaTwitter />
          </IconContext.Provider>
        </StyledSpot>
        <StyledSpot>
          <IconContext.Provider value={{ size: '21px' }}>
            <TiSocialInstagram />
          </IconContext.Provider>
        </StyledSpot>
        <StyledSpot>
          <IconContext.Provider value={{ size: '18px' }}>
            <FaBlog />
          </IconContext.Provider>
        </StyledSpot>
      </SocialContainer>
      <StyledPNext>
        The Humble community has contributed over $183,000,000 to charity since 2010, making an
        amazing difference to causes all over the world.
      </StyledPNext>
      <FinePrintContainer>
        <IconContext.Provider value={{ size: '7px' }}>
          <StyledFinePrint>
            Terms of Service
            <DotContainer>
              <GoPrimitiveDot />
            </DotContainer>
            Privacy Policy
          </StyledFinePrint>
          <StyledFinePrint>
            Cookie Policy
            <DotContainer>
              <GoPrimitiveDot />
            </DotContainer>
            Legal Notices
          </StyledFinePrint>
        </IconContext.Provider>
      </FinePrintContainer>
    </StyledSocial>
  );
};

export default FootSocial;
