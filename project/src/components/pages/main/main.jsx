import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';

import PageHeader from '../../ui/page-header/page-header';
import PromoFilm from '../../ui/promo-film/promo-film';
import Catalog from '../../ui/catalog/catalog';
import PageFooter from '../../ui/page-footer/page-footer';
import TextLoading from '../../ui/loading/text-loading/text-loading';
import PageLoading from '../../ui/loading/page-loading/page-loading';

const DataLoadingDefault = {
  FILMS: {
    isLoading: true,
    isError: false,
    textError: '',
  },
  PROMO_FILM: {
    isLoading: true,
    isError: false,
    textError: 'Loading error promo film',
  },
};

function Main({loadFilms, loadPromoFilm}) {
  const [dataLoading, setDataLoading] = useState(DataLoadingDefault);

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
    loadFilms()
      .then(() => checkDataLoading('FILMS'))
      .catch(() => checkDataLoading('FILMS', true));

    loadPromoFilm()
      .then(() => checkDataLoading('PROMO_FILM'))
      .catch(() => checkDataLoading('PROMO_FILM', true));

    return () => setDataLoading(DataLoadingDefault);
  }, [loadFilms, loadPromoFilm]);

  if (dataLoading.FILMS.isLoading) {
    return <PageLoading {...dataLoading.FILMS} />;
  }

  return (
    <>
      <section className="film-card">
        <PageHeader />

        {dataLoading.PROMO_FILM.isLoading
          ? <TextLoading {...dataLoading.PROMO_FILM} />
          : <PromoFilm />}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Catalog />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    return dispatch(fetchFilms());
  },
  loadPromoFilm() {
    return dispatch(fetchPromoFilm());
  },
});

Main.propTypes = {
  loadFilms: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
};

export {Main};
export default connect(null, mapDispatchToProps)(Main);
