import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getFilmDuration} from '../../../utils/date-util';
import {getFilmProgress} from '../../../utils/player-util';
import {fetchFilm} from '../../../store/api-actions/api-film-actions/api-film-actions';
import {resetFilmData} from '../../../store/actions/film-actions/film-actions';
import {
  updateFilmProgress,
  updateFilmPlaying,
  resetPlayerData
} from '../../../store/actions/player-actions/player-actions';
import {getFilm} from '../../../store/reducers/film-data/selectors';
import {getUpdatePlayingFilm} from '../../../store/reducers/player-data/selectors';

import PlayerControls from '../../ui/player-controls/player-controls';
import ExitButton from '../../ui/player-controls/exit-button/exit-button';
import PlayButton from '../../ui/player-controls/play-button/play-button';
import FullScreenButton from '../../ui/player-controls/full-screen-button/full-screen-button';
import Spinner from '../../ui/loading/spinner/spinner';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function Player() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const film = useSelector(getFilm);
  const isPlaying = useSelector(getUpdatePlayingFilm);
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFilm(id));

    return () => {
      dispatch(resetPlayerData());
      dispatch(resetFilmData());
      setIsLoading(true);
    };
  }, [id, dispatch]);

  if (film.isLoading) {
    return <PageLoading {...film} />;
  }

  const {name, backgroundImage, videoLink} = film.data;

  const onFilmWaiting = () => setIsLoading(true);
  const onFilmPlaying = () => setIsLoading(false);

  const onTimeUpdate = ({target}) => {
    const {duration, currentTime} = target;
    const timeToEnd = getFilmDuration(currentTime, duration);
    const progress = getFilmProgress(currentTime, duration);

    dispatch(updateFilmProgress(timeToEnd, progress));
  };

  const onFilmEnded = ({target}) => {
    dispatch(resetPlayerData());
    target.play();
  };

  const onPlayButtonClick = (evt) => {
    evt.preventDefault();

    const {current} = videoRef;
    const flag = !isPlaying;
    dispatch(updateFilmPlaying(flag));

    return flag ? current.play() : current.pause();
  };

  const onFullScreenButtonClick = (evt) => {
    evt.preventDefault();

    const current = videoRef.current;

    if (!current) {
      return;
    }

    return current.requestFullscreen
      ? current.requestFullscreen()
      : current.webkitRequestFullscreen();
  };

  return (
    <div className="player">
      {isLoading && <Spinner />}

      <video
        className="player__video"
        src={videoLink}
        poster={backgroundImage}
        ref={videoRef}
        onWaiting={onFilmWaiting}
        onPlaying={onFilmPlaying}
        onTimeUpdate={onTimeUpdate}
        onEnded={onFilmEnded}
        autoPlay
      />

      <ExitButton id={id} />

      <div className="player__controls">
        <PlayerControls />

        <div className="player__controls-row">
          <PlayButton
            onPlayButtonClick={onPlayButtonClick}
            isLoading={isLoading}
          />

          <div className="player__name">
            {name}
          </div>

          <FullScreenButton onFullScreenButtonClick={onFullScreenButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Player;
