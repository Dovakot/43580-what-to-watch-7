import React from 'react';
import PropTypes from 'prop-types';

import {PosterModifier, FilmInfo} from '../../../const';
import {getStarsValue} from '../../../utils/film-util';

import RatingStar from '../../ui/rating-star/rating-star';
import Preview from '../../ui/film-card/preview/preview';
import Poster from '../../ui/film-card/poster/poster';

const getRatingStar = (value) => (
  <RatingStar
    key={value}
    count={value}
  />
);

function AddReview({id, name, poster, backgroundImage}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <Preview
          id={id}
          image={backgroundImage}
          name={name}
          isReview
        />

        <Poster
          modifier={PosterModifier.SMALL}
          poster={poster}
          name={name}
        />
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {getStarsValue(FilmInfo.MAX_STAR_COUNT).map(getRatingStar)}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              defaultValue=""
            />

            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

AddReview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default AddReview;
