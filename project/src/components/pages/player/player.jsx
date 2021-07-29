import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {DATA_LOADING, DateFormat} from '../../../const';
import {getTime} from '../../../utils/date-util';
import {fetchFilm} from '../../../store/api-actions';

import ExitButton from '../../ui/player-controls/exit-button/exit-button';
import PlayButton from '../../ui/player-controls/play-button/play-button';
import FullScreenButton from '../../ui/player-controls/full-screen-button/full-screen-button';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function Player({name, videoLink, backgroundImage, runTime, loadFilm}) {
  const {id} = useParams();
  const [dataLoading, setDataLoading] = useState(DATA_LOADING);

  const checkDataLoading = (isError) => {
    setDataLoading({isLoading: isError, isError});
  };

  useEffect(() => {
    loadFilm(+id)
      .then(() => checkDataLoading(false))
      .catch(() => checkDataLoading(true));

    return () => setDataLoading(DATA_LOADING);
  }, [id, loadFilm]);

  if (dataLoading.isLoading) {
    return <PageLoading {...dataLoading} />;
  }

  return (
    <div className="player">
      <video
        className="player__video"
        src={videoLink}
        poster={backgroundImage}
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

const mapStateToProps = ({film}) => ({
  name: film.name,
  videoLink: film.videoLink,
  backgroundImage: film.backgroundImage,
  runTime: film.runTime,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    return dispatch(fetchFilm(id));
  },
});

Player.propTypes = {
  name: PropTypes.string,
  videoLink: PropTypes.string,
  backgroundImage: PropTypes.string,
  runTime: PropTypes.number,
  loadFilm: PropTypes.func.isRequired,
};

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
