import React from 'react';
import PropTypes from 'prop-types';

import {PosterModifier} from '../../../const';

import Preview from '../../ui/film-card/preview/preview';
import Poster from '../../ui/film-card/poster/poster';
import ReviewForm from '../../ui/review-form/review-form';

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
        <ReviewForm />
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
