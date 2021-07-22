import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {formValidateProp} from '../../../../props/user-prop';

function FormField({
  className, type, placeholder, name, id, label, validationRules, onFieldBlur,
}) {
  const fieldClass = cn('sign-in__field',
    {'sign-in__field--error': !validationRules[name].isValid},
  );

  return (
    <div className={fieldClass}>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onBlur={onFieldBlur}
      />
      <label
        className="sign-in__label visually-hidden"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

FormField.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validationRules: PropTypes.objectOf(formValidateProp),
  onFieldBlur: PropTypes.func,
};

export default FormField;
