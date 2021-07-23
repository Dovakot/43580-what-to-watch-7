import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {formValidateProp} from '../../../../props/user-prop';
import ErrorText from './error-text/error-text';

const DEFAULT_ERROR = 'We can’t recognize this email\nand password combination. Please try again.';

const getErrorText = ({message}) => (
  <ErrorText
    text={message}
    key={message}
  />
);

function ErrorMessage({messages, isAuthorisationError}) {
  return (
    <div className="sign-in__message">
      {isAuthorisationError ? DEFAULT_ERROR : messages.map(getErrorText)}
    </div>
  );
}

const mapStateToProps = ({isAuthorisationError}) => ({
  isAuthorisationError,
});

ErrorMessage.propTypes = {
  messages: PropTypes.arrayOf(formValidateProp),
  isAuthorisationError: PropTypes.bool.isRequired,
};

export {ErrorMessage};
export default connect(mapStateToProps)(ErrorMessage);
