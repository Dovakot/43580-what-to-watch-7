import React, {useState, useEffect} from 'react';
import {generatePath} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoute, ReviewInfo} from '../../../const';
import {getStarsValue} from '../../../utils/film-util';
import {sendFilmReview} from '../../../store/api-actions';

import RatingStar from './rating-star/rating-star';
import ReviewText from './review-text/review-text';
import ReviewSubmitButton from './review-submit-button/review-submit-button';
import Spinner from '../../ui/loading/spinner/spinner';

const FORM_VALUE = {
  rating: ReviewInfo.DEFAULT_STARS,
  comment: '',
};

const getRatingStar = (value) => (
  <RatingStar
    key={value}
    count={value}
    currentRating={ReviewInfo.DEFAULT_STARS}
  />
);

function ReviewForm({id, submitReview}) {
  const pathToFilm = generatePath(AppRoute.FILM, {id});

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setButtonState] = useState(true);
  const [formValue, setFormValue] = useState(FORM_VALUE);

  const checkReviewLength = (name, text) => {
    if (name !== ReviewInfo.FIELD) {
      return;
    }

    const textLength = text.length;
    const isDisabledSubmit = textLength < ReviewInfo.MIN_CHAR
      || textLength > ReviewInfo.MAX_CHAR;

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

    setIsLoading(true);

    submitReview(id, pathToFilm, formValue)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => () => {
    setIsLoading(false);
    setButtonState(true);
    setFormValue(FORM_VALUE);
  }, []);

  return (
    <form
      className="add-review__form"
      action="#"
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    >
      {isLoading && <Spinner />}

      <div className="rating">
        <div className="rating__stars">
          {getStarsValue(ReviewInfo.MAX_STARS).map(getRatingStar)}
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

const mapDispatchToProps = (dispatch) => ({
  submitReview(id, path, data) {
    return dispatch(sendFilmReview(id, path, data));
  },
});

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  submitReview: PropTypes.func.isRequired,
};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
