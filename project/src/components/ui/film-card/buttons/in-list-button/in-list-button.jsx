import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import './in-list-button.css';

import {IconInfo} from '../../../../../const';
import {sendFilmStatus} from '../../../../../store/api-actions/api-film-actions/api-film-actions';
import {getIsFavoriteFilm} from '../../../../../store/reducers/film-data/selectors';

import SvgIcon from '../../../svg-icon/svg-icon';

function InListButton({id}) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(getIsFavoriteFilm);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => () => setIsLoading(false), []);

  const iconType = isFavorite ? IconInfo.IN_LIST : IconInfo.ADD;

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
      <SvgIcon icon={iconType} />

      <span>My list</span>
    </button>
  );
}

InListButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default InListButton;
