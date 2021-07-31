import {combineReducers} from 'redux';
import filmData from './film-data/film-data';
import reviewData from './review-data/review-data';
import userData from './user-data/user-data';

const NameSpace = {
  FILM: 'FILM',
  REVIEW: 'REVIEW',
  USER: 'USER',
};

const rootReducer = combineReducers({
  [NameSpace.FILM]: filmData,
  [NameSpace.REVIEW]: reviewData,
  [NameSpace.USER]: userData,
});

export {
  NameSpace,
  rootReducer
};
