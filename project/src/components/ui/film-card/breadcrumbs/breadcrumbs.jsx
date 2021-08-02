import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute} from '../../../../const';
import {getFilm} from '../../../../store/reducers/film-data/selectors';

function Breadcrumbs() {
  const {id, name} = useSelector(getFilm).data;
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

export default Breadcrumbs;
