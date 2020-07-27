import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Portal from './Portal.js';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100px;
`;

const App = (props) => {
  return (
    <StyledWrapper>
      <Header />
      <Portal>
        <Footer />
      </Portal>
    </StyledWrapper>
  );
};

export default App;
