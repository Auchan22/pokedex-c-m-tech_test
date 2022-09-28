import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '80vw',
        margin: '10px auto',
      }}
      className='nes-container'
    >
      Cargando... <i class='nes-pokeball'></i>
    </div>
  );
};

export default Loading;
