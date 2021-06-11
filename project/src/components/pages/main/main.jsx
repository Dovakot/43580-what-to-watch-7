import React from 'react';
import PropTypes from 'prop-types';

import {
  FILM_PROP
} from '../../../const';

import Logo from '../../ui/logo/logo';
import Genres from '../../ui/genres/genres';
import SmallFilmCard from '../../ui/small-film-card/small-film-card';
import PageFooter from '../../ui/page-footer/page-footer';
import UserBlock from '../../ui/user-block/user-block';
import BackgroundImage from '../../ui/film-card/background-image/background-image';
import Description from '../../ui/film-card/description/description';
import Poster from '../../ui/film-card/poster/poster';

const getSmallFilmCard = ({id, name, posterImage}) => (
  <SmallFilmCard
    key={id}
    name={name}
    poster={posterImage}
  />
);

function Main({
  promoFilm: {name, posterImage, backgroundImage, genre, released},
  films,
}) {
  return (
    <>
      <section className="film-card">
        <BackgroundImage
          image={backgroundImage}
          name={name}
        />

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster
              poster={posterImage}
              name={name}
            />

            <Description
              name={name}
              genre={genre}
              released={released}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <div className="catalog__films-list">
            {films.map(getSmallFilmCard)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
}

Main.propTypes = {
  promoFilm: FILM_PROP.isRequired,
  films: PropTypes.arrayOf(FILM_PROP).isRequired,
};

export default Main;
