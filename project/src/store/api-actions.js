import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
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

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(
      ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, false, data),
    ))
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, false, data));
      dispatch(ActionCreator.redirect(AppRoute.ROOT));
    })
    .catch(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH, true));
    })
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
    })
);

export {
  fetchFilm,
  fetchPromoFilm,
  fetchFilms,
  fetchSimilarFilms,
  fetchFilmReviews,
  checkAuth,
  login,
  logout
};
