import {FilmInfo, GenreInfo, AuthorizationStatus} from '../const';
import {ActionType} from './actions';
import {adaptToClientFilm, adaptToClientUser} from '../services/adapters';

const initialState = {
  activeGenre: GenreInfo.DEFAULT,
  film: {},
  promoFilm: {},
  films: [],
  similarFilms: [],
  filmReviews: [],
  user: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isAuthorisationError: false,
  filmsCounter: FilmInfo.MAX_FILMS_PER_STEP,
  isLoading: false,
  errorText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: adaptToClientFilm(action.payload),
      };
    case ActionType.LOAD_FILM_PROMO:
      return {
        ...state,
        promoFilm: adaptToClientFilm(action.payload),
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.map((film) => adaptToClientFilm(film)),
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload.map((film) => adaptToClientFilm(film)),
      };
    case ActionType.LOAD_FILM_REVIEWS:
      return {
        ...state,
        filmReviews: action.payload,
      };
    case ActionType.LOAD_DATA:
      return {
        ...state,
        isLoading: action.isLoading,
        errorText: action.errorText || initialState.errorText,
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: action.payload,
        filmsCounter: initialState.filmsCounter,
      };
    case ActionType.SHOW_FILMS:
      return {
        ...state,
        filmsCounter: state.filmsCounter + FilmInfo.MAX_FILMS_PER_STEP,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.status,
        user: adaptToClientUser(action.user || initialState.user),
        isAuthorisationError: action.isAuthorisationError || initialState.isAuthorisationError,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {
  reducer
};
