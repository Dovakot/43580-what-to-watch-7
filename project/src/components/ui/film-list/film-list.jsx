import React from 'react';
import PropTypes from 'prop-types';

import {
  FILM_PROP
} from '../../../const';

import SmallFilmCard from './small-film-card/small-film-card';

const getSmallFilmCard = ({id, name, posterImage}) => (
  <SmallFilmCard
    key={id}
    name={name}
    poster={posterImage}
  />
);

function FilmList({films}) {
  return (
    <div className="catalog__films-list">
      {films.map(getSmallFilmCard)}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(FILM_PROP).isRequired,
};

export default FilmList;
