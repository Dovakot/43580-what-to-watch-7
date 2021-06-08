import React from 'react';
import PropTypes from 'prop-types';

const GENRES = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const getGenre = (genre) => (
  <Genre
    key={genre}
    genre={genre}
  />
);

function Genre({genre}) {
  return (
    <li className="catalog__genres-item">
      <a href="/" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
}

function Genres() {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map(getGenre)}
    </ul>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Genres;
