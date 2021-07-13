import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getGenresFromFilm, filterByGenre} from '../../../utils/film-util';
import filmProp from '../../../props/film-prop';

import Genres from './genres/genres';
import MoreButton from './more-button/more-button';
import FilmList from '../../ui/film-list/film-list';

function Catalog({films, activeGenre, filmsCounter}) {
  const filteredFilms = filterByGenre(films, activeGenre);

  return (
    <>
      <Genres genres={getGenresFromFilm(films)} />

      <FilmList films={filteredFilms.slice(0, filmsCounter)} />

      {filmsCounter <= filteredFilms.length && <MoreButton />}
    </>
  );
}

const mapStateToProps = ({films, activeGenre, filmsCounter}) => ({
  films,
  activeGenre,
  filmsCounter,
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  activeGenre: PropTypes.string.isRequired,
  filmsCounter: PropTypes.number.isRequired,
};

export {Catalog};
export default connect(mapStateToProps)(Catalog);
