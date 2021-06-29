import React from 'react';

import Film from './film/film';
import AddReview from './add-review/add-review';
import Player from './player/player';
import NotFound from './not-found/not-found';

const getFilmPage = (film, films) => (
  <Film
    film={film}
    similarFilms={films}
  />
);

const getReviewPage = ({id, name, posterImage, backgroundImage}) => (
  <AddReview
    id={id}
    name={name}
    poster={posterImage}
    backgroundImage={backgroundImage}
  />
);

const getPlayerPage = ({name, videoLink, previewVideoLink, runTime}) => (
  <Player
    name={name}
    video={videoLink}
    preview={previewVideoLink}
    runTime={runTime}
  />
);

const PageType = {
  FILM: getFilmPage,
  REVIEW: getReviewPage,
  PLAYER: getPlayerPage,
};

const findFilmById = (films, id) => films.find((film) => film.id === id);

const getPage = ({id}, films, callback) => {
  const film = findFilmById(films, +id);

  if (!film) {
    return <NotFound />;
  }

  return callback(film, films);
};

export {
  PageType,
  getPage
};
