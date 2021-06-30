import React from 'react';
import PropTypes from 'prop-types';

function ReviewSubmitButton({isDisabled}) {
  return (
    <button
      className="add-review__btn"
      type="submit"
      disabled={isDisabled}
    >
      Post
    </button>
  );
}

ReviewSubmitButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};

export default ReviewSubmitButton;
