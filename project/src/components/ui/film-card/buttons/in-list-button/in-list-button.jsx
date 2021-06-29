import React, {useState} from 'react';
import PropTypes from 'prop-types';

const iconAdd = (
  <svg viewBox="0 0 19 20" width={19} height={20}>
    <use xlinkHref="#add" />
  </svg>
);

const iconInList = (
  <svg viewBox="0 0 18 14" width={18} height={14}>
    <use xlinkHref="#in-list" />
  </svg>
);

function InListButton({isFavorite}) {
  const [isList, setFilmStatus] = useState(isFavorite);

  const onButtonClick = (evt) => {
    evt.preventDefault();

    setFilmStatus(!isList);
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onButtonClick}
    >
      {isList ? iconInList : iconAdd}

      <span>My list</span>
    </button>
  );
}

InListButton.propTypes = {
  isFavorite: PropTypes.bool,
};

export default InListButton;
