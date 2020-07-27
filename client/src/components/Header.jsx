import React from 'react';
import styled from 'styled-components';
import { BsPeopleCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import HeaderBottom from './HeaderBottom.jsx';

const StyledWrapper = styled.div`
  background-color: #494f5c;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 116px;
  z-index: 100;
`;

const StyledNav1 = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  height: 66px;
  width: 100%;
  padding: 0 26.25px 0 26.25px;
  box-sizing: border-box;
  border-bottom: 1px solid #373c46;
`;

const StyledImage = styled.img`
  width: 99.25px;
  padding: 0 15px;
`;

const StyledSection = styled.section`
  padding-right: 40px;
  margin-right: 5px;
`;

const StyledLink = styled.a`
  font-weight: 600;
  color: #d8d8da;
  padding: 0 13px;
  transition: color 0.1s ease-in;
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

const StyledSpacer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-shrink: 1;
  max-width: 400px;
  height: 66px;
  padding-right: 15px;
`;

const SearchContainer = styled.div`
  background-color: #7d828a;
  border-radius: 3px;
  display: flex;
  flex-shrink: 1;
  width: 400px;
  align-items: center;
  margin-right: 15px;
`;

const StyledInput = styled.input`
  color: #16181d;
  font-size: 13px;
  height: 22px;
  width: 100%;
  padding: 11px 28px 11px 13px;
  background-color: #7d828a;
  line-height: 1.35;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  &::placeholder {
    color: #4f545e;
  }
`;

const StyledIcon = styled.img`
  width: 15px;
  padding-right: 9.375px;
`;

const StyledLogIn = styled.a`
  box-sizing: border-box;
  border: 2px solid #757880;
  border-right: 1px solid #757880;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 143px;
  height: 46.5px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #d8d8da;
  transition: all 0.1s ease-in;
  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const StyledH4 = styled.h4`
  margin-left: 15px;
  font-size: 13.5px;
`;

const StyledSignUp = styled.div`
  box-sizing: border-box;
  border: 2px solid #757880;
  border-left: 1px solid #757880;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 103px;
  height: 46.5px;
  font-weight: bold;
  color: #d8d8da;
  letter-spacing: 1px;
  transition: all 0.1s ease-in;
  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const NextStyledH4 = styled.h4`
  font-size: 13.5px;
`;

const Header = (props) => {
  return (
    <StyledWrapper>
      <StyledNav1>
        <StyledImage
          id="logo"
          src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"
          alt="Humble"
        />
        <StyledSection>
          <StyledLink>
            13
            {'\u00A0'}
            BUNDLES
          </StyledLink>
          <StyledLink>CHOICE</StyledLink>
          <StyledLink>STORE</StyledLink>
          <StyledLink>ABOUT</StyledLink>
        </StyledSection>
        <StyledSpacer />
        <SearchContainer>
          <StyledInput type="text" placeholder="Search" />
          <StyledIcon
            src="https://res.cloudinary.com/overview/image/upload/t_icon/v1595548753/platformicons/thickSearch_sqzkz1.png"
            alt="search-icon"
          />
        </SearchContainer>
        <StyledLogIn>
          <IconContext.Provider
            value={{ verticalAlign: 'bottom', color: '#d8d8da', size: '31px', marginRight: '15px' }}
          >
            <BsPeopleCircle />
          </IconContext.Provider>
          <StyledH4>
            LOG
            {'\u00A0'}
            IN
          </StyledH4>
        </StyledLogIn>
        <StyledSignUp>
          <NextStyledH4>
            SIGN
            {'\u00A0'}
            UP
          </NextStyledH4>
        </StyledSignUp>
      </StyledNav1>
      <HeaderBottom />
    </StyledWrapper>
  );
};

export default Header;
