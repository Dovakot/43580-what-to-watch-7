const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_FILM_PROMO: 'data/loadFilmPromo',
  LOAD_DATA: 'data/loadData',
  CHANGE_GENRE: 'catalog/changeGenre',
  GET_FILMS_BY_GENRE: 'catalog/getFilmsByGenre',
  SHOW_FILMS: 'catalog/showFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTER: 'redirect',
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
  loadData: (isLoadingError) => ({
    type: ActionType.LOAD_DATA,
    isLoading: isLoadingError,
    isLoadingError,
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
  requireAuthorization: (status, isAuthorisationError, user) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    status: status,
    user: user,
    isAuthorisationError,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirect: (url) =>({
    type: ActionType.REDIRECT_TO_ROUTER,
    payload: url,
  }),
};

export {
  ActionType,
  ActionCreator
};
