import PropTypes from 'prop-types';

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  MY_LIST: '/mylist',
  PLAYER: '/player',
};

const PosterModifier = {
  BIG: 'big',
  SMALL: 'small',
};

export {
  AppRoute,
  PosterModifier
};
