import React from 'react';

const stylesButton = {
  position: 'fixed',
  bottom: 10,
  left: 0,
  margin: '10px 10%',
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
