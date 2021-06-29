const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  MY_LIST: '/mylist',
  PLAYER: '/player/:id',
};

const PosterModifier = {
  BIG: 'big',
  SMALL: 'small',
};

const GenreInfo = {
  DEFAULT: 'All genres',
  COUNT: 9,
};

const FilmInfo = {
  MAX_FILM_COUNT: 4,
  MAX_ACTOR_COUNT: 4,
  MAX_STAR_COUNT: 10,
  PLAY_DELAY_TIME: 1000,
  RATINGS: [
    {
      rating: 10,
      title: 'Awesome',
    },
    {
      rating: 8,
      title: 'Very good',
    },
    {
      rating: 5,
      title: 'Good',
    },
    {
      rating: 3,
      title: 'Normal',
    },
    {
      rating: 0,
      title: 'Bad',
    },
  ],
};

export {
  AppRoute,
  PosterModifier,
  GenreInfo,
  FilmInfo
};
