import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import ThemeContext from '../Context/ThemeContext';

const Container = styled.div`
  max-width: 90vw;
  min-height: 60%;
  background-color: ${(props) => (props.isdark ? '#6d6875' : '#212529')};
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 15px;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.19);
  color: ${(props) => (props.isdark ? '#ffffff' : '#ffffff')};
  @media (min-width: 768px) {
    max-width: 40vw;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 300px));
    gap: 25px;
  }
`;

const ContainerData = styled.div`
  width: 100%;
  padding: 5px;
`;

const ListData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

const colorTipo = (tipo) => {
  let color = '';
  switch (tipo) {
    case 'normal':
      color = '#e9edc9';
      break;

    case 'fighting':
      color = '#240046';
      break;

    case 'flying':
      color = '#d3d3d3';
      break;

    case 'poison':
      color = '#38b000';
      break;

    case 'ground':
      color = '#283618';
      break;

    case 'bug':
      color = '#a98467';
      break;

    case 'ghost':
      color = '#9ec1a3';
      break;

    case 'steel':
      color = '#b6be9c';
      break;

    case 'fire':
      color = '#d00000';
      break;

    case 'water':
      color = '#023e8a';
      break;

    case 'grass':
      color = '#006400';
      break;

    case 'electric':
      color = '#ffd60a';
      break;

    case 'psychic':
      color = '#8e9aaf';
      break;

    case 'ice':
      color = '#11b5e4';
      break;

    case 'dragon':
      color = '#ac3931';
      break;

    case 'dark':
      color = '#020101';
      break;

    case 'fairy':
      color = '#b338ff';
      break;

    case 'rock':
      color = '#727176';
      break;

    case 'unknown':
      color = '#f70562';
      break;

    case 'shadow':
      color = '#7a7a7a';
      break;

    default:
      color = '#000000';
  }
  return color;
};

const PokemonCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  // console.log(data);

  const pokemonInfo = useMemo(
    () => ({
      ...data,
      nombre:
        data.nombre.slice(0, 1).toUpperCase() +
        data.nombre.slice(1, data.nombre.length),
    }),
    [data],
  );
  // console.log(pokemonInfo);

  return (
    <Container isdark={theme === 'dark'} className='nes-container'>
      <div>
        <h2>{pokemonInfo.nombre}</h2>
        <img
          width='150px'
          alt={pokemonInfo.nombre}
          src={pokemonInfo.imagen.front_default}
        />
      </div>

      <ContainerData>
        <h3 style={{ textAlign: 'left' }}>Tipos: </h3>
        <ListData>
          {pokemonInfo.tipos.map((el) => {
            return (
              <p
                key={el.type.name}
                style={{ color: colorTipo(el.type.name), fontWeight: 'bold' }}
              >
                {el.type.name}
              </p>
            );
          })}
        </ListData>
      </ContainerData>
      <ContainerData>
        <h3>
          Experiencia Base:{' '}
          <span style={{ color: '#7a7a7a' }}>{pokemonInfo.expBase}</span>
        </h3>
        <h3>
          Altura: {''}
          <span style={{ color: '#7a7a7a' }}>{pokemonInfo.altura}</span>
        </h3>
        <h3>
          Peso: <span style={{ color: '#7a7a7a' }}>{pokemonInfo.peso}</span>
        </h3>
      </ContainerData>

      <ContainerData>
        <h3 style={{ textAlign: 'left' }}>Habilidades: </h3>
        <ListData>
          {pokemonInfo.habilidades.map((el) => {
            return (
              <p
                key={el.ability.name}
                style={{ color: '#7a7a7a', fontWeight: 'bold' }}
              >
                {el.ability.name}
              </p>
            );
          })}
        </ListData>
      </ContainerData>
    </Container>
  );
};

export default React.memo(PokemonCard);
