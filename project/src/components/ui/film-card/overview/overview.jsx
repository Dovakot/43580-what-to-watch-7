import React from 'react';
import PropTypes from 'prop-types';

import {getActors, getRatingTitle} from '../../../../utils/film-util';

function Overview({rating, scoresCount, description, director, starring}) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRatingTitle(rating)}
          </span>
          <span className="film-rating__count">
            {scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {description}
        </p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {getActors(starring)}
          </strong>
        </p>
      </div>
    </>
  );
}

Overview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Overview;
