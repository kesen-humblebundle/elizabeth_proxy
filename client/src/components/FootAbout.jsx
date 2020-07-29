import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  height: 256.5px;
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 11px 0;
  color: #ecf1fe;
`;

const StyledUL = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin-top: 0;
`;

const StyledLi = styled.li`
  font-size: 13.5px;
  width: 100%;
  padding: 10.5px 0;
  color: #a1a7b2;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const FootAbout = (props) => {
  return (
    <StyledAbout>
      <StyledH2>ABOUT</StyledH2>
      <StyledUL>
        <StyledLi>Blog</StyledLi>
        <StyledLi>Support</StyledLi>
        <StyledLi>Order Resender</StyledLi>
        <StyledLi>Developer</StyledLi>
      </StyledUL>
    </StyledAbout>
  );
};

export default FootAbout;
