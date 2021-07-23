import PropTypes from 'prop-types';

function PrivatePage({children}) {
  return children;
}

PrivatePage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivatePage;
