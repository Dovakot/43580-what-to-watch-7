import React from 'react';
import {useSelector} from 'react-redux';

import './player-controls.css';

import {PlayerInfo} from '../../../const';
import {setPercentageProgress} from '../../../utils/player-util';
import {getFilmUpdateProgress} from '../../../store/reducers/player-data/selectors';

function PlayerControls() {
  const {timeToEnd, progress} = useSelector(getFilmUpdateProgress);
  const percentageProgress = setPercentageProgress(progress);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={progress}
          max={PlayerInfo.PROGRESS_DEFAULT}
        />
        <div
          className="player__toggler"
          style={{ left: percentageProgress }}
        >
          Toggler
        </div>
      </div>
      <div className="player__time-value">
        {timeToEnd}
      </div>
    </div>
  );
}

export default PlayerControls;
