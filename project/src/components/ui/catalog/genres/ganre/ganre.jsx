import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {AppRoute} from '../../../../../const';

function Genre({currentGenre, activeGenre, onActiveGenreChange}) {
  const itemClass = cn('catalog__genres-item',
    {'catalog__genres-item--active': currentGenre === activeGenre},
  );

  const onLinkClick = (evt) => {
    evt.preventDefault();

    return currentGenre !== activeGenre && onActiveGenreChange(currentGenre);
  };

  return (
    <li className={itemClass}>
      <Link
        className="catalog__genres-link"
        to={AppRoute.ROOT}
        onClick={onLinkClick}
      >
        {currentGenre}
      </Link>
    </li>
  );
}

Genre.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onActiveGenreChange: PropTypes.func.isRequired,
};

export default Genre;
