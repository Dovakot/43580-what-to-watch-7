import {GenreInfo} from '../const';
import {ActionType} from './actions';
import {filmData, promoFilmData} from '../mocks/films';

const initialState = {
  activeGenre: GenreInfo.DEFAULT,
  promoFilm: promoFilmData,
  films: filmData,
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
      };
    default:
      return state;
  }
};

export {
  reducer
};
