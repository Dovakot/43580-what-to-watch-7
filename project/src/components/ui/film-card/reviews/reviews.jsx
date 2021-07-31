import React from 'react';
import {useSelector} from 'react-redux';

import {getReviewColCount} from '../../../../utils/film-util';
import {getReviews} from '../../../../store/reducers/review-data/selectors';

import ReviewsCol from './reviews-col/reviews-col';

function Reviews() {
  const {filmReviews} = useSelector(getReviews);
  const {left, right} = getReviewColCount(filmReviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsCol reviews={filmReviews.slice(0, left)} />
      <ReviewsCol reviews={(right && filmReviews.slice(right)) || []} />
    </div>
  );
}

export default Reviews;
