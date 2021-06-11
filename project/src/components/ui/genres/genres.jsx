import React from 'react';

import Genre from './ganre/ganre';

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

function Genres() {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map(getGenre)}
    </ul>
  );
}

export default Genres;
