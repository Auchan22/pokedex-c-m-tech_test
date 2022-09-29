import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const stylesLoading = (isdark) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100vw',
  margin: '0px auto',
  textAlign: 'center',
  color: `${isdark ? '#ffffff' : '#000000'}`,
});

const Loading = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={stylesLoading(theme === 'dark')}>
      Cargando... <i className='nes-pokeball'></i>
    </div>
  );
};

export default Loading;
