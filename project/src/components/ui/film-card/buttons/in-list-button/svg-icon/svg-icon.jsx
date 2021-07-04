import React from 'react';
import PropTypes from 'prop-types';

import {setViewBox} from '../../../../../../utils/film-util';

function SvgIcon({
  icon: {href, width, height},
}) {
  return (
    <svg
      viewBox={setViewBox(width, height)}
      width={width}
      height={height}
    >
      <use xlinkHref={href} />
    </svg>
  );
}

SvgIcon.propTypes = {
  icon: PropTypes.shape({
    href: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default SvgIcon;
