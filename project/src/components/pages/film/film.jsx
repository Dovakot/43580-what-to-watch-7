import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {filterById} from '../../../utils/film-util';
import filmProp from '../../../props/film-prop';
import {fetchFilm, fetchSimilarFilms, fetchFilmReviews} from '../../../store/api-actions';

import PageFooter from '../../ui/page-footer/page-footer';
import FilmList from '../../ui/film-list/film-list';
import FilmCard from '../../ui/film-card/film-card';
import PageLoading from '../../ui/loading/page-loading/page-loading';
import TextLoading from '../../ui/loading/text-loading/text-loading';

const DataLoadingDefault = {
  FILM: {
    isLoading: true,
    isError: false,
  },
  SIMILAR_FILMS: {
    isLoading: true,
    isError: false,
  },
  FILM_REVIEWS: {
    isLoading: true,
    isError: false,
  },
};

function Film({similarFilms, loadFilm, loadSimilarFilms, loadFilmReviews}) {
  const params = useParams();
  const [dataLoading, setDataLoading] = useState(DataLoadingDefault);

  const id = +params.id;
  const filteredSimilarFilms = filterById(similarFilms, id);

  const checkDataLoading = (key, isError = false) => {
    setDataLoading((prevValue) => ({
      ...prevValue,
      [key]: {
        ...prevValue[key],
        isLoading: isError,
        isError,
      },
    }));
  };

  useEffect(() => {
    loadFilm(id)
      .then(() => checkDataLoading('FILM'))
      .catch(() => checkDataLoading('FILM', true));

    loadSimilarFilms(id)
      .then(() => checkDataLoading('SIMILAR_FILMS'))
      .catch(() => checkDataLoading('SIMILAR_FILMS', true));

    loadFilmReviews(id)
      .then(() => checkDataLoading('FILM_REVIEWS'))
      .catch(() => checkDataLoading('FILM_REVIEWS', true));

    return () => setDataLoading(DataLoadingDefault);
  }, [id, loadFilm, loadSimilarFilms, loadFilmReviews]);

  if (dataLoading.FILM.isLoading) {
    return <PageLoading {...dataLoading.FILM} />;
  }

  return (
    <>
      <FilmCard payload={dataLoading.FILM_REVIEWS} />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {dataLoading.SIMILAR_FILMS.isLoading
            ? <TextLoading {...dataLoading.SIMILAR_FILMS} />
            : <FilmList films={filteredSimilarFilms} />}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

const mapStateToProps = ({similarFilms}) => ({
  similarFilms,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    return dispatch(fetchFilm(id));
  },
  loadSimilarFilms(id) {
    return dispatch(fetchSimilarFilms(id));
  },
  loadFilmReviews(id) {
    return dispatch(fetchFilmReviews(id));
  },
});

Film.propTypes = {
  similarFilms: PropTypes.arrayOf(filmProp).isRequired,
  loadFilm: PropTypes.func.isRequired,
  loadSimilarFilms: PropTypes.func.isRequired,
  loadFilmReviews: PropTypes.func.isRequired,
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
