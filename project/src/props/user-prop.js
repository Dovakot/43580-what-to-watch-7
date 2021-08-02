import PropTypes from 'prop-types';

const formValidateProp = PropTypes.shape({
  message: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  validate: PropTypes.func.isRequired,
});

export {
  formValidateProp
};
