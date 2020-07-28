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

const StyledContent = styled.div`
  width: 1300px;
  height: 306.5px;
  background: pink;
`;

const Footer = (props) => {
  return (
    <StyledWrapper>
      <StyledContent></StyledContent>
    </StyledWrapper>
  );
};
export default Footer;
