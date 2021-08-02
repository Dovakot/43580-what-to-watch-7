const EMAIL_FORMAT = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  MY_LIST: '/mylist',
  PLAYER: '/player/:id',
  NOT_FOUND: '/404',
};

const ApiRoute = {
  FILMS: '/films',
  PROMO_FILM: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REVIEW: '/comments',
};

const DateFormat = {
  DATE: 'MMMM DD, YYYY',
  TIME: 'H[h] mm[m]',
  TIME_SHORT: '-mm:ss',
  TIME_FULL: '-HH:mm:ss',
  MACHINE_DATE: 'YYYY-MM-DD',
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
  MAX_ACTOR_COUNT: 4,
  MAX_FILM_COUNT: 4,
  MAX_FILMS_PER_STEP: 8,
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

const ReviewInfo = {
  FIELD: 'comment',
  MIN_CHAR: 50,
  MAX_CHAR: 400,
  DEFAULT_STARS: 3,
  MAX_STARS: 10,
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const MessageText = {
  REVIEW_POSTED: 'Film review posted',
  REQUEST_FAILED: 'An error has occurred while processing your request',
  AUTH_ERROR: 'Connection authorization failure occurred',
  AUTH_DATA_ERROR: 'We can’t recognize this email\nand password combination. Please try again.',
  FAILED_SIGNOUT: 'Failed to sign out of account',
  LOADING_ERROR: 'Loading error please reload the page',
};

const IconInfo = {
  ADD: {
    href: '#add',
    width: 19,
    height: 20,
  },
  IN_LIST: {
    href: '#in-list',
    width: 18,
    height: 14,
  },
  PLAY: {
    href: '#play-s',
    width: 19,
    height: 19,
  },
  PAUSE: {
    href: '#pause',
    width: 14,
    height: 21,
  },
  FULL_SCREEN: {
    href: '#full-screen',
    width: 27,
    height: 27,
  },
};

const PlayerInfo = {
  TIME_TO_END: '-00:00',
  PROGRESS_DEFAULT: 100,
};

export {
  EMAIL_FORMAT,
  PlayerInfo,
  AppRoute,
  ApiRoute,
  DateFormat,
  PosterModifier,
  GenreInfo,
  FilmInfo,
  ReviewInfo,
  AuthorizationStatus,
  MessageText,
  IconInfo
};
