import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {MessageText} from '../../../../const';
import {formValidateProp} from '../../../../props/user-prop';
import {getUser} from '../../../../store/reducers/user-data/selectors';

import ErrorText from './error-text/error-text';

const getErrorText = ({message}) => (
  <ErrorText
    text={message}
    key={message}
  />
);

function ErrorMessage({messages}) {
  const {isAuthorizationError} = useSelector(getUser);

  return (
    <div className="sign-in__message">
      {isAuthorizationError ? MessageText.AUTH_DATA_ERROR : messages.map(getErrorText)}
    </div>
  );
}

ErrorMessage.propTypes = {
  messages: PropTypes.arrayOf(formValidateProp),
};

export default ErrorMessage;
