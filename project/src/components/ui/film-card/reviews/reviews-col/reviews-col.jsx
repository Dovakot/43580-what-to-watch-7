import React from 'react';
import PropTypes from 'prop-types';

import reviewProp from '../../../../../props/review-prop';
import Review from '../review/review';

const getReview = (review) => (
  <Review
    key={review.id}
    review={review}
  />
);

function ReviewsCol({reviews}) {
  return (
    <div className="film-card__reviews-col">
      {reviews.map(getReview)}
    </div>
  );
}

ReviewsCol.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default ReviewsCol;
