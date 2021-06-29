import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {
  filmData,
  promoFilmData
} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={filmData}
      promoFilm={promoFilmData}
    />
  </React.StrictMode>,
  document.getElementById('root'));
