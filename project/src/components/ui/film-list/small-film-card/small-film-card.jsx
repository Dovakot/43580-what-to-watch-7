import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath} from 'react-router-dom';

import {AppRoute} from '../../../../const';

import VideoPreview from './video-preview/video-preview';

function SmallFilmCard({id, name, previewImage, videoLink}) {
  const pathToFilm = generatePath(AppRoute.FILM, {id});
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => setIsActive(true);
  const onMouseLeave = () => setIsActive(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPreview
          name={name}
          video={videoLink}
          preview={previewImage}
          isActive={isActive}
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
};

export default SmallFilmCard;
