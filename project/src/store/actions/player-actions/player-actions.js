import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../actions';

const updateFilmProgress = createAction(ActionType.UPDATE_FILM_PROGRESS, (time, progress) => ({
  payload: {
    time,
    progress,
  },
}));

const updateFilmPlaying = createAction(ActionType.UPDATE_FILM_PLAYING, (isPlaying) => ({
  payload: isPlaying,
}));

const resetPlayerData = createAction(ActionType.RESET_PLAYER_DATA);

export {
  updateFilmProgress,
  updateFilmPlaying,
  resetPlayerData
};
