import React from 'react';
import PropTypes from 'prop-types';

function TextLoading({isError}) {
  return (
    <p>
      {isError
        ? <span style={{color: 'red', fontSize: '13px'}}>Loading error</span>
        : 'Loading...'}
    </p>
  );
}

TextLoading.propTypes = {
  isError: PropTypes.bool.isRequired,
};

export default TextLoading;
