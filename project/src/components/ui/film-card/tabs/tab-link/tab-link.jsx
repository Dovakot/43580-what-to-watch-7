import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {AppRoute} from '../../../../../const';

function TabLink({filmId, label, activeTab, onActiveTabChange}) {
  const itemClass = cn('film-nav__item',
    {'film-nav__item--active': label === activeTab},
  );

  const tabLink = generatePath(AppRoute.FILM, {id: filmId});

  const onLinkClick = (evt) => {
    evt.preventDefault();

    onActiveTabChange(label);
  };

  return (
    <li className={itemClass}>
      <Link
        className="film-nav__link"
        to={tabLink}
        onClick={onLinkClick}
      >
        {label}
      </Link>
    </li>
  );
}

TabLink.propTypes = {
  filmId: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default TabLink;
