import React from 'react';
import PropTypes from 'prop-types';

function Preview({name, image, bgColor}) {
  return (
    <div className="film-card__bg" style={{backgroundColor: bgColor}}>
      <img
        src={image}
        alt={name}
      />
    </div>
  );
}

Preview.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Preview;
