import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import './play-button.css';

import {IconInfo} from '../../../../const';
import {getUpdatePlayingFilm} from '../../../../store/reducers/player-data/selectors';

import SvgIcon from '../../svg-icon/svg-icon';

function PlayButton({isLoading, onPlayButtonClick}) {
  const isPlaying = useSelector(getUpdatePlayingFilm);

  const iconType = isPlaying ? IconInfo.PAUSE : IconInfo.PLAY;
  const iconName = isPlaying ? 'Pause' : 'Play';

  return (
    <button
      type="button"
      className="player__play"
      onClick={onPlayButtonClick}
      disabled={isLoading}
    >
      <SvgIcon icon={iconType} />
      <span>{iconName}</span>
    </button>
  );
}

PlayButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default PlayButton;
