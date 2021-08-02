import React from 'react';
import {useDispatch} from 'react-redux';

import {incrementFilms} from '../../../../store/actions/film-actions/film-actions';

function MoreButton() {
  const dispatch = useDispatch();

  const onButtonClick = (evt) => {
    evt.preventDefault();

    dispatch(incrementFilms());
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
        Show more
      </button>
    </div>
  );
}

export default MoreButton;
