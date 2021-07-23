import PropTypes from 'prop-types';

const userProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
});

const formValidateProp = PropTypes.shape({
  message: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  validate: PropTypes.func.isRequired,
});

export {
  userProp,
  formValidateProp
};
