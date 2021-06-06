import React from 'react';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';

function App({promoFilm, films}) {
  return (
    <MainScreen
      promoFilm={promoFilm}
      films={films}
    />
  );
}

const filmProp = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number,
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool,
});

App.propTypes = {
  promoFilm: filmProp.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default App;
