import React from 'react';
import {useSelector} from 'react-redux';

import {getReviewColCount} from '../../../../utils/film-util';
import {getReviews} from '../../../../store/reducers/review-data/selectors';

import ReviewsCol from './reviews-col/reviews-col';

function Reviews() {
  const {filmReviews} = useSelector(getReviews);

  const reviewCount = filmReviews.length;
  const {left, right} = getReviewColCount(reviewCount);
  const reviewsColLeft = filmReviews.slice(0, left);
  const reviewsColRight = (right && filmReviews.slice(right)) || [];

  return (
    <div className="film-card__reviews film-card__row">
      {reviewCount ?
        <>
          <ReviewsCol reviews={reviewsColLeft} />
          <ReviewsCol reviews={reviewsColRight} />
        </>
        : <small>Reviews not found</small>}

    </div>
  );
}

export default Reviews;
