import {ApiRoute} from '../const';
import {ActionCreator} from '../store/actions';

const fetchFilms  = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

const fetchFilmPromo = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FILM_PROMO)
    .then(({data}) => dispatch(ActionCreator.loadFilmPromo(data)))
);

export {
  fetchFilms,
  fetchFilmPromo
};
