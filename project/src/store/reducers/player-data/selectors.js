import {NameSpace} from '../root-reducer';

const getFilmUpdateProgress  = (state) => ({
  timeToEnd: state[NameSpace.PLAYER].timeToEnd,
  progress: state[NameSpace.PLAYER].progress,
});

const getUpdatePlayingFilm = (state) => state[NameSpace.PLAYER].isPlaying;

export {
  getFilmUpdateProgress,
  getUpdatePlayingFilm
};
