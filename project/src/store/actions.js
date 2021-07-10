const ActionType = {
  CHANGE_GENRE: 'catalog/changeGenre',
  GET_FILMS_BY_GENRE: 'catalog/getFilmsByGenre',
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (films) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: films,
  }),
};

export {
  ActionType,
  ActionCreator
};
