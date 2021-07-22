import React, {Children, cloneElement, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AuthorizationStatus} from '../../../const';
import {login} from '../../../store/api-actions';
import {ActionCreator} from '../../../store/actions';

import ErrorMessage from './error-message/error-message';

const EMAIL_FORMAT = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

const VALIDATION_RULES = {
  'user-email': {
    message: 'Please enter a valid email address',
    isValid: true,
    validate: (value) => EMAIL_FORMAT.test(value),
  },
  'user-password': {
    message: 'Password field cannot be empty',
    isValid: true,
    validate: (value) => value.trim().length !== 0,
  },
};

const VALIDATION_FIELDS = Object.keys(VALIDATION_RULES);

function LoginForm({children, isAuthorisationError, submitForm, setIsAuthorisationError}) {
  const [validationRules, setValidationRules] = useState(VALIDATION_RULES);
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const errorText = Object.values(validationRules).filter(({isValid}) => !isValid);

  const validateField = (target, flag) => {
    const {name, value} = target;
    const isValid = flag || validationRules[name].validate(value);

    setValidationRules((prevValue) => ({
      ...prevValue,
      [name]: {
        ...prevValue[name],
        isValid,
      },
    }));

    return isValid;
  };

  const validateForm = ({target}) => {
    let isValid = true;

    for (const key of VALIDATION_FIELDS) {
      const field = target[key];

      isValid = validateField(field);

      if (!isValid) {
        return field.focus();
      }
    }

    return isValid;
  };

  const onFieldBlur = ({target}) => !target.value && validateField(target, true);

  const onFormChange = ({target}) => {
    if (isAuthorisationError) {
      setIsAuthorisationError(false);
    }

    validateField(target);

    setFormValue((prevValue) => ({
      ...prevValue,
      [target.type]: target.value,
    }));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    return validateForm(evt) && submitForm(formValue);
  };

  const getField = (child) => cloneElement(child, {validationRules, onFieldBlur});

  return (
    <form
      action="#"
      className="sign-in__form"
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    >
      {isAuthorisationError && <ErrorMessage />}
      {errorText.length > 0 && <ErrorMessage messages={errorText} />}

      <div className="sign-in__fields">
        {Children.map(children, getField)}
      </div>

      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = ({isAuthorisationError}) => ({
  isAuthorisationError,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm(data) {
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.PROCESS));
    dispatch(login(data));
  },
  setIsAuthorisationError(isError) {
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH, isError));
  },
});

LoginForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isAuthorisationError: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired,
  setIsAuthorisationError: PropTypes.func.isRequired,
};

export {LoginForm};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
