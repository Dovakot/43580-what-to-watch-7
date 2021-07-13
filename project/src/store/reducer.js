import {FilmInfo, GenreInfo} from '../const';
import {ActionType} from './actions';
import {filmData, promoFilmData} from '../mocks/films';

const initialState = {
  activeGenre: GenreInfo.DEFAULT,
  promoFilm: promoFilmData,
  films: filmData,
  filmsCounter: FilmInfo.MAX_FILMS_PER_STEP,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export {
  reducer
};
