import PropTypes from 'prop-types';
import React, {useState} from 'react';

import filmProp from '../../../props/film-prop';
import {GenreInfo} from '../../../const';
import {getGenresFromFilm} from '../../../utils/film-util';

import Genre from './ganre/ganre';

function Genres({films}) {
  const [activeGenre, setActiveGenre] = useState(GenreInfo.DEFAULT);

  const onActiveGenreChange = (currentGenre) => currentGenre !== activeGenre
    && setActiveGenre(currentGenre);

  const getGenre = (genre) => (
    <Genre
      key={genre}
      currentGenre={genre}
      activeGenre={activeGenre}
      onActiveGenreChange={onActiveGenreChange}
    />
  );

  return (
    <ul className="catalog__genres-list">
      {getGenresFromFilm(films).map(getGenre)}
    </ul>
  );
}

Genres.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default Genres;
