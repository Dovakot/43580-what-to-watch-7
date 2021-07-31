import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../actions';

const incrementFilms = createAction(ActionType.INCREMENT_FILMS);
const resetFilmData = createAction(ActionType.RESET_FILM_DATA);
const resetMainPageData = createAction(ActionType.RESET_MAIN_PAGE_DATA);
const resetFilmPageData = createAction(ActionType.RESET_FILM_PAGE_DATA);
const resetFavoritePageData = createAction(ActionType.RESET_FAVORITE_PAGE_DATA);

const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));

const changeFilmStatus = createAction(ActionType.CHANGE_FILM_STATUS, (film) => ({
  payload: film,
}));

const loadFilm = createAction(ActionType.LOAD_FILM, (data, isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
}));

const loadFilms = createAction(ActionType.LOAD_FILMS, (data, isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
}));

const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (data, isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
}));

const loadFavoritesFilms = createAction(ActionType.LOAD_FAVORITES_FILMS, (data, isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
}));

export {
  incrementFilms,
  resetFilmData,
  resetMainPageData,
  resetFilmPageData,
  resetFavoritePageData,
  changeGenre,
  changeFilmStatus,
  loadFilm,
  loadFilms,
  loadSimilarFilms,
  loadFavoritesFilms
};
