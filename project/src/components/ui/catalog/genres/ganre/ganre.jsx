import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import cn from 'classnames';

import {AppRoute, GenreInfo} from '../../../../../const';
import {ActionCreator} from '../../../../../store/actions';
import filmProp from '../../../../../props/film-prop';

function Genre({genre, films, isActive, onActiveGenreChange}) {
  const itemClass = cn('catalog__genres-item',
    {'catalog__genres-item--active': !isActive},
  );

  const onLinkClick = (evt) => {
    evt.preventDefault();

    return isActive && onActiveGenreChange(genre, films);
  };

  useEffect(
    () => onActiveGenreChange(GenreInfo.DEFAULT, films),
    [onActiveGenreChange, films],
  );

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

const mapStateToProps = ({films}) => ({
  films,
});

const mapDispatchToProps = (dispatch) => ({
  onActiveGenreChange(genre, films) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre(films));
  },
});

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveGenreChange: PropTypes.func.isRequired,
};

export {Genre};
export default connect(mapStateToProps, mapDispatchToProps)(Genre);
