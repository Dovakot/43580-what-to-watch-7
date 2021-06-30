import React from 'react';

import reviewData from '../../../../mocks/reviews';
import {getReviewColCount} from '../../../../utils/film-util';

import ReviewsCol from './reviews-col/reviews-col';

function Reviews() {
  const {left, right} = getReviewColCount(reviewData.length);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsCol reviews={reviewData.slice(0, left)} />
      <ReviewsCol reviews={(right && reviewData.slice(right)) || []} />
    </div>
  );
}

export default Reviews;
