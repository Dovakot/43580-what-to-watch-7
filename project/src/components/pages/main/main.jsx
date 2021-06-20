import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../../props/film-prop';

import Genres from '../../ui/genres/genres';
import PageFooter from '../../ui/page-footer/page-footer';
import FilmList from '../../ui/film-list/film-list';
import Preview from '../../ui/film-card/preview/preview';
import Description from '../../ui/film-card/description/description';
import Poster from '../../ui/film-card/poster/poster';

function Main({
  promoFilm: {name, posterImage, backgroundImage, genre, released},
  films,
}) {
  return (
    <>
      <section className="film-card">
        <Preview
          image={backgroundImage}
          name={name}
        />

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

          <FilmList
            films={films}
          />

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
  promoFilm: filmProp.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default Main;
