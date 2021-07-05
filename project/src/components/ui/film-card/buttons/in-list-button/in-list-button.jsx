import React, {useState} from 'react';
import PropTypes from 'prop-types';

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

function InListButton({isFavorite}) {
  const [isList, setFilmStatus] = useState(isFavorite);

  const onButtonClick = () => setFilmStatus(!isList);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onButtonClick}
    >
      <SvgIcon icon={isList ? IconInfo.IN_LIST : IconInfo.ADD} />

      <span>My list</span>
    </button>
  );
}

InListButton.propTypes = {
  isFavorite: PropTypes.bool,
};

export default InListButton;
