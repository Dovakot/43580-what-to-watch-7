import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {isActiveGenre} from '../../../../utils/film-util';
import {getActiveGenre} from '../../../../store/reducers/film-data/selectors';

import Genre from './ganre/ganre';

function Genres({genres}) {
  const activeGenre = useSelector(getActiveGenre);

  const getGenre = (genre) => (
    <Genre
      key={genre}
      genre={genre}
      isActive={isActiveGenre(genre, activeGenre)}
    />
  );

  return (
    <ul className="catalog__genres-list">
      {genres.map(getGenre)}
    </ul>
  );
}

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;
