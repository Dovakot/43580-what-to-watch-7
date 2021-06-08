import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Logo({isModifier}) {
  const logoClass = cn('logo__link', {'logo__link--light': isModifier});

  return (
    <div className="logo">
      <a className={logoClass} href="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

Logo.propTypes = {
  isModifier: PropTypes.bool,
};

export default Logo;
