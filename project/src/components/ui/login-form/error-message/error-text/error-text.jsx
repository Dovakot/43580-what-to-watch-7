import React from 'react';
import PropTypes from 'prop-types';

function ErrorText({text}) {
  return (
    <p>{text}</p>
  );
}

ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorText;
