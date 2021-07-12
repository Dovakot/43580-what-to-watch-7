import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {PageType} from '../../const';
import {findFilmById} from '../../utils/film-util';
import filmProp from '../../props/film-prop';

import Film from './film/film';
import AddReview from './add-review/add-review';
import Player from './player/player';
import NotFound from './not-found/not-found';

function Pages({type, films}) {
  const {id} = useParams();
  const film = findFilmById(films, +id);

  if (!film) {
    return <NotFound />;
  }

  switch (type) {
    case PageType.REVIEW:
      return <AddReview {...film} />;
    case PageType.PLAYER:
      return <Player {...film} />;
    default:
      return <Film film={film} />;
  }
}

const mapStateToProps = ({films}) => ({
  films,
});

Pages.propTypes = {
  type: PropTypes.string,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export {Pages};
export default connect(mapStateToProps)(Pages);
