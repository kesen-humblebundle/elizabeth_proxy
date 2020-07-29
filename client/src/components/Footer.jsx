import React from 'react';
import styled from 'styled-components';
import FootRefer from './FootRefer.jsx';
import FootAbout from './FootAbout.jsx';
import FootTrending from './FootTrending.jsx';
import FootSocial from './FootSocial.jsx';

const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #2f333d;
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
  display: flex;
`;

const Footer = (props) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledContent>
          <FootRefer />
          <FootAbout />
          <FootTrending />
          <FootSocial />
        </StyledContent>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};
export default Footer;
