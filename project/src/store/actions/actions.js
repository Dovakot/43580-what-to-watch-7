import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_GENRE: 'film/changeGenre',
  INCREMENT_FILMS: 'film/incrementFilms',
  LOAD_FILM: 'film/loadFilm',
  LOAD_FILMS: 'film/loadFilms',
  LOAD_SIMILAR_FILMS: 'film/loadSimilarFilms',
  LOAD_FAVORITES_FILMS: 'film/loadFavoritesFilms',
  CHANGE_FILM_STATUS: 'film/changeFilmStatus',
  RESET_FILM_DATA: 'film/resetFilmData',
  RESET_MAIN_PAGE_DATA: 'film/resetMainPageData',
  RESET_FILM_PAGE_DATA: 'film/resetFilmPageData',
  RESET_FAVORITE_PAGE_DATA: 'film/resetFavoritePageData',
  RESET_REVIEW_DATA: 'rewiew/resetReviewData',
  LOAD_FILM_REVIEWS: 'rewiew/loadFilmReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  AUTHORIZATION_ERROR: 'user/authorizationError',
  AUTHORIZATION_PROCESS: 'user/authorizationProcess',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirect',
};

const redirect = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export {
  ActionType,
  redirect
};
