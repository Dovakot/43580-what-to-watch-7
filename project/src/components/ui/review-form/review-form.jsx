import React, {useState} from 'react';

import {getStarsValue} from '../../../utils/film-util';

import RatingStar from './rating-star/rating-star';
import ReviewText from './review-text/review-text';
import ReviewSubmitButton from './review-submit-button/review-submit-button';

const FieldName = {
  RATING: 'rating',
  REVIEW: 'review-text',
};

const RatingInfo = {
  MIN_CHAR: 50,
  MAX_CHAR: 400,
  DEFAULT_STARS: 3,
  MAX_STARS: 10,
};

const getRatingStar = (value) => (
  <RatingStar
    key={value}
    count={value}
    currentRating={RatingInfo.DEFAULT_STARS}
  />
);

function ReviewForm() {
  const [isDisabled, setButtonState] = useState(true);
  const [formValue, setFormValue] = useState({
    [FieldName.RATING]: RatingInfo.DEFAULT_STARS,
    [FieldName.REVIEW]: '',
  });

  const checkReviewLength = (name, text) => {
    if (name !== FieldName.REVIEW) {
      return;
    }

    const textLength = text.length;
    const isDisabledSubmit = textLength < RatingInfo.MIN_CHAR
      || textLength > RatingInfo.MAX_CHAR;

    setButtonState(isDisabledSubmit);
  };

  const onFormChange = ({target}) => {
    const {name, value} = target;
    const truncValue = value.trim();

    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: truncValue,
    }));

    checkReviewLength(name, truncValue);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    return formValue;
  };

  return (
    <form
      className="add-review__form"
      action="#"
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {getStarsValue(RatingInfo.MAX_STARS).map(getRatingStar)}
        </div>
      </div>

      <div className="add-review__text">
        <ReviewText />

        <div className="add-review__submit">
          <ReviewSubmitButton isDisabled={isDisabled} />
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
