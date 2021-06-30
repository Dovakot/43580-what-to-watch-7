import React from 'react';

function ReviewText() {
  return (
    <textarea
      className="add-review__textarea"
      name="review-text"
      id="review-text"
      placeholder="Review text"
      defaultValue=""
    />
  );
}

export default ReviewText;
