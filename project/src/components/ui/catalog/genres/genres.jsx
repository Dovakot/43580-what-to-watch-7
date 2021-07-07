import PropTypes from 'prop-types';
import React from 'react';

import Genre from './ganre/ganre';

function Genres({genres, activeGenre, onActiveGenreChange}) {
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
      {genres.map(getGenre)}
    </ul>
  );
}

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onActiveGenreChange: PropTypes.func.isRequired,
};

export default Genres;
