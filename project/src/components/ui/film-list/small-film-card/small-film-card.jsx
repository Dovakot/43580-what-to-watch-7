import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory, generatePath} from 'react-router-dom';

import {AppRoute} from '../../../../const';

import VideoPreview from './video-preview/video-preview';

function SmallFilmCard({id, name, previewImage, videoLink}) {
  const history = useHistory();
  const pathToFilm = generatePath(AppRoute.FILM, {id});
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => setIsActive(true);
  const onMouseLeave = () => setIsActive(false);

  const onCardClick = (evt) => {
    evt.preventDefault();

    history.push(pathToFilm);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      style={{cursor: 'pointer'}}
      onClick={onCardClick}
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
        <span className="small-film-card__link">{name}</span>
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
