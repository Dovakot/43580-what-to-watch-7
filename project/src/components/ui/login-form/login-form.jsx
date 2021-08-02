import React, {Children, cloneElement, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {EMAIL_FORMAT} from '../../../const';
import {setAuthorizationError, setAuthorizationProcess} from '../../../store/actions/user-actions/user-actions';
import {login} from '../../../store/api-actions/api-user-actions/api-user-actions';
import {getUser} from '../../../store/reducers/user-data/selectors';

import ErrorMessage from './error-message/error-message';

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

const FORM_VALUE_DEFAULT = {
  email: '',
  password: '',
};

function LoginForm({children}) {
  const dispatch = useDispatch();
  const {isAuthorizationError} = useSelector(getUser);

  const [validationRules, setValidationRules] = useState(VALIDATION_RULES);
  const [formValue, setFormValue] = useState(FORM_VALUE_DEFAULT);

  useEffect(() => () => {
    setValidationRules(VALIDATION_RULES);
    setFormValue(FORM_VALUE_DEFAULT);
  }, []);

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
    if (isAuthorizationError) {
      dispatch(setAuthorizationError(false));
    }

    validateField(target);

    setFormValue((prevValue) => ({
      ...prevValue,
      [target.type]: target.value,
    }));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (validateForm(evt)) {
      dispatch(setAuthorizationProcess(true));
      dispatch(login(formValue));
    }
  };

  const getField = (child) => cloneElement(child, {validationRules, onFieldBlur});

  return (
    <form
      action="#"
      className="sign-in__form"
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    >
      {isAuthorizationError && <ErrorMessage />}
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

LoginForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default LoginForm;
