import {createReducer} from '@reduxjs/toolkit';
import {loadFilmReviews, resetReviewData} from '../../actions/review-actions/review-actions';

const initialState = {
  filmReviews: [],
  isLoading: true,
  isError: false,
};

const reviewData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilmReviews, (state, {payload}) => {
      state.filmReviews = payload.data;
      state.isLoading = payload.isLoading;
      state.isError = payload.isError;
    })
    .addCase(resetReviewData, (state) => {
      state = initialState;
    });
});

export default reviewData;
