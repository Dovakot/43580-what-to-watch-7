import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../../props/film-prop';

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
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
