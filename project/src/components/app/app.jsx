import React from 'react';
import PropTypes from 'prop-types';

import {
  FILM_PROP
} from '../../const';

import MainScreen from '../main-screen/main-screen';

function App({promoFilm, films}) {
  return (
    <MainScreen
      promoFilm={promoFilm}
      films={films}
    />
  );
}

App.propTypes = {
  promoFilm: FILM_PROP.isRequired,
  films: PropTypes.arrayOf(FILM_PROP).isRequired,
};

export default App;
