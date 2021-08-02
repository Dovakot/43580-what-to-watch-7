import React from 'react';
import PropTypes from 'prop-types';

import {setStarCount} from '../../../../utils/film-util';

function RatingStar({count, currentRating}) {
  const starCount = setStarCount(count);
  const isChecked = currentRating === count;

  return (
    <>
      <input
        className="rating__input"
        id={starCount}
        type="radio"
        name="rating"
        defaultValue={count}
        defaultChecked={isChecked}
      />
      <label className="rating__label" htmlFor={starCount}>
        Rating {count}
      </label>
    </>
  );
}

RatingStar.propTypes = {
  count: PropTypes.number.isRequired,
  currentRating: PropTypes.number.isRequired,
};


export default RatingStar;
