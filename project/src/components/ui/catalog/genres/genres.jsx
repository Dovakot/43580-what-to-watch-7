import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import Genre from './ganre/ganre';

function Genres({genres, activeGenre}) {
  const getGenre = (genre) => (
    <Genre
      key={genre}
      genre={genre}
      isActive={genre !== activeGenre}
    />
  );

  return (
    <ul className="catalog__genres-list">
      {genres.map(getGenre)}
    </ul>
  );
}

const mapStateToProps = ({activeGenre}) => ({
  activeGenre,
});

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
};

export {Genres};
export default connect(mapStateToProps)(Genres);
