import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {AppRoute} from '../../../const';

function Logo({isModifier}) {
  const logoClass = cn('logo__link', {
    'logo__link--light': isModifier,
  });

  return (
    <div className="logo">
      <Link className={logoClass} to={AppRoute.ROOT}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  isModifier: PropTypes.bool,
};

export default Logo;
