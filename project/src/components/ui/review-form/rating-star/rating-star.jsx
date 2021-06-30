import React from 'react';
import PropTypes from 'prop-types';

import {setStarCount} from '../../../../utils/film-util';

function RatingStar({count, currentRating}) {
  return (
    <>
      <input
        className="rating__input"
        id={setStarCount(count)}
        type="radio"
        name="rating"
        defaultValue={count}
        defaultChecked={currentRating === count}
      />
      <label className="rating__label" htmlFor={setStarCount(count)}>
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
