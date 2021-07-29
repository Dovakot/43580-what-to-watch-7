import React from 'react';
import PropTypes from 'prop-types';

import './text-loading.css';

function TextLoading({isError}) {
  return (
    <p className="text-loading">
      {isError
        ? <span className="text-loading__error">Loading error</span>
        : 'Loading...'}
    </p>
  );
}

TextLoading.propTypes = {
  isError: PropTypes.bool.isRequired,
};

export default TextLoading;
