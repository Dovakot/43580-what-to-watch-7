import React from 'react';
import PropTypes from 'prop-types';

import {
  FILM_PROP
} from '../../../const';

import Logo from '../../ui/logo/logo';
import SmallFilmCard from '../../ui/small-film-card/small-film-card';
import PageFooter from '../../ui/page-footer/page-footer';
import UserBlock from '../../ui/user-block/user-block';
import PageTitle from '../../ui/page-title/page-title';

const filterByFavorites = (films) => films.filter((film) => film.isFavorite);

const getSmallFilmCard = ({id, name, posterImage}) => (
  <SmallFilmCard
    key={id}
    name={name}
    poster={posterImage}
  />
);

function MyList({films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <PageTitle
          title="My list"
        />
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filterByFavorites(films).map(getSmallFilmCard)}
        </div>
      </section>

      <PageFooter />
    </div>
  );
}

MyList.propTypes = {
  films: PropTypes.arrayOf(FILM_PROP).isRequired,
};

export default MyList;
