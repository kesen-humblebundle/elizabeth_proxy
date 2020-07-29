import React from 'react';
import styled from 'styled-components';
import { MdStar } from 'react-icons/md';
import { FaSortDown, FaWallet, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const StyledNav2 = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #373c46;
  box-sizing: border-box;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1500px;
`;

const StyledLinkWrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLinkLeft = styled.a`
  padding: 15px;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #d8d8da;
  transition: color 0.1s ease-in;
  &:hover {
    color: white;
  }
`;

const Orange = styled.a`
  padding: 15px;
  font-size: 13px;
  font-weight: 700;
  color: #ef9741;
  transition: color 0.1s ease-in;
  &:hover {
    color: white;
  }
`;

const StyledLinkWrapperRight = styled.div`
  display: flex;
  align-items: center;
  color: #d8d8da;
`;

const StyledLinkRight = styled.a`
  font-size: 13px;
  padding: 15px;
  display: flex;
  align-items: center;
  transition: color 0.1s ease-in;
  &:hover {
    color: white;
  }
`;

const HeaderBottom = (props) => {
  return (
    <StyledNav2>
      <StyledContainer>
        <StyledLinkWrapperLeft>
          <StyledLinkLeft>ON SALE</StyledLinkLeft>
          <StyledLinkLeft>NEW RELEASES</StyledLinkLeft>
          <StyledLinkLeft>
            BESTSELLING
            <FaSortDown />
          </StyledLinkLeft>
          <StyledLinkLeft>
            BROWSE
            <FaSortDown />
          </StyledLinkLeft>
          <StyledLinkLeft>CHARITY</StyledLinkLeft>
          <Orange>GET $8 WALLET CREDIT</Orange>
        </StyledLinkWrapperLeft>
        <StyledLinkWrapperRight>
          <IconContext.Provider value={{ size: '14px' }}>
            <StyledLinkRight>
              <FaWallet />
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}
              $0.00
            </StyledLinkRight>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '18px' }}>
            <StyledLinkRight>
              <MdStar />
              {'\u00A0'}
              {'\u00A0'}0
            </StyledLinkRight>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '14px' }}>
            <StyledLinkRight>
              <FaShoppingCart />
              {'\u00A0'}
              {'\u00A0'}
              {'\u00A0'}0
            </StyledLinkRight>
          </IconContext.Provider>
        </StyledLinkWrapperRight>
      </StyledContainer>
    </StyledNav2>
  );
};

export default HeaderBottom;
