import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 90vw;
  min-height: 60%;
  background-color: ${(props) => (props.isdark ? '#272640' : '#1d132c')};
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 15px;
  text-align: center;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.19);
  @media (min-width: 768px) {
    max-width: 40vw;
  }
`;

const ErrorMessage = () => {
  return (
    <Container className='nes-container'>
      <h2 className='nes-text is-error'>
        No se pudo encontrar el pokemon que buscabas, proba buscando otro
      </h2>
      <i className='nes-charmander'></i>
    </Container>
  );
};

export default ErrorMessage;
