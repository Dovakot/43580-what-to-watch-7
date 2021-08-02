import {createReducer} from '@reduxjs/toolkit';

import {PlayerInfo} from '../../../const';
import {
  updateFilmProgress,
  updateFilmPlaying,
  resetPlayerData
} from '../../actions/player-actions/player-actions';

const initialState = {
  timeToEnd: PlayerInfo.TIME_TO_END,
  progress: 0,
  isPlaying: true,
};

const playerData = createReducer(initialState, (builder) => {
  builder
    .addCase(updateFilmProgress, (state, {payload}) => {
      state.timeToEnd = payload.time;
      state.progress = payload.progress;
    })
    .addCase(updateFilmPlaying, (state, {payload}) => {
      state.isPlaying = payload;
    })
    .addCase(resetPlayerData, (state) => {
      state.timeToEnd = PlayerInfo.TIME_TO_END;
      state.progress = initialState.progress;
      state.isPlaying = initialState.isPlaying;
    });
});

export default playerData;
