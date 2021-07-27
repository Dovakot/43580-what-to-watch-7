import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {DATA_LOADING} from '../../../const';
import {fetchFilms, fetchPromoFilm} from '../../../store/api-actions';

import PromoFilm from '../../ui/promo-film/promo-film';
import Catalog from '../../ui/catalog/catalog';
import PageFooter from '../../ui/page-footer/page-footer';
import PageLoading from '../../ui/loading/page-loading/page-loading';

function Main({loadFilms, loadPromoFilm}) {
  const [dataLoading, setDataLoading] = useState(DATA_LOADING);

  const checkDataLoading = (isError = false) => {
    setDataLoading({isLoading: isError, isError});
  };

  useEffect(() => {
    Promise
      .all([
        loadFilms(),
        loadPromoFilm(),
      ])
      .then(() => checkDataLoading())
      .catch(() => checkDataLoading(true));

    return () => setDataLoading(DATA_LOADING);
  }, [loadFilms, loadPromoFilm]);

  if (dataLoading.isLoading) {
    return <PageLoading {...dataLoading} />;
  }

  return (
    <>
      <section className="film-card">
        <PromoFilm />
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
