import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '../../../../../const';

function AddReviewButton({id}) {
  const pathToReview = generatePath(AppRoute.REVIEW, {id});

  return (
    <Link className="btn film-card__button" to={pathToReview}>
      Add review
    </Link>
  );
}

AddReviewButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddReviewButton;
