import React from 'react';
import {useHistory, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import './exit-button.css';
import {AppRoute} from '../../../../const';

function ExitButton({id}) {
  const history = useHistory();
  const linkBack = generatePath(AppRoute.FILM, {id});

  const onButtonClick = (evt) => {
    evt.preventDefault();

    history.push(linkBack);
  };

  return (
    <button
      className="player__exit"
      type="button"
      onClick={onButtonClick}
    >
      Exit
    </button>
  );
}

ExitButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ExitButton;
