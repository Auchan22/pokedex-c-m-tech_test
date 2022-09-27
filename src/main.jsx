import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './Context/ThemeContext';

import PageHome from './Pages/PageHome';
import PagePokemon from './Pages/PagePokemon';
import Layout from './Components/Layout';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PageHome />,
      },
      {
        path: '/pokemon',
        element: <PagePokemon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
