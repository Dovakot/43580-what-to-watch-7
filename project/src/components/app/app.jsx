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

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
