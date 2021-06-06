import React from 'react';
import PropTypes from 'prop-types';

const setClass = (flag) => `logo__link ${flag ? 'logo__link--light' : ''}`;

function Logo({isModifier}) {
  return (
    <div className="logo">
      <a className={setClass(isModifier)} href="/">
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
