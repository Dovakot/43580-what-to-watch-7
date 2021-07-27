import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import reviewProp from '../../../../props/review-prop';
import {getReviewColCount} from '../../../../utils/film-util';

import ReviewsCol from './reviews-col/reviews-col';

function Reviews({filmReviews}) {
  const {left, right} = getReviewColCount(filmReviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsCol reviews={filmReviews.slice(0, left)} />
      <ReviewsCol reviews={(right && filmReviews.slice(right)) || []} />
    </div>
  );
}

const mapStateToProps = ({filmReviews}) => ({
  filmReviews,
});

Reviews.propTypes = {
  filmReviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export {Reviews};
export default connect(mapStateToProps)(Reviews);
