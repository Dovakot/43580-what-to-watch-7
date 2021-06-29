import React from 'react';
import {useHistory, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '../../../../../const';

function OpenPlayerButton({id}) {
  const history = useHistory();
  const pathToPlayer = generatePath(AppRoute.PLAYER, {id});

  const onPlayButtonClick = (evt) => {
    evt.preventDefault();

    history.push(pathToPlayer);
  };

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={onPlayButtonClick}
    >
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
}

OpenPlayerButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default OpenPlayerButton;
