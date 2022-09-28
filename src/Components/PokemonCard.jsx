import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../Context/ThemeContext';
import { memo } from 'react';

const Container = styled.div`
  max-width: 90vw;
  min-height: 60%;
  background-color: ${(props) => (props.isdark ? '#272640' : '#f4f1de')};
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 15px;
  text-align: center;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.19);
  color: black;
`;

const PokemonCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  let pokemonName =
    data.nombre.slice(0, 1).toUpperCase() +
    data.nombre.slice(1, data.nombre.length);
  //   console.log('a');

  return (
    <Container isdark={theme === 'dark'} className='nes-container '>
      <h2>{pokemonName}</h2>
      <img src={data.imagen.front_default} />
    </Container>
  );
};

export default React.memo(PokemonCard);
