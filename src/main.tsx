import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '/src/App.css';
import './components/PersonList';
import PokemonList from './components/PersonList';
import PokemonDetails from './components/PokemonDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  }
]);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
