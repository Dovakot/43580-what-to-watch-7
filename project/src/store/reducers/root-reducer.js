import {combineReducers} from 'redux';
import filmData from './film-data/film-data';
import reviewData from './review-data/review-data';
import userData from './user-data/user-data';
import playerData from './player-data/player-data';

const NameSpace = {
  FILM: 'FILM',
  REVIEW: 'REVIEW',
  USER: 'USER',
  PLAYER: 'PLAYER',
};

const rootReducer = combineReducers({
  [NameSpace.FILM]: filmData,
  [NameSpace.REVIEW]: reviewData,
  [NameSpace.USER]: userData,
  [NameSpace.PLAYER]: playerData,
});

export {
  NameSpace,
  rootReducer
};
