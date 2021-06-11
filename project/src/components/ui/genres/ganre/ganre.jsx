import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

function Genre({genre}) {
  return (
    <li className="catalog__genres-item">
      <Link className="catalog__genres-link" to="#">
        {genre}
      </Link>
    </li>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Genre;
