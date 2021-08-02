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
  SET_AUTHORIZATION_ERROR: 'user/setAuthorizationError',
  SET_AUTHORIZATION_PROCESS: 'user/setAuthorizationProcess',
  LOGOUT: 'user/logout',
  UPDATE_FILM_PROGRESS: 'player/updateFilmProgress',
  UPDATE_FILM_PLAYING: 'player/updateFilmPlaying',
  RESET_PLAYER_DATA: 'player/resetPlayerData',
  REDIRECT_TO_ROUTE: 'app/redirect',
};

const redirect = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

const loadData = (data, isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
});

export {
  ActionType,
  redirect,
  loadData
};
