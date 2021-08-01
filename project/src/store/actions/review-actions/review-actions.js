import {createAction} from '@reduxjs/toolkit';
import {ActionType, loadData} from '../actions';

const resetReviewData = createAction(ActionType.RESET_REVIEW_DATA);
const loadFilmReviews = createAction(ActionType.LOAD_FILM_REVIEWS, loadData);

export {
  resetReviewData,
  loadFilmReviews
};
