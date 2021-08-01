import React from 'react';
import PropTypes from 'prop-types';

import {IconInfo} from '../../../../const';
import SvgIcon from '../../svg-icon/svg-icon';

function FullScreenButton({onFullScreenButtonClick}) {
  return (
    <button
      type="button"
      className="player__full-screen"
      onClick={onFullScreenButtonClick}
    >
      <SvgIcon icon={IconInfo.FULL_SCREEN} />
      <span>Full screen</span>
    </button>
  );
}

FullScreenButton.propTypes = {
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

export default FullScreenButton;
