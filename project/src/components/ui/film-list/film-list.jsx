import React, {useState} from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../../props/film-prop';
import SmallFilmCard from './small-film-card/small-film-card';

function FilmList({films}) {
  const [activeFilm, setActiveFilm] = useState(null);

  const onActiveFilmChange = (currentFilm) => setActiveFilm(currentFilm);

  const getSmallFilmCard = ({id, name, previewImage, videoLink}) => (
    <SmallFilmCard
      key={id}
      id={id}
      name={name}
      previewImage={previewImage}
      videoLink={videoLink}
      activeFilm={activeFilm}
      onActiveFilmChange={onActiveFilmChange}
    />
  );

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
