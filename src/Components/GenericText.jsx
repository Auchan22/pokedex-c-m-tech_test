import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../Context/ThemeContext';

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
`;

const GenericText = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container isdark={theme === 'dark'} className='nes-container '>
      <section className='message -left'>
        <div className='nes-balloon from-left'>
          <p>
            "Al que madruga Dios le ayuda, o en este caso, consigue a su
            pokémon"
          </p>
        </div>
      </section>
      <i className='nes-ash' style={{ textAlign: 'left' }}></i>
      <h3 style={{ color: 'black' }}>¿Todavía no buscaste ningún pokemon?</h3>
    </Container>
  );
};

export default GenericText;
