import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {isCheckAuth} from '../../../../utils/utils';

import AddReviewButton from '../buttons/add-review-button/add-review-button';
import InListButton from '../buttons/in-list-button/in-list-button';
import OpenPlayerButton from '../buttons/open-player-button/open-player-button';

function Description({id, name, genre, released, authorizationStatus, isFavorite}) {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">
        {name}
      </h2>
      <p className="film-card__meta">
        <span className="film-card__genre">
          {genre}
        </span>
        <span className="film-card__year">
          {released}
        </span>
      </p>

      <div className="film-card__buttons">
        <OpenPlayerButton id={id} />

        {isCheckAuth(authorizationStatus) &&
          <>
            <InListButton isFavorite />
            <AddReviewButton id={id} />
          </>}
      </div>
    </div>
  );
}

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

Description.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

export {Description};
export default connect(mapStateToProps)(Description);
