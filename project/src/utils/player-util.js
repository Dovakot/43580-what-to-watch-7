import {PlayerInfo} from '../const';

const getFilmProgress = (time, duration) => time / duration * PlayerInfo.PROGRESS_DEFAULT;
const setPercentageProgress = (value) => `${value}%`;

export {
  getFilmProgress,
  setPercentageProgress
};
