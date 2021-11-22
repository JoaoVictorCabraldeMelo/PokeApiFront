import React from 'react';
import ReactDOM from 'react-dom';
import PokeRoutes from "./pages/routes"
import reportWebVitals from './reportWebVitals';
import './assets/fonts/PokemonSolidNormal.ttf'

ReactDOM.render(
  <React.StrictMode>
    <PokeRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
