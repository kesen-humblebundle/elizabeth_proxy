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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product_id: '/21/' };
  }

  componentDidMount() {
    if (window.location.pathname === '/') {
      window.location.pathname = this.state.product_id;
    } else {
      this.setState({ product_id: window.location.pathname });
    }
  }

  render() {
    return (
      <StyledWrapper>
        <Header />
        <Portal>
          <Footer />
        </Portal>
      </StyledWrapper>
    );
  }
}

export default App;
