import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../Context/ThemeContext';
import Header from './Header';

const Container = styled.div`
  background-color: ${(props) => (props.isdark ? '#190028' : '#f4f1de')};
  height: 100vh;
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container isdark={theme === 'dark'}>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
