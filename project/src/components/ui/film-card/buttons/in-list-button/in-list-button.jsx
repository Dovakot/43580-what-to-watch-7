import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import './in-list-button.css';

import {sendFilmStatus} from '../../../../../store/api-actions/api-film-actions/api-film-actions';
import {getIsFavoriteFilm} from '../../../../../store/reducers/film-data/selectors';

import SvgIcon from './svg-icon/svg-icon';

const IconInfo = {
  ADD: {
    href: '#add',
    width: 19,
    height: 20,
  },
  IN_LIST: {
    href: '#in-list',
    width: 18,
    height: 14,
  },
};

function InListButton({id}) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(getIsFavoriteFilm);
  const [isLoading, setIsLoading] = useState(false);

  const onButtonClick = (evt) => {
    evt.preventDefault();

    setIsLoading(true);
    dispatch(sendFilmStatus(id, !isFavorite))
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      disabled={isLoading}
      onClick={onButtonClick}
    >
      <SvgIcon icon={isFavorite ? IconInfo.IN_LIST : IconInfo.ADD} />

      <span>My list</span>
    </button>
  );
}

InListButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default InListButton;
