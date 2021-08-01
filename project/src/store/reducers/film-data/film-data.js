import {createReducer} from '@reduxjs/toolkit';

import {FilmInfo, GenreInfo} from '../../../const';
import {adaptToClientFilm} from '../../../services/adapters';
import {
  changeGenre,
  incrementFilms,
  loadFilm,
  loadFilms,
  loadSimilarFilms,
  loadFavoritesFilms,
  changeFilmStatus,
  resetFilmData,
  resetMainPageData,
  resetFilmPageData,
  resetFavoritePageData
} from '../../actions/film-actions/film-actions';

const FILM_DATA_DEFAULT = {
  data: {},
  isLoading: true,
  isError: false,
};

const FILMS_DATA_DEFAULT = {
  data: [],
  isLoading: true,
  isError: false,
};

const initialState = {
  activeGenre: GenreInfo.DEFAULT,
  filmsCounter: FilmInfo.MAX_FILMS_PER_STEP,
  isFavoriteFilm: null,
  film: FILM_DATA_DEFAULT,
  films: FILMS_DATA_DEFAULT,
  similarFilms: FILMS_DATA_DEFAULT,
  favoritesFilms: FILMS_DATA_DEFAULT,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, {payload}) => {
      state.film.data = adaptToClientFilm(payload.data);
      state.film.isLoading = payload.isLoading;
      state.film.isError = payload.isError;
      state.isFavoriteFilm = state.film.data.isFavorite;
    })
    .addCase(loadFilms, ({films}, {payload}) => {
      films.data = payload.data.map((film) => adaptToClientFilm(film));
      films.isLoading = payload.isLoading;
      films.isError = payload.isError;
    })
    .addCase(loadSimilarFilms, ({similarFilms}, {payload}) => {
      similarFilms.data = payload.data.map((film) => adaptToClientFilm(film));
      similarFilms.isLoading = payload.isLoading;
      similarFilms.isError = payload.isError;
    })
    .addCase(loadFavoritesFilms, ({favoritesFilms}, {payload}) => {
      favoritesFilms.data = payload.data.map((film) => adaptToClientFilm(film));
      favoritesFilms.isLoading = payload.isLoading;
      favoritesFilms.isError = payload.isError;
    })
    .addCase(changeFilmStatus, (state, {payload}) => {
      state.film.data = adaptToClientFilm(payload);
      state.isFavoriteFilm = state.film.data.isFavorite;
    })
    .addCase(changeGenre, (state, action) => {
      state.filmsCounter = FilmInfo.MAX_FILMS_PER_STEP;
      state.activeGenre = action.payload;
    })
    .addCase(incrementFilms, (state) => {
      state.filmsCounter = state.filmsCounter + FilmInfo.MAX_FILMS_PER_STEP;
    })
    .addCase(resetFilmData, (state) => {
      state.film = FILM_DATA_DEFAULT;
    })
    .addCase(resetMainPageData, (state) => {
      state.film = FILM_DATA_DEFAULT;
      state.films = FILMS_DATA_DEFAULT;

      state.activeGenre = GenreInfo.DEFAULT;
      state.filmsCounter = FilmInfo.MAX_FILMS_PER_STEP;
      state.isFavoriteFilm = initialState.isFavoriteFilm;
    })
    .addCase(resetFilmPageData, (state) => {
      state.film = FILM_DATA_DEFAULT;
      state.similarFilms = FILMS_DATA_DEFAULT;

      state.isFavoriteFilm = initialState.isFavoriteFilm;
    })
    .addCase(resetFavoritePageData, (state) => {
      state.favoritesFilms = FILMS_DATA_DEFAULT;
    });
});

export default filmData;
