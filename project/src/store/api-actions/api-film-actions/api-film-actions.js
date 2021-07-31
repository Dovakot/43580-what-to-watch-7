import {toast} from 'react-toastify';

import {ApiRoute, MessageText} from '../../../const';
import {
  loadFilm,
  loadFilms,
  loadSimilarFilms,
  loadFavoritesFilms,
  changeFilmStatus
} from '../../actions/film-actions/film-actions';

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(loadFilm(data, false)))
    .catch(() => dispatch(loadFilm({}, true)))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadFilm(data, false)))
    .catch(() => dispatch(loadFilm({}, true)))
);

const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data, false)))
    .catch(() => dispatch(loadFilms([], true)))
);

const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.FILMS}/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarFilms(data, false)))
    .catch(() => dispatch(loadSimilarFilms([], true)))
);

const fetchFavoritesFilms = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoritesFilms(data, false)))
    .catch(() => dispatch(loadFavoritesFilms([], true)))
);

const sendFilmStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}/${id}/${+status}`)
    .then(({data}) => dispatch(changeFilmStatus(data)))
    .catch(() => toast.error(MessageText.REQUEST_FAILED))
);

export {
  fetchFilm,
  fetchPromoFilm,
  fetchFilms,
  fetchSimilarFilms,
  fetchFavoritesFilms,
  sendFilmStatus
};
