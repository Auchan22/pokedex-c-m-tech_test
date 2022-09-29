import React from 'react';

const stylesButton = {
  margin: '10px auto',
  minWidth: '40vw',
};

const SearchButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={stylesButton}
      type='submit'
      className='nes-btn is-error'
    >
      {children}
    </button>
  );
};

export default SearchButton;
