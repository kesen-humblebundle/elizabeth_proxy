import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 86px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledRefer = styled.div`
  height: 256.5px;
  width: 269px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 56px 0 0;
`;

const StyledReferChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 191.5px;
  width: 269px;
  margin: 5px 56px 0 0;
`;

const StyledReferMess = styled.p`
  width: 210px;
  height: 57px;
  font-size: 13.5px;
  font-weight: 350;
  margin: 0 28px 0px 0;
  color: #a1a7b2;
`;

const StyledLink = styled.a`
  color: #ef9841;
  font-weight: 600;
  font-size: 13px;
  word-spacing: 0px;
  &:hover {
    cursor: pointer;
  }
`;

const FootRefer = (props) => {
  return (
    <StyledRefer>
      <StyledLogo
        id="logoBottom"
        src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"
        alt="Humble"
      />
      <StyledReferChild>
        <StyledReferMess>
          Limited time offer—Get $8 Wallet Credit to spend on your next store purchase!
        </StyledReferMess>
        <StyledLink>INVITE A FRIEND</StyledLink>
      </StyledReferChild>
    </StyledRefer>
  );
};

export default FootRefer;
