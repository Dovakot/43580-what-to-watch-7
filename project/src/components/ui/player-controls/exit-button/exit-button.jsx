import React from 'react';
import {useHistory} from 'react-router-dom';

function ExitButton() {
  const history = useHistory();

  const onButtonClick = (evt) => {
    evt.preventDefault();

    history.goBack();
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

export default ExitButton;
