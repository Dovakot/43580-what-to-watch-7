import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {FilmInfo} from '../../../const';
import {filterById} from '../../../utils/film-util';
import {fetchFilm, fetchSimilarFilms} from '../../../store/api-actions/api-film-actions/api-film-actions';
import {fetchFilmReviews} from '../../../store/api-actions/api-review-actions/api-review-actions';
import {resetFilmPageData} from '../../../store/actions/film-actions/film-actions';
import {resetReviewData} from '../../../store/actions/review-actions/review-actions';
import {getFilm, getSimilarFilms} from '../../../store/reducers/film-data/selectors';

import PageFooter from '../../ui/page-footer/page-footer';
import FilmList from '../../ui/film-list/film-list';
import FilmCard from '../../ui/film-card/film-card';
import PageLoading from '../../ui/loading/page-loading/page-loading';
import TextLoading from '../../ui/loading/text-loading/text-loading';

function Film() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const film = useSelector(getFilm);
  const similarFilms = useSelector(getSimilarFilms);

  const filteredSimilarFilms = filterById(similarFilms.data, +id)
    .slice(0, FilmInfo.MAX_FILM_COUNT);

  useEffect(() => {
    dispatch(fetchFilm(id));
    dispatch(fetchSimilarFilms(id));
    dispatch(fetchFilmReviews(id));

    return () => {
      dispatch(resetReviewData());
      dispatch(resetFilmPageData());
    };
  }, [id, dispatch]);

  if (film.isLoading) {
    return <PageLoading {...film} />;
  }

  return (
    <>
      <FilmCard />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {similarFilms.isLoading
            ? <TextLoading {...similarFilms} />
            : <FilmList films={filteredSimilarFilms} />}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default Film;
