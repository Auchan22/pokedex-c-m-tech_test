import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default ThemeContext;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  const changeTheme = () => {
    let changed = theme === 'light' ? 'dark' : 'light';
    setTheme(changed);
    console.log(changed);
    localStorage.setItem('theme', changed);
  };

  const data = {
    theme,
    changeTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
