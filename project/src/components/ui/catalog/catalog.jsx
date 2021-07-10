import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getGenresFromFilm, filterByGenre} from '../../../utils/film-util';
import filmProp from '../../../props/film-prop';

import Genres from './genres/genres';
import FilmList from '../../ui/film-list/film-list';

function Catalog({films, activeGenre}) {
  return (
    <>
      <Genres genres={getGenresFromFilm(films)} />

      <FilmList films={filterByGenre(films, activeGenre)} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </>
  );
}

const mapStateToProps = ({activeGenre}) => ({
  activeGenre,
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  activeGenre: PropTypes.string.isRequired,
};

export {Catalog};
export default connect(mapStateToProps)(Catalog);
