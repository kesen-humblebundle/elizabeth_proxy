import React from 'react';
import styled from 'styled-components';

const StyledTrending = styled.div`
  width: 506px;
  height: 256.5;
  margin: 0 0 0 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 70px;
`;

const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 11px 0;
  color: #ecf1fe;
`;

const StyledULWrapper = styled.div`
  height: 162.5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledUL = styled.ul`
  list-style-type: none;
  padding: 0 0 30px 0;
  margin-top: 0;
`;

const StyledLi = styled.li`
  font-size: 13.5px;
  padding: 10.5px 0;
  width: 218px;
  color: #a1a7b2;
`;

const FootTrending = (props) => {
  return (
    <StyledTrending>
      <StyledH2>TRENDING GAMES</StyledH2>
      <StyledULWrapper>
        <StyledUL>
          <StyledLi>Destroy All Humans</StyledLi>
          <StyledLi>Deep Rock Galactic</StyledLi>
          <StyledLi>The Outer Worlds</StyledLi>
          <StyledLi>Frankie's Meow</StyledLi>
        </StyledUL>
        <StyledUL>
          <StyledLi>No Man's Sky</StyledLi>
          <StyledLi>ASTRONEER</StyledLi>
          <StyledLi>Othercide</StyledLi>
          <StyledLi>Meat Necklace</StyledLi>
        </StyledUL>
      </StyledULWrapper>
    </StyledTrending>
  );
};

export default FootTrending;
