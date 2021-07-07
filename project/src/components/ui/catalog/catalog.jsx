import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../store/actions';
import filmProp from '../../../props/film-prop';

import Genres from './genres/genres';
import FilmList from '../../ui/film-list/film-list';

function Catalog({films, genre, genres, onActiveGenreChange}) {
  return (
    <>
      <Genres
        genres={genres}
        activeGenre={genre}
        onActiveGenreChange={onActiveGenreChange}
      />

      <FilmList films={films} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onActiveGenreChange(currentGenre) {
    dispatch(ActionCreator.changeGenre(currentGenre));
    dispatch(ActionCreator.getFilmsByGenre(currentGenre));
  },
});

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre,
  genres: state.genres,
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onActiveGenreChange: PropTypes.func.isRequired,
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
