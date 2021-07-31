import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../../props/film-prop';
import SmallFilmCard from './small-film-card/small-film-card';

const getSmallFilmCard = ({id, name, previewImage, previewVideoLink}) => (
  <SmallFilmCard
    key={id}
    id={id}
    name={name}
    previewImage={previewImage}
    videoLink={previewVideoLink}
  />
);

function FilmList({films}) {
  return (
    <div className="catalog__films-list">
      {films.length
        ? films.map(getSmallFilmCard)
        : <p style={{fontSize: '13px'}}>Movies not found</p>}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
