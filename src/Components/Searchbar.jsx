import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';

const Container = styled.div`
  min-width: 100vw;
  margin: 10px auto;
  min-height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SearchInput = styled.input`
  font-size: 12px;
  min-width: 40vw;
`;

const StyledSpan = styled.span`
  margin-top: 10px;
  font-size: 10px;
`;

const EmptyInput = () => {
  return (
    <StyledSpan className='nes-text is-error'>
      El input no puede estar vacío
    </StyledSpan>
  );
};

const Searchbar = ({ handleSubmit, handleChange, value, isEmpty, onClick }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchInput
          name='query'
          placeholder='Inserte nombre o id...'
          className='nes-input is-error'
          onChange={handleChange}
          value={value}
          autoComplete='off'
        />
      </form>
      {isEmpty && <EmptyInput />}
      <SearchButton onClick={onClick}>Buscar</SearchButton>
    </Container>
  );
};

export default Searchbar;
