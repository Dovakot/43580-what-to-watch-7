import React from 'react';
import PropTypes from 'prop-types';

import {PosterModifier, FilmInfo} from '../../../const';
import filmProp from '../../../props/film-prop';

import PageFooter from '../../ui/page-footer/page-footer';
import FilmList from '../../ui/film-list/film-list';
import Preview from '../../ui/film-card/preview/preview';
import Description from '../../ui/film-card/description/description';
import Poster from '../../ui/film-card/poster/poster';
import Overview from '../../ui/film-card/overview/overview';
import Details from '../../ui/film-card/details/details';
import Reviews from '../../ui/film-card/reviews/reviews';
import Tabs from '../../ui/film-card/tabs/tabs';
import TabItem from '../../ui/film-card/tabs/tab-item/tab-item';

function Film({
  film: {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime,
    isFavorite,
  },
  similarFilms,
}) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Preview
            id={id}
            image={backgroundImage}
            name={name}
          />

          <div className="film-card__wrap">
            <Description
              id={id}
              name={name}
              genre={genre}
              released={released}
              isReview
              isFavorite
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              modifier={PosterModifier.BIG}
              poster={posterImage}
              name={name}
            />

            <Tabs filmId={id}>
              <TabItem label="Overview">
                <Overview
                  rating={rating}
                  scoresCount={scoresCount}
                  description={description}
                  director={director}
                  starring={starring}
                />
              </TabItem>

              <TabItem label="Details">
                <Details
                  director={director}
                  starring={starring}
                  runTime={runTime}
                  genre={genre}
                  released={released}
                />
              </TabItem>

              <TabItem label="Reviews">
                <Reviews />
              </TabItem>
            </Tabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms.slice(0, FilmInfo.MAX_FILM_COUNT)} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

Film.propTypes = {
  film: filmProp.isRequired,
  similarFilms: PropTypes.arrayOf(filmProp).isRequired,
};

export default Film;
