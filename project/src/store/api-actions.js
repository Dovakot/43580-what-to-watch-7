import {toast} from 'react-toastify';

import {ApiRoute, AppRoute, AuthorizationStatus, MessageText} from '../const';
import {ActionCreator} from '../store/actions';

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadFilm(data)))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILM_PROMO)
    .then(({data}) => dispatch(ActionCreator.loadFilmPromo(data)))
);

const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.FILMS}/${id}/similar`)
    .then(({data}) => dispatch(ActionCreator.loadSimilarFilms(data)))
);

const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadFilmReviews(data)))
);

const sendFilmReview = (id, path, data) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.REVIEW}/${id}`, data)
    .then(() => {
      dispatch(ActionCreator.redirect(path));
      toast.success(MessageText.REVIEW_POSTED);
    })
    .catch(() => toast.error(MessageText.REQUEST_FAILED))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(
      ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, false, data),
    ))
    .catch(() => toast.error(MessageText.AUTH_ERROR))
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, false, data));
      dispatch(ActionCreator.redirect(AppRoute.ROOT));
    })
    .catch(() => dispatch(
      ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH, true),
    ))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
    })
    .catch(() => toast.error(MessageText.FAILED_SIGNOUT))
);

export {
  fetchFilm,
  fetchPromoFilm,
  fetchFilms,
  fetchSimilarFilms,
  fetchFilmReviews,
  sendFilmReview,
  checkAuth,
  login,
  logout
};
