import React from 'react';
import {useHistory, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute, IconInfo} from '../../../../../const';
import SvgIcon from '../../../svg-icon/svg-icon';

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
      <SvgIcon icon={IconInfo.PLAY} />
      <span>Play</span>
    </button>
  );
}

OpenPlayerButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default OpenPlayerButton;
