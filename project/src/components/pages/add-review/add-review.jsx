import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

import {
  PosterModifier
} from '../../../const';

import RatingStar from '../../ui/rating-star/rating-star';
import Logo from '../../ui/logo/logo';
import UserBlock from '../../ui/user-block/user-block';
import BackgroundImage from '../../ui/film-card/background-image/background-image';
import Poster from '../../ui/film-card/poster/poster';

const MAX_STAR_COUNT = 10;

const getRatingStar = (value, key) => (
  <RatingStar
    key={value - key}
    count={value - key}
  />
);

function AddReview({name, poster, backgroundImage}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <BackgroundImage
          image={backgroundImage}
          name={name}
        />

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/">
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

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
              {new Array(MAX_STAR_COUNT).fill(MAX_STAR_COUNT).map(getRatingStar)}
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
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default AddReview;
