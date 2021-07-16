const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_FILM_PROMO: 'data/loadFilmPromo',
  LOAD_DATA: 'data/loadData',
  CHANGE_GENRE: 'catalog/changeGenre',
  GET_FILMS_BY_GENRE: 'catalog/getFilmsByGenre',
  SHOW_FILMS: 'catalog/showFilms',
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload : films,
  }),
  loadFilmPromo: (film) => ({
    type: ActionType.LOAD_FILM_PROMO,
    payload : film,
  }),
  loadData: () => ({
    type: ActionType.LOAD_DATA,
    payload: true,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (films) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: films,
  }),
  showFilms: () => ({
    type: ActionType.SHOW_FILMS,
  }),
};

export {
  ActionType,
  ActionCreator
};
