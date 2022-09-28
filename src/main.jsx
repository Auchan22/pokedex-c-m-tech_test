import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './Context/ThemeContext';

import PageHome from './Pages/PageHome';
import PagePokemon from './Pages/PagePokemon';
import Layout from './Components/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        <PageHome />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
);
