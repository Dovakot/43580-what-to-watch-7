import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AppRoute} from '../../../../const';

function Breadcrumbs({id, name}) {
  const linkBack = generatePath(AppRoute.FILM, {id});

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={linkBack}>
            {name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = ({film}) => ({
  id: film.id,
  name: film.name,
});

Breadcrumbs.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export {Breadcrumbs};
export default connect(mapStateToProps)(Breadcrumbs);
