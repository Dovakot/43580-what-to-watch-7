import React from 'react';

function ReviewText() {
  return (
    <textarea
      className="add-review__textarea"
      name="comment"
      id="comment"
      placeholder="Review text"
      defaultValue=""
    />
  );
}

export default ReviewText;
