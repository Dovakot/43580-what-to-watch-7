import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {AppRoute} from '../../../../../const';
import {changeGenre} from '../../../../../store/actions/film-actions/film-actions';

function Genre({genre, isActive}) {
  const itemClass = cn('catalog__genres-item',
    {'catalog__genres-item--active': !isActive},
  );
  const dispatch = useDispatch();

  const onLinkClick = (evt) => {
    evt.preventDefault();

    return isActive && dispatch(changeGenre(genre));
  };

  return (
    <li className={itemClass}>
      <Link
        className="catalog__genres-link"
        to={AppRoute.ROOT}
        onClick={onLinkClick}
      >
        {genre}
      </Link>
    </li>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Genre;
