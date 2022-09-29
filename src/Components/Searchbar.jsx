import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100vw;
  margin: 0px auto;
  min-height: 60px;
  padding: 10px;
`;

const SearchInput = styled.input`
  font-size: 14px;
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

const Searchbar = ({ handleSubmit, handleChange, value, isEmpty }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchInput
          name='query'
          placeholder='Inserte nombre o id...'
          className='nes-input is-error'
          onChange={handleChange}
          value={value}
          autoComplete='false'
        />
      </form>
      {isEmpty && <EmptyInput />}
    </Container>
  );
};

export default Searchbar;
