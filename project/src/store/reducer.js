import {GenreInfo} from '../const';
import {getGenresFromFilm, filterByGenre, filterByFavorites} from '../utils/film-util';
import {ActionType} from './actions';
import {filmData, promoFilmData} from '../mocks/films';

const initialState = {
  genre: GenreInfo.DEFAULT,
  genres: getGenresFromFilm(filmData),
  promoFilm: promoFilmData,
  films: filmData,
  similarFilms: filmData,
  favoritesFilms: filterByFavorites(filmData),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: filterByGenre(filmData, action.payload),
      };

    default:
      return state;
  }
};

export {
  reducer
};
