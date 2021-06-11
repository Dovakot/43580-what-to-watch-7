import React from 'react';
import PropTypes from 'prop-types';

function BackgroundImage({image, name}) {
  return (
    <div className="film-card__bg">
      <img
        src={image}
        alt={name}
      />
    </div>
  );
}

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BackgroundImage;
