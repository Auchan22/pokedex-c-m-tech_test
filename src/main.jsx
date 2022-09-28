import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './Context/ThemeContext';

import PageHome from './Pages/PageHome';
import Layout from './Components/Layout';
import { PokemonProvider } from './Context/PokemonContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PokemonProvider>
        <Layout>
          <PageHome />
        </Layout>
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
