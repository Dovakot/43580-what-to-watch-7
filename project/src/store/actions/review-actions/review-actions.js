import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../actions';

const resetReviewData = createAction(ActionType.RESET_REVIEW_DATA);

const loadFilmReviews = createAction(ActionType.LOAD_FILM_REVIEWS, (data, isError) => ({
  payload: {
    data,
    isLoading: isError,
    isError,
  },
}));

export {
  resetReviewData,
  loadFilmReviews
};
