import React, { useContext } from 'react';
import styled from 'styled-components';
import PokemonContext from '../Context/PokemonContext';
import ThemeContext from '../Context/ThemeContext';
import Header from './Header';
import Searchbar from './Searchbar';
import SearchButton from './SearchButton';

const Container = styled.div`
  background-color: ${(props) => (props.isdark ? '#190028' : '#f4f1de')};
  min-height: 100vh;
  padding-bottom: 20px;
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { handleInputChange, pokemonSearch, empty, handleSubmit, handleClick } =
    useContext(PokemonContext);

  return (
    <Container isdark={theme === 'dark'}>
      <Header />
      <Searchbar
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
        value={pokemonSearch}
        isEmpty={empty}
        onClick={handleClick}
      />
      {children}
    </Container>
  );
};

export default Layout;
