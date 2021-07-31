import {NameSpace} from '../root-reducer';

const getActiveGenre = (state) => state[NameSpace.FILM].activeGenre;
const getFilmsCounter = (state) => state[NameSpace.FILM].filmsCounter;
const getFilm = (state) => state[NameSpace.FILM].film;
const getFilms = (state) => state[NameSpace.FILM].films;
const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
const getFavoritesFilms = (state) => state[NameSpace.FILM].favoritesFilms;
const getIsFavoriteFilm = (state) => state[NameSpace.FILM].isFavoriteFilm;

export {
  getActiveGenre,
  getFilmsCounter,
  getFilm,
  getFilms,
  getSimilarFilms,
  getFavoritesFilms,
  getIsFavoriteFilm
};
