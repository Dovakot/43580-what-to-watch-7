import React from 'react';
import {useSelector} from 'react-redux';

import {PosterModifier} from '../../../const';
import {getFilm} from '../../../store/reducers/film-data/selectors';
import {getReviews} from '../../../store/reducers/review-data/selectors';

import PageHeader from '../page-header/page-header';
import Preview from '../film-card/preview/preview';
import Description from '../film-card/description/description';
import Poster from '../film-card/poster/poster';
import Overview from '../film-card/overview/overview';
import Details from '../film-card/details/details';
import Reviews from '../film-card/reviews/reviews';
import Tabs from '../film-card/tabs/tabs';
import TabItem from '../film-card/tabs/tab-item/tab-item';
import TextLoading from '../loading/text-loading/text-loading';

function FilmCard() {
  const reviews = useSelector(getReviews);
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    genre,
    released,
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime,
  } = useSelector(getFilm).data;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <Preview
          image={backgroundImage}
          name={name}
          bgColor={backgroundColor}
        />

        <PageHeader />

        <div className="film-card__wrap">
          <Description
            id={id}
            name={name}
            genre={genre}
            released={released}
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
              {reviews.isLoading
                ? <TextLoading {...reviews} />
                : <Reviews />}
            </TabItem>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
