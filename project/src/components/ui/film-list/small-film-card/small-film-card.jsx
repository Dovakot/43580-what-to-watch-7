import React from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath} from 'react-router-dom';

import {AppRoute} from '../../../../const';

function SmallFilmCard({id, name, previewImage, videoLink, onActiveFilmChange}) {
  const pathToFilm = generatePath(AppRoute.FILM, {id});

  const onMouseEnter = () => onActiveFilmChange(id);
  const onMouseLeave = () => onActiveFilmChange(null);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={pathToFilm}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
};

export default SmallFilmCard;
