import React from 'react';
import PropTypes from 'prop-types';

import './text-loading.css';

const BootMessage = {
  LOADING: 'Loading...',
  ERROR: 'Loading error',
};

function TextLoading({textError, isError}) {
  return (
    <p className="text-loading">
      {isError
        ? <span className="text-loading__error">{textError || BootMessage.ERROR}</span>
        : BootMessage.LOADING}
    </p>
  );
}

TextLoading.propTypes = {
  textError: PropTypes.string,
  isError: PropTypes.bool.isRequired,
};

export default TextLoading;
