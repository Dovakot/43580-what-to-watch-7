import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {isCheckAuth} from '../../../../utils/utils';
import {getUser} from '../../../../store/reducers/user-data/selectors';

import AddReviewButton from '../buttons/add-review-button/add-review-button';
import InListButton from '../buttons/in-list-button/in-list-button';
import OpenPlayerButton from '../buttons/open-player-button/open-player-button';

function Description({id, name, genre, released}) {
  const {authorizationStatus} = useSelector(getUser);

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
            <InListButton id={id} />
            <AddReviewButton id={id} />
          </>}
      </div>
    </div>
  );
}

Description.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default Description;
