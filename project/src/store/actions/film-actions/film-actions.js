import {createAction} from '@reduxjs/toolkit';
import {ActionType, loadData} from '../actions';

const incrementFilms = createAction(ActionType.INCREMENT_FILMS);
const resetFilmData = createAction(ActionType.RESET_FILM_DATA);
const resetMainPageData = createAction(ActionType.RESET_MAIN_PAGE_DATA);
const resetFilmPageData = createAction(ActionType.RESET_FILM_PAGE_DATA);
const resetFavoritePageData = createAction(ActionType.RESET_FAVORITE_PAGE_DATA);

const loadFilm = createAction(ActionType.LOAD_FILM, loadData);
const loadFilms = createAction(ActionType.LOAD_FILMS, loadData);
const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, loadData);
const loadFavoritesFilms = createAction(ActionType.LOAD_FAVORITES_FILMS, loadData);

const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));

const changeFilmStatus = createAction(ActionType.CHANGE_FILM_STATUS, (film) => ({
  payload: film,
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
