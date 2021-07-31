import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {DateFormat} from '../../../const';
import {getTime} from '../../../utils/date-util';
import {fetchFilm} from '../../../store/api-actions/api-film-actions/api-film-actions';
import {resetFilmData} from '../../../store/actions/film-actions/film-actions';
import {getFilm} from '../../../store/reducers/film-data/selectors';

import ExitButton from '../../ui/player-controls/exit-button/exit-button';
import PlayButton from '../../ui/player-controls/play-button/play-button';
import FullScreenButton from '../../ui/player-controls/full-screen-button/full-screen-button';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function Player() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const film = useSelector(getFilm);

  useEffect(() => {
    dispatch(fetchFilm(id));

    return () => dispatch(resetFilmData());
  }, [id, dispatch]);

  if (film.isLoading) {
    return <PageLoading {...film} />;
  }

  const {name, backgroundImage, videoLink, runTime} = film.data;

  return (
    <div className="player">
      <video
        className="player__video"
        src={videoLink}
        poster={backgroundImage}
      />

      <ExitButton id={id} />

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

export default Player;
