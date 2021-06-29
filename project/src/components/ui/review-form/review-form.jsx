import React from 'react';
import PropTypes from 'prop-types';

import {FilmInfo} from '../../../const';
import {getStarsValue} from '../../../utils/film-util';

import RatingStar from './rating-star/rating-star';
import ReviewText from './review-text/review-text';
import ReviewSubmitButton from './review-submit-button/review-submit-button';

const getRatingStar = (value) => (
  <RatingStar
    key={value}
    count={value}
  />
);

function ReviewForm() {
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {getStarsValue(FilmInfo.MAX_STAR_COUNT).map(getRatingStar)}
        </div>
      </div>

      <div className="add-review__text">
        <ReviewText />

        <div className="add-review__submit">
          <ReviewSubmitButton />
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
