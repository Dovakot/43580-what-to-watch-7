import React from 'react';
import PropTypes from 'prop-types';

import {DateFormat} from '../../../const';
import {getTime} from '../../../utils/date-util';

import ExitButton from '../../ui/player-controls/exit-button/exit-button';
import PlayButton from '../../ui/player-controls/play-button/play-button';
import FullScreenButton from '../../ui/player-controls/full-screen-button/full-screen-button';

function Player({name, videoLink, previewVideoLink, runTime}) {
  return (
    <div className="player">
      <video
        className="player__video"
        src={videoLink}
        poster={previewVideoLink}
      />

      <ExitButton />

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {getTime(runTime, DateFormat.TIME_FULL)}
          </div>
        </div>

        <div className="player__controls-row">
          <PlayButton />

          <div className="player__name">
            {name}
          </div>

          <FullScreenButton />
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
};

export default Player;
