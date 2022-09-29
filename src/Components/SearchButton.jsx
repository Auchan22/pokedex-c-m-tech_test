import React from 'react';

const stylesButton = {
  position: 'relative',
  bottom: 10,
  left: 0,
  margin: '20px 10%',
  minWidth: '80vw',
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
